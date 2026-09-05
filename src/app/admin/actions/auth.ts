"use server";

import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { writeAuditLog } from "@/lib/cms/audit";
import { isStaffRole } from "@/lib/cms/roles";
import { safeAdminNext } from "@/lib/cms/admin-path";

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
