import type { NavItem } from "@/data/nav";
import type { Dictionary } from "@/lib/i18n/dictionary-types";

export function localizedMainNav(dict: Dictionary): NavItem[] {
  const n = dict.nav;
  return [
    { type: "link", href: "/", label: n.home },
    {
      type: "dropdown",
      id: "about",
      label: n.about,
      items: [
        { href: "/qui-sommes-nous", label: n.aboutInfolog },
        { href: "/qui-sommes-nous/national-cash", label: n.aboutNationalCash },
      ],
    },
    { type: "link", href: "/infogerance", label: n.infogerance },
    { type: "link", href: "/monetique", label: n.monetique },
    { type: "link", href: "/progiciel-erp", label: n.erp },
    { type: "link", href: "/btp", label: n.btp },
    {
      type: "dropdown",
      id: "telephonie",
      label: n.telephonie,
      items: [
        { href: "/telephonie", label: n.telephonieRoot },
        { href: "/telephonie/izi-shop", label: n.iziShop },
      ],
    },
    { type: "link", href: "/electromenager", label: n.electromenager },
    {
      type: "mega",
      id: "services",
      label: n.services,
      groups: [
        {
          label: n.groups.integration,
          items: [
            { href: "/data-center", label: n.items.dataCenter },
            { href: "/securite", label: n.items.securite },
            { href: "/collaboration", label: n.items.collaboration },
            { href: "/ged", label: n.items.ged },
            { href: "/virtualisation-serveurs", label: n.items.virtServeurs },
            { href: "/virtualisation-postes", label: n.items.virtPostes },
          ],
        },
        {
          label: n.groups.formations,
          items: [
            { href: "/pearson-vue", label: n.items.pearsonVue },
            { href: "/pearson-vue#e-learning", label: n.items.eLearning },
          ],
        },
        {
          label: n.groups.autres,
          items: [
            { href: "/centre-appel", label: n.items.centreAppel },
            { href: "/transformation-it", label: n.items.transformationIt },
            { href: "/affichage-dynamique", label: n.items.affichage },
            {
              href: "/installation-telephonique",
              label: n.items.installationTel,
            },
            { href: "/energie", label: n.items.energie },
          ],
        },
      ],
    },
  ];
}
