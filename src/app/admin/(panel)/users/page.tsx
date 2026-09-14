import { Shield } from "lucide-react";
import {
  createStaffUser,
  deleteStaffUser,
  setStaffUserPassword,
  updateStaffUser,
} from "@/app/admin/actions/users";
import {
  AdminDeleteDialog,
  AdminFormDialog,
  AdminRowActions,
} from "@/components/admin/AdminActions";
import {
  AdminEmpty,
  AdminPageHeader,
  AdminPanel,
} from "@/components/admin/AdminChrome";
import {
  AdminField,
  AdminSelect,
  AdminSubmit,
} from "@/components/admin/AdminField";
import { requireAdminSession } from "@/lib/cms/auth";
import { formatDateTime } from "@/lib/cms/format";
import { MIN_PASSWORD_LENGTH } from "@/lib/cms/password-recovery";
import {
  STAFF_ROLE_HINTS,
  STAFF_ROLE_LABELS,
  type StaffRole,
} from "@/lib/cms/roles";
import { listStaffAccounts } from "@/lib/cms/staff-users";
import { canUseServiceRole } from "@/lib/supabase/admin";

const ERRORS: Record<string, string> = {
  service:
    "La clé serveur Supabase (SUPABASE_SECRET_KEY) est requise pour créer, modifier ou supprimer des comptes.",
  email: "Indiquez une adresse e-mail valide.",
  role: "Choisissez un rôle d’accès.",
  password: `Le mot de passe doit contenir au moins ${MIN_PASSWORD_LENGTH} caractères.`,
  "password-match": "Les deux mots de passe ne correspondent pas.",
  create: "Impossible de créer le compte. L’e-mail existe peut-être déjà.",
  update: "Impossible d’enregistrer les modifications.",
  delete: "Impossible de supprimer ce compte.",
  "last-admin": "Il doit rester au moins un administrateur.",
  self: "Vous ne pouvez pas supprimer votre propre compte.",
  "not-found": "Utilisateur introuvable.",
};

const SUCCESS: Record<string, string> = {
  created: "Compte créé. La personne peut se connecter à la console.",
  updated: "Compte mis à jour.",
  password: "Mot de passe modifié.",
  deleted: "Compte supprimé.",
  saved: "Enregistré.",
};

function RoleFields({ defaultRole }: { defaultRole?: StaffRole }) {
  return (
    <AdminSelect
      label="Accès"
      name="role"
      defaultValue={defaultRole ?? "editor"}
      hint={`${STAFF_ROLE_LABELS.admin} : ${STAFF_ROLE_HINTS.admin} ${STAFF_ROLE_LABELS.editor} : ${STAFF_ROLE_HINTS.editor}`}
    >
      <option value="editor">{STAFF_ROLE_LABELS.editor}</option>
      <option value="admin">{STAFF_ROLE_LABELS.admin}</option>
    </AdminSelect>
  );
}

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; ok?: string }>;
}) {
  await requireAdminSession({ adminOnly: true });
  const { error, ok } = await searchParams;
  const serviceReady = canUseServiceRole();
  let accounts: Awaited<ReturnType<typeof listStaffAccounts>> = [];
  let loadError: string | null = null;

  if (serviceReady) {
    try {
      accounts = await listStaffAccounts();
    } catch {
      loadError = "Impossible de charger les utilisateurs Auth.";
    }
  } else {
    loadError = ERRORS.service;
  }

  return (
    <div className="space-y-8">
      <AdminPageHeader
        eyebrow="Accès"
        title="Utilisateurs & accès"
        description="Créez, modifiez et retirez les comptes qui peuvent se connecter à la console de pilotage. Attribuez le rôle Administrateur ou Éditeur."
      />
      {error && ERRORS[error] ? (
        <p className="border border-copper/40 bg-copper/10 px-4 py-3 text-sm text-ink">
          {ERRORS[error]}
        </p>
      ) : null}
      {ok && SUCCESS[ok] ? (
        <p className="border border-plan/30 bg-plan/10 px-4 py-3 text-sm text-ink">
          {SUCCESS[ok]}
        </p>
      ) : null}
      {loadError ? (
        <p className="border border-ink/15 px-4 py-3 text-sm text-mute">
          {loadError}
        </p>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <AdminPanel title="Comptes de la console">
          {accounts.length === 0 ? (
            <AdminEmpty>Aucun utilisateur back-office.</AdminEmpty>
          ) : (
            <ul className="divide-y divide-ink/10">
              {accounts.map((account) => (
                <li
                  key={account.id}
                  className="flex flex-wrap items-start justify-between gap-3 py-4 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="font-medium">{account.displayName}</p>
                    <p className="mt-0.5 text-sm text-mute">
                      {account.email || "E-mail indisponible"}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-plan">
                      <Shield className="h-3 w-3" aria-hidden />
                      {account.role
                        ? STAFF_ROLE_LABELS[account.role]
                        : "sans accès"}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-mute">
                      {formatDateTime(account.createdAt)}
                    </p>
                  </div>
                  <AdminRowActions>
                    <AdminFormDialog
                      action={updateStaffUser}
                      title="Modifier le compte"
                      triggerLabel="Modifier"
                      icon="pencil"
                    >
                      <input type="hidden" name="id" value={account.id} />
                      <AdminField
                        label="Nom affiché"
                        name="display_name"
                        defaultValue={account.displayName}
                        required
                      />
                      <AdminField
                        label="E-mail de connexion"
                        name="email"
                        type="email"
                        defaultValue={account.email}
                        required
                      />
                      <RoleFields defaultRole={account.role ?? "editor"} />
                    </AdminFormDialog>
                    <AdminFormDialog
                      action={setStaffUserPassword}
                      title="Nouveau mot de passe"
                      triggerLabel="Mot de passe"
                      submitLabel="Changer"
                      icon="key"
                    >
                      <input type="hidden" name="id" value={account.id} />
                      <AdminField
                        label="Nouveau mot de passe"
                        name="password"
                        type="password"
                        required
                        hint={`Minimum ${MIN_PASSWORD_LENGTH} caractères.`}
                      />
                      <AdminField
                        label="Confirmer"
                        name="password_confirm"
                        type="password"
                        required
                      />
                    </AdminFormDialog>
                    <AdminDeleteDialog
                      action={deleteStaffUser}
                      name={account.displayName || account.email}
                    >
                      <input type="hidden" name="id" value={account.id} />
                    </AdminDeleteDialog>
                  </AdminRowActions>
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>

        <AdminPanel title="Créer un utilisateur">
          <p className="text-sm leading-6 text-mute">
            Le compte pourra se connecter immédiatement à{" "}
            <span className="font-mono text-xs">/admin</span>.
          </p>
          <form action={createStaffUser} className="mt-5 grid gap-4">
            <AdminField label="Nom affiché" name="display_name" required />
            <AdminField
              label="E-mail de connexion"
              name="email"
              type="email"
              required
            />
            <AdminField
              label="Mot de passe"
              name="password"
              type="password"
              required
              hint={`Minimum ${MIN_PASSWORD_LENGTH} caractères.`}
            />
            <AdminField
              label="Confirmer le mot de passe"
              name="password_confirm"
              type="password"
              required
            />
            <RoleFields />
            <AdminSubmit>Créer le compte</AdminSubmit>
          </form>
        </AdminPanel>
      </div>
    </div>
  );
}
