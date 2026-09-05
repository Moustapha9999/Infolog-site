export const adminLinks = [
  { href: "/admin", label: "Vue d’ensemble" },
  { href: "/admin/products", label: "Produits" },
  { href: "/admin/brands", label: "Marques" },
  { href: "/admin/categories", label: "Catégories" },
  { href: "/admin/media", label: "Médias" },
  { href: "/admin/videos", label: "Vidéos" },
  { href: "/admin/banners", label: "Bannières" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/pages", label: "Pages" },
  { href: "/admin/messages", label: "Messages" },
] as const;

export function adminPageTitle(pathname: string) {
  if (pathname.startsWith("/admin/users")) return "Utilisateurs";
  const match = adminLinks.find((link) =>
    link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href),
  );
  return match?.label ?? "Console";
}
