import { setUserRole } from "@/app/admin/actions/content";
import { AdminFormDialog, AdminRowActions } from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { AdminSelect } from "@/components/admin/AdminField";
import { requireAdminSession } from "@/lib/cms/auth";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function AdminUsersPage() {
  await requireAdminSession({ adminOnly: true });
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("profiles")
    .select("id, display_name, role, created_at")
    .order("created_at");

  return (
    <div className="space-y-8">
      <AdminPageHeader
        eyebrow="Accès"
        title="Utilisateurs"
        description="Créez le compte dans Supabase Auth, puis attribuez ici le rôle admin ou editor. Sans rôle, l’accès back-office est refusé."
      />
      <AdminPanel>
        {(data ?? []).length === 0 ? (
          <AdminEmpty>Aucun profil.</AdminEmpty>
        ) : (
          <ul className="divide-y divide-ink/10">
            {(data ?? []).map((profile) => (
              <li
                key={profile.id}
                className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{profile.display_name || profile.id}</p>
                  <p className="font-mono text-[11px] text-mute">
                    {profile.role || "aucun rôle"}
                  </p>
                </div>
                <AdminRowActions>
                  <AdminFormDialog
                    action={setUserRole}
                    title="Modifier le rôle"
                    submitLabel="Attribuer"
                  >
                    <input type="hidden" name="id" value={profile.id} />
                    <AdminSelect
                      label="Rôle"
                      name="role"
                      defaultValue={profile.role ?? "editor"}
                    >
                      <option value="editor">editor</option>
                      <option value="admin">admin</option>
                    </AdminSelect>
                  </AdminFormDialog>
                </AdminRowActions>
              </li>
            ))}
          </ul>
        )}
      </AdminPanel>
    </div>
  );
}
