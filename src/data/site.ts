import {
  getAboutServices,
  getEngagements,
  getSiteCopy,
} from "@/data/site-copy";
import { getNationalCash, nationalCash } from "@/data/national-cash";

const frCopy = getSiteCopy("fr");

export const site = {
  name: "INFOLOG",
  legalName: "INFOLOG",
  url: "https://infolog.mr",
  locale: "fr",
  city: "Nouakchott",
  country: frCopy.country,
  region: frCopy.region,
  presence: frCopy.presence,
  description: frCopy.description,
  about: {
    paragraphs: frCopy.about.paragraphs,
  },
  mission: frCopy.mission,
  presenceText: frCopy.presenceText,
  foundedNote: frCopy.foundedNote,
  phone: "+222 45 25 42 79",
  phoneTel: "+22245254279",
  phoneHref: "tel:+22245254279",
  phones: [
    { display: "+222 45 25 42 79", href: "tel:+22245254279" },
    { display: "+222 47 94 00 56", href: "tel:+22247940056" },
  ],
  email: "commercial@infolog.mr",
  address: "BP 1953, Rue Mohamed Lemine Ould Eye, Nouakchott, Mauritanie",
  street: "Rue Mohamed Lemine Ould Eye",
  postalBox: "BP 1953",
  plusCode: "32Q6+X6 Nouakchott, Mauritanie",
  geo: {
    lat: 18.089889,
    lng: -15.989528,
  },
  emailHref: "mailto:commercial@infolog.mr",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=32Q6%2BX6+Nouakchott,+Mauritanie",
  mapsEmbed:
    "https://maps.google.com/maps?q=18.089889,-15.989528&hl=fr&z=17&output=embed",
  socials: [
    {
      id: "facebook",
      label: "Facebook",
      href: "",
      icon: "/brand/social/facebook.png",
    },
    {
      id: "tiktok",
      label: "TikTok",
      href: "",
      icon: "/brand/social/tiktok.png",
    },
  ] as {
    id: string;
    label: string;
    href: string;
    icon: string;
  }[],
  /**
   * Vidéo « Nos activités » — à remplacer par l'URL YouTube officielle INFOLOG.
   * Exemple attendu : "https://www.youtube.com/watch?v=XXXX" ou l'ID seul.
   */
  activitiesVideoUrl: null as string | null,
} as const;

/** @deprecated Prefer getEngagements(locale) */
export const engagements = getEngagements("fr");

/** @deprecated Prefer getAboutServices(locale) */
export const aboutServices = getAboutServices("fr");

export { nationalCash, getNationalCash, getSiteCopy, getEngagements, getAboutServices };

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/contact", label: "Contact" },
] as const;
