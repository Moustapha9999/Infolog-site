function stripPort(host: string) {
  const trimmed = host.trim().toLowerCase();
  if (trimmed.startsWith("[")) {
    const end = trimmed.indexOf("]");
    return end >= 0 ? trimmed.slice(1, end) : trimmed;
  }
  return trimmed.split(":")[0] ?? trimmed;
}

function hostnameFromUrl(value: string | undefined, fallback: string) {
  if (!value?.trim()) return fallback;
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return stripPort(value);
  }
}

function parseHostList(value: string | undefined) {
  return (value ?? "")
    .split(/[\s,]+/)
    .map(stripPort)
    .filter(Boolean);
}

function isLocalHostname(host: string) {
  return (
    host === "localhost" ||
    host.endsWith(".localhost") ||
    host === "127.0.0.1"
  );
}

export function hostFromHeaders(headers: Headers) {
  const raw = (headers.get("x-forwarded-host") ?? headers.get("host") ?? "")
    .split(",")[0]
    .trim();
  return stripPort(raw);
}

export function getPublicHost() {
  const fromEnv = process.env.PUBLIC_HOST?.trim();
  if (fromEnv) return stripPort(fromEnv);
  return hostnameFromUrl(process.env.SITE_URL, "infolog.digital");
}

export function getAdminHost() {
  const fromEnv = process.env.ADMIN_HOST?.trim();
  if (fromEnv) return stripPort(fromEnv);
  return hostnameFromUrl(process.env.ADMIN_URL, "");
}

export function getPublicHosts() {
  return [getPublicHost(), ...parseHostList(process.env.PUBLIC_HOST_ALIASES)];
}

export function getAdminHosts() {
  const primary = getAdminHost();
  const aliases = parseHostList(process.env.ADMIN_HOST_ALIASES);
  return primary ? [primary, ...aliases] : aliases;
}

export function adminHostSplitEnabled() {
  const admin = getAdminHost();
  return Boolean(admin) && admin !== getPublicHost();
}

export function isAdminHostname(host: string) {
  return adminHostSplitEnabled() && getAdminHosts().includes(stripPort(host));
}

export function isPublicHostname(host: string) {
  return getPublicHosts().includes(stripPort(host));
}

export function originForHost(host: string) {
  const hostname = stripPort(host);
  return `${isLocalHostname(hostname) ? "http" : "https"}://${hostname}`;
}

export function pairedAdminHost(publicHost: string) {
  const publics = getPublicHosts();
  const admins = getAdminHosts();
  const index = publics.indexOf(stripPort(publicHost));
  if (index > 0) {
    return admins[index] ?? stripPort(publicHost);
  }
  if (index === 0 && admins[0]) return admins[0];
  return getAdminHost();
}

export function pairedPublicHost(adminHost: string) {
  const publics = getPublicHosts();
  const admins = getAdminHosts();
  const index = admins.indexOf(stripPort(adminHost));
  if (index >= 0 && publics[index]) return publics[index];
  return getPublicHost();
}

function originFromHost(host: string, fallbackUrl?: string) {
  if (fallbackUrl?.trim()) return fallbackUrl.replace(/\/$/, "");
  return originForHost(host);
}

export function getPublicOrigin() {
  return originFromHost(getPublicHost(), process.env.SITE_URL);
}

export function getPublicSiteHref() {
  return adminHostSplitEnabled() ? getPublicOrigin() : "/";
}

/** Lien « voir le site » à partir de l’URL courante (hôte `admin.*` → hôte public). */
export function publicHrefFromLocation(location: {
  hostname: string;
  protocol: string;
  port?: string;
}) {
  const hostname = stripPort(location.hostname);
  const protocol = location.protocol.endsWith(":")
    ? location.protocol
    : `${location.protocol}:`;
  const publicHost = hostname.startsWith("admin.")
    ? hostname.slice("admin.".length)
    : hostname;
  const port = location.port ?? "";
  const includePort =
    Boolean(port) &&
    !(protocol === "http:" && port === "80") &&
    !(protocol === "https:" && port === "443");
  return `${protocol}//${publicHost}${includePort ? `:${port}` : ""}`;
}

export function getAdminOrigin() {
  if (!adminHostSplitEnabled()) return getPublicOrigin();
  return originFromHost(getAdminHost(), process.env.ADMIN_URL);
}

export function isAdminOnlyPath(pathname: string) {
  return (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/auth/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/")
  );
}
