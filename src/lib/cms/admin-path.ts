export function safeAdminNext(next: string | null | undefined) {
  const value = (next ?? "").trim() || "/admin";
  if (!value.startsWith("/admin") || value.startsWith("/admin/login")) {
    return "/admin";
  }
  return value;
}
