export const PASSWORD_RECOVERY_COOKIE = "infolog_pw_recovery";
export const MIN_PASSWORD_LENGTH = 8;

export const passwordRecoveryCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60,
  secure: process.env.NODE_ENV === "production",
};
