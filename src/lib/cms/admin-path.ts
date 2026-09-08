export const ADMIN_LOGIN_PATH = "/admin/login";
export const FORGOT_PASSWORD_PATH = "/admin/mot-de-passe-oublie";
export const RESET_PASSWORD_PATH = "/admin/reinitialiser-mot-de-passe";

const PUBLIC_ADMIN_AUTH_PATHS = [
  ADMIN_LOGIN_PATH,
  FORGOT_PASSWORD_PATH,
  RESET_PASSWORD_PATH,
] as const;

export function isPublicAdminAuthPath(pathname: string) {
  return PUBLIC_ADMIN_AUTH_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

export function safeAdminNext(next: string | null | undefined) {
  const value = (next ?? "").trim() || "/admin";
  if (!value.startsWith("/admin") || isPublicAdminAuthPath(value)) {
    return "/admin";
  }
  return value;
}

export function safePasswordResetNext(next: string | null | undefined) {
  const value = (next ?? "").trim();
  if (value === RESET_PASSWORD_PATH || value.startsWith(`${RESET_PASSWORD_PATH}?`)) {
    return RESET_PASSWORD_PATH;
  }
  return RESET_PASSWORD_PATH;
}
