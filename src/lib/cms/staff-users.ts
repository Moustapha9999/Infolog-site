import { createServiceSupabaseClient } from "@/lib/supabase/admin";
import { isStaffRole, type StaffRole } from "@/lib/cms/roles";

export type StaffAccount = {
  id: string;
  email: string;
  displayName: string;
  role: StaffRole | null;
  createdAt: string;
};

export async function listStaffAccounts(): Promise<StaffAccount[]> {
  const admin = createServiceSupabaseClient();
  const [{ data: authData, error: authError }, { data: profiles }] =
    await Promise.all([
      admin.auth.admin.listUsers({ page: 1, perPage: 200 }),
      admin
        .from("profiles")
        .select("id, display_name, role, created_at")
        .order("created_at", { ascending: true }),
    ]);

  if (authError) {
    throw new Error(authError.message);
  }

  const profileById = new Map(
    (profiles ?? []).map((profile) => [profile.id as string, profile]),
  );
  const accounts = new Map<string, StaffAccount>();

  for (const user of authData.users) {
    const profile = profileById.get(user.id);
    const roleRaw = profile?.role ?? (user.app_metadata as { role?: string } | undefined)?.role;
    const role = isStaffRole(roleRaw) ? roleRaw : null;
    if (!role) continue;
    accounts.set(user.id, {
      id: user.id,
      email: user.email ?? "",
      displayName:
        (profile?.display_name as string | null | undefined)?.trim() ||
        user.email?.split("@")[0] ||
        user.id,
      role,
      createdAt: (profile?.created_at as string | undefined) ?? user.created_at,
    });
  }

  for (const profile of profiles ?? []) {
    const role = isStaffRole(profile.role) ? profile.role : null;
    if (!role || accounts.has(profile.id)) continue;
    accounts.set(profile.id, {
      id: profile.id,
      email: "",
      displayName: profile.display_name?.trim() || profile.id,
      role,
      createdAt: profile.created_at,
    });
  }

  return [...accounts.values()].sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt),
  );
}

export function countAdmins(accounts: StaffAccount[]) {
  return accounts.filter((account) => account.role === "admin").length;
}
