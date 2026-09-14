export const STAFF_ROLES = ["admin", "editor"] as const;

export type StaffRole = (typeof STAFF_ROLES)[number];

export const STAFF_ROLE_LABELS: Record<StaffRole, string> = {
  admin: "Administrateur",
  editor: "Éditeur",
};

export const STAFF_ROLE_HINTS: Record<StaffRole, string> = {
  admin:
    "Accès complet : contenus, messages et gestion des utilisateurs (création, mots de passe, rôles).",
  editor:
    "Accès aux contenus du site (pages, produits, médias, réseaux sociaux, messages). Pas de gestion des utilisateurs.",
};

export function isStaffRole(role: string | undefined | null): role is StaffRole {
  return role === "admin" || role === "editor";
}

export function canManageUsers(role: string | undefined | null) {
  return role === "admin";
}

export function roleFromClaims(claims: {
  app_metadata?: { role?: string };
} | null) {
  return claims?.app_metadata?.role ?? null;
}
