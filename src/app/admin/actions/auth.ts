"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { writeAuditLog } from "@/lib/cms/audit";
import { isStaffRole } from "@/lib/cms/roles";
import {
  FORGOT_PASSWORD_PATH,
  RESET_PASSWORD_PATH,
  safeAdminNext,
} from "@/lib/cms/admin-path";
import {
  MIN_PASSWORD_LENGTH,
  PASSWORD_RECOVERY_COOKIE,
  passwordRecoveryCookieOptions,
} from "@/lib/cms/password-recovery";
import { getRequestOrigin } from "@/lib/cms/request-origin";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const next = safeAdminNext(String(formData.get("next") ?? "/admin"));

  const remember = formData.get("remember") === "1";
  const supabase = await createServerSupabaseClient({
    sessionMaxAge: remember ? 60 * 60 * 24 * 30 : 60 * 60 * 8,
  });
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    redirect(`/admin/login?error=1&next=${encodeURIComponent(next)}`);
  }

  const role = (data.user.app_metadata as { role?: string } | undefined)?.role;
  if (!isStaffRole(role)) {
    await supabase.auth.signOut();
    redirect(`/admin/login?error=role&next=${encodeURIComponent(next)}`);
  }

  redirect(next);
}

export async function logoutAction() {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.auth.getClaims();
  await supabase.auth.signOut();
  await writeAuditLog({
    actorId: (data?.claims as { sub?: string } | undefined)?.sub,
    action: "logout",
    entityType: "session",
  });
  redirect("/admin/login");
}

export async function requestPasswordResetAction(formData: FormData) {
  const website = String(formData.get("website") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (website) {
    redirect(`${FORGOT_PASSWORD_PATH}?sent=1`);
  }
  if (!email || !email.includes("@")) {
    redirect(`${FORGOT_PASSWORD_PATH}?error=email`);
  }

  const supabase = await createServerSupabaseClient();
  const origin = await getRequestOrigin();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(RESET_PASSWORD_PATH)}`,
  });

  if (error) {
    const message = error.message.toLowerCase();
    if (message.includes("redirect")) {
      redirect(`${FORGOT_PASSWORD_PATH}?error=config`);
    }
    redirect(`${FORGOT_PASSWORD_PATH}?error=send`);
  }

  redirect(`${FORGOT_PASSWORD_PATH}?sent=1`);
}

export async function updatePasswordAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  if (password.length < MIN_PASSWORD_LENGTH) {
    redirect(`${RESET_PASSWORD_PATH}?error=weak`);
  }
  if (password !== confirm) {
    redirect(`${RESET_PASSWORD_PATH}?error=mismatch`);
  }

  const supabase = await createServerSupabaseClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const actorId = (claimsData?.claims as { sub?: string } | undefined)?.sub;
  if (!actorId) {
    redirect(`${RESET_PASSWORD_PATH}?error=session`);
  }

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    redirect(`${RESET_PASSWORD_PATH}?error=update`);
  }

  const cookieStore = await cookies();
  cookieStore.set(PASSWORD_RECOVERY_COOKIE, "", {
    ...passwordRecoveryCookieOptions,
    maxAge: 0,
  });

  await writeAuditLog({
    actorId,
    action: "password_reset",
    entityType: "session",
  });

  redirect(`${RESET_PASSWORD_PATH}?ok=1`);
}
