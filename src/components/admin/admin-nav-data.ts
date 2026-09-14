export const adminNavGroups = [
  {
    id: "overview",
    label: null as string | null,
    links: [{ href: "/admin", label: "Tableau de bord" }],
  },
  {
    id: "catalog",
    label: "Catalogue",
    links: [
      { href: "/admin/products", label: "Produits" },
      { href: "/admin/brands", label: "Marques" },
      { href: "/admin/categories", label: "Catégories" },
      { href: "/admin/services", label: "Services" },
    ],
  },
  {
    id: "media",
    label: "Médias",
    links: [
      { href: "/admin/media", label: "Médias" },
      { href: "/admin/videos", label: "Vidéos" },
      { href: "/admin/banners", label: "Carrousel accueil" },
    ],
  },
  {
    id: "content",
    label: "Contenus",
    links: [
      { href: "/admin/pages", label: "Pages" },
      { href: "/admin/socials", label: "Réseaux sociaux" },
      { href: "/admin/messages", label: "Messages" },
    ],
  },
] as const;

/** Flat list kept for titles / legacy lookups. */
export const adminLinks = adminNavGroups.flatMap((group) => [...group.links]);

export function adminPageTitle(pathname: string) {
  if (pathname.startsWith("/admin/users")) return "Utilisateurs & accès";
  const match = adminLinks.find((link) =>
    link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href),
  );
  return match?.label ?? "Console";
}
