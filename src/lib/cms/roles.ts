export const STAFF_ROLES = ["admin", "editor"] as const;

export type StaffRole = (typeof STAFF_ROLES)[number];

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
