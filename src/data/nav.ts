export type NavLink = {
  href: string;
  label: string;
};

export type NavGroup = {
  label: string;
  items: NavLink[];
};

export type NavItem =
  | { type: "link"; href: string; label: string }
  | {
      type: "dropdown";
      id: string;
      label: string;
      items: NavLink[];
    }
  | {
      type: "mega";
      id: string;
      label: string;
      groups: NavGroup[];
    };

export const mainNav: NavItem[] = [
  { type: "link", href: "/", label: "Accueil" },
  {
    type: "dropdown",
    id: "about",
    label: "Qui sommes-nous",
    items: [
      { href: "/qui-sommes-nous", label: "Infolog" },
      { href: "/qui-sommes-nous/national-cash", label: "National Cash" },
    ],
  },
  {
    type: "link",
    href: "/infogerance",
    label: "Infogérance",
  },
  { type: "link", href: "/monetique", label: "Monétique" },
  { type: "link", href: "/progiciel-erp", label: "Progiciel ERP" },
  { type: "link", href: "/btp", label: "BTP" },
  {
    type: "dropdown",
    id: "telephonie",
    label: "Téléphonie",
    items: [
      { href: "/telephonie", label: "Téléphonie" },
      { href: "/telephonie/izi-shop", label: "IZI SHOP" },
    ],
  },
  { type: "link", href: "/electromenager", label: "Électroménager" },
  {
    type: "mega",
    id: "services",
    label: "Services informatiques",
    groups: [
      {
        label: "Intégration",
        items: [
          { href: "/data-center", label: "Data center" },
          { href: "/securite", label: "Sécurité" },
          { href: "/collaboration", label: "Collaboration" },
          { href: "/ged", label: "GED" },
          {
            href: "/virtualisation-serveurs",
            label: "Virtualisation de serveurs",
          },
          {
            href: "/virtualisation-postes",
            label: "Virtualisation de postes et d'applications",
          },
        ],
      },
      {
        label: "Formations",
        items: [
          { href: "/pearson-vue", label: "Pearson VUE" },
          {
            href: "/pearson-vue#e-learning",
            label: "E-Learning Center",
          },
        ],
      },
      {
        label: "Autres services",
        items: [
          {
            href: "/centre-appel",
            label: "Centre d'appel",
          },
          {
            href: "/transformation-it",
            label: "Transformation IT",
          },
          {
            href: "/affichage-dynamique",
            label: "Affichage dynamique",
          },
          {
            href: "/installation-telephonique",
            label: "Installation téléphonique pour entreprise",
          },
          { href: "/energie", label: "Énergie" },
        ],
      },
    ],
  },
];

export function isNavActive(pathname: string, href: string) {
  const path = href.split("#")[0] ?? href;
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}
