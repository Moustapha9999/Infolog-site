import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { isStaffRole, type StaffRole } from "./roles";

export type AdminSession = {
  userId: string;
  email: string | undefined;
  role: StaffRole;
};

export async function getAdminSession(): Promise<AdminSession | null> {
  if (!isSupabaseConfigured()) return null;

  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) return null;

  const claims = data.claims as {
    sub?: string;
    email?: string;
    app_metadata?: { role?: string };
  };
  const role = claims.app_metadata?.role;
  if (!claims.sub || !isStaffRole(role)) return null;

  return {
    userId: claims.sub,
    email: claims.email,
    role,
  };
}

export async function requireAdminSession(options?: { adminOnly?: boolean }) {
  const session = await getAdminSession();
  if (!session) {
    if (isSupabaseConfigured()) {
      const supabase = await createServerSupabaseClient();
      const { data } = await supabase.auth.getClaims();
      if (data?.claims) {
        redirect("/admin/login?error=role");
      }
    }
    redirect("/admin/login");
  }
  if (options?.adminOnly && session.role !== "admin") {
    redirect("/admin");
  }
  return session;
}
