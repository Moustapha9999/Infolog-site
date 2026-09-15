type CookieSameSite = "lax" | "strict" | "none";

type IncomingCookieOptions = {
  path?: string;
  sameSite?: CookieSameSite | boolean;
  secure?: boolean;
  httpOnly?: boolean;
  maxAge?: number;
  domain?: string;
  expires?: Date;
};

function normalizeSameSite(
  value: IncomingCookieOptions["sameSite"],
): CookieSameSite {
  if (value === true) return "strict";
  if (value === false || value === undefined) return "lax";
  return value;
}

export function hardenedCookieOptions(options: IncomingCookieOptions = {}) {
  return {
    ...options,
    path: options.path ?? "/",
    sameSite: normalizeSameSite(options.sameSite),
    secure: options.secure ?? process.env.NODE_ENV === "production",
  };
}
