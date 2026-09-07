import { btp } from "@/data/btp";
import { electromenager } from "@/data/electromenager";
import { erp } from "@/data/erp";
import { infogerance } from "@/data/infogerance";
import { monetique } from "@/data/monetique";
import { telephonie } from "@/data/telephonie/constants";

export type HomeHeroSlide = {
  id: string;
  title: string;
  href: string;
  lead: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  objectPosition?: string;
};

/** Durée de l’écran d’accueil avant les visuels d’activités. */
export const HOME_HERO_WELCOME_MS = 2300;

/** Durée d’affichage de chaque activité (autoplay). */
export const HOME_HERO_INTERVAL_MS = 1900;

export function parseHeroMs(value: string | undefined, fallback: number) {
  const parsed = Number(String(value ?? "").trim());
  if (!Number.isFinite(parsed) || parsed < 400) return fallback;
  return Math.min(Math.round(parsed), 20_000);
}

export const homeHeroSlides: HomeHeroSlide[] = [
  {
    id: "infogerance",
    title: infogerance.title,
    href: "/infogerance",
    lead: infogerance.description,
    image: "/brand/infogerance-hero.png",
    imageAlt:
      "Infogérance — maintenance et gestion d'infrastructure informatique",
    objectPosition: "center",
  },
  {
    id: "monetique",
    title: monetique.title,
    href: "/monetique",
    lead: monetique.description,
    image: "/brand/monetique-gallery-2.png",
    imageAlt: "Guichet automatique bancaire NCR",
    objectPosition: "center 40%",
  },
  {
    id: "erp",
    title: erp.title,
    href: "/progiciel-erp",
    lead: erp.description,
    image: "/brand/erp-hero.jpg",
    imageAlt: "Interface et modules d'un progiciel ERP",
    objectPosition: "center",
  },
  {
    id: "btp",
    title: btp.title,
    href: "/btp",
    lead: btp.description,
    image: "/brand/btp-hero.png",
    imageAlt: "Chantier BTP INFOLOG — construction et génie civil",
    objectPosition: "center 42%",
  },
  {
    id: "telephonie",
    title: telephonie.title,
    href: "/telephonie",
    lead: telephonie.description,
    image: "/brand/telephonie/catalog/s26-series.png",
    imageAlt: "Téléphonie Samsung Galaxy chez INFOLOG",
    objectPosition: "center 78%",
  },
  {
    id: "electromenager",
    title: electromenager.title,
    href: "/electromenager",
    lead: electromenager.description,
    image: "/brand/electromenager/catalog/hero-poster.jpg",
    imageAlt: "Électroménager Samsung — offre INFOLOG",
    objectPosition: "center",
  },
];
