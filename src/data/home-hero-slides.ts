import type { Locale } from "@/lib/i18n/config";
import { getBtp } from "@/data/btp";
import { getElectromenager } from "@/data/electromenager";
import { getErp } from "@/data/erp";
import { getInfogerance } from "@/data/infogerance";
import { getMonetique } from "@/data/monetique";
import { getTelephonie } from "@/data/telephonie/constants";

export type HomeHeroSlide = {
  id: string;
  title: string;
  href: string;
  lead: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  objectPosition?: string;
  /** `right` : le visuel reste lisible à droite, sans voile sombre. */
  imageLayout?: "bleed" | "right";
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

const slideAlts = {
  fr: {
    infogerance:
      "Infogérance — maintenance et gestion d'infrastructure informatique",
    monetique: "Guichet automatique bancaire NCR",
    erp: "Interface et modules d'un progiciel ERP",
    btp: "Chantier BTP INFOLOG — construction et génie civil",
    telephonie: "Téléphonie Samsung Galaxy chez INFOLOG",
    electromenager: "Électroménager Samsung — offre INFOLOG",
  },
  en: {
    infogerance: "Managed IT — infrastructure maintenance and management",
    monetique: "NCR automated teller machine",
    erp: "ERP software interface and modules",
    btp: "INFOLOG construction site — civil engineering",
    telephonie: "Samsung Galaxy telephony at INFOLOG",
    electromenager: "Samsung home appliances — INFOLOG offer",
  },
  ar: {
    infogerance: "إدارة الأنظمة — صيانة وإدارة البنية التحتية المعلوماتية",
    monetique: "جهاز صراف آلي NCR",
    erp: "واجهة ووحدات برمجيات ERP",
    btp: "موقع بناء INFOLOG — هندسة مدنية",
    telephonie: "هواتف Samsung Galaxy لدى INFOLOG",
    electromenager: "أجهزة منزلية Samsung — عرض INFOLOG",
  },
} as const;

export function getHomeHeroSlidesFallback(
  locale: Locale = "fr",
): HomeHeroSlide[] {
  const infogerance = getInfogerance(locale);
  const monetique = getMonetique(locale);
  const erp = getErp(locale);
  const btp = getBtp(locale);
  const telephonie = getTelephonie(locale);
  const electromenager = getElectromenager(locale);
  const alts = slideAlts[locale] ?? slideAlts.fr;

  return [
    {
      id: "infogerance",
      title: infogerance.title,
      href: "/infogerance",
      lead: infogerance.description,
      image: "/brand/infogerance-hero.png",
      imageAlt: alts.infogerance,
      objectPosition: "center",
    },
    {
      id: "monetique",
      title: monetique.title,
      href: "/monetique",
      lead: monetique.description,
      image: "/brand/monetique-gallery-2.png",
      imageAlt: alts.monetique,
      objectPosition: "center 40%",
    },
    {
      id: "erp",
      title: erp.title,
      href: "/progiciel-erp",
      lead: erp.description,
      image: "/brand/erp-hero.jpg",
      imageAlt: alts.erp,
      objectPosition: "center right",
    },
    {
      id: "btp",
      title: btp.title,
      href: "/btp",
      lead: btp.description,
      image: "/brand/btp-hero.png",
      imageAlt: alts.btp,
      objectPosition: "center 42%",
    },
    {
      id: "telephonie",
      title: telephonie.title,
      href: "/telephonie",
      lead: telephonie.description,
      image: "/brand/telephonie/catalog/s26-series.png",
      imageAlt: alts.telephonie,
      objectPosition: "right center",
      imageLayout: "right",
    },
    {
      id: "electromenager",
      title: electromenager.title,
      href: "/electromenager",
      lead: electromenager.description,
      image: "/brand/electromenager/catalog/hero-poster.jpg",
      imageAlt: alts.electromenager,
      objectPosition: "center",
    },
  ];
}

/** @deprecated prefer getHomeHeroSlidesFallback(locale) */
export const homeHeroSlides = getHomeHeroSlidesFallback("fr");
