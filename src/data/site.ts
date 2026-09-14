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
      id: "facebook-infolog-shop",
      network: "facebook",
      cmsKey: "social_facebook_infolog_shop",
      labelKey: "facebookInfologShop",
      label: "Infolog Shop / SAV",
      href: "https://www.facebook.com/share/18U8aSBb79/",
      icon: "/brand/social/facebook.png",
    },
    {
      id: "facebook-national-cash",
      network: "facebook",
      cmsKey: "social_facebook_national_cash",
      labelKey: "facebookNationalCash",
      label: "National Cash",
      href: "https://www.facebook.com/share/19VowcwVxw/",
      icon: "/brand/social/facebook.png",
    },
    {
      id: "instagram-national-cash",
      network: "instagram",
      cmsKey: "social_instagram_national_cash",
      labelKey: "instagramNationalCash",
      label: "National Cash",
      href: "https://www.instagram.com/national___cash",
      icon: "/brand/social/instagram.svg",
    },
    {
      id: "facebook-izicall",
      network: "facebook",
      cmsKey: "social_facebook_izicall",
      labelKey: "facebookIzicall",
      label: "IZICALL Mauritanie",
      href: "https://www.facebook.com/share/1DRMFBXQD9/",
      icon: "/brand/social/facebook.png",
    },
    {
      id: "tiktok-izicall-mr",
      network: "tiktok",
      cmsKey: "social_tiktok_izicall_mr",
      labelKey: "tiktokIzicallMr",
      label: "IZICALL Mauritanie",
      href: "https://www.tiktok.com/@izicallmauritanie",
      icon: "/brand/social/tiktok.png",
    },
    {
      id: "tiktok-izicall-ci",
      network: "tiktok",
      cmsKey: "social_tiktok_izicall_ci",
      labelKey: "tiktokIzicallCi",
      label: "IZICALL Côte d'Ivoire",
      href: "https://www.tiktok.com/@izicall.cotedivoire",
      icon: "/brand/social/tiktok.png",
    },
    {
      id: "tiktok-izicall-sn",
      network: "tiktok",
      cmsKey: "social_tiktok_izicall_sn",
      labelKey: "tiktokIzicallSn",
      label: "IZICALL Sénégal",
      href: "https://www.tiktok.com/@izicalllebalma",
      icon: "/brand/social/tiktok.png",
    },
    {
      id: "tiktok-izicall-ml",
      network: "tiktok",
      cmsKey: "social_tiktok_izicall_ml",
      labelKey: "tiktokIzicallMl",
      label: "IZICALL Mali",
      href: "https://www.tiktok.com/@izicallmali2",
      icon: "/brand/social/tiktok.png",
    },
    {
      id: "whatsapp-izicall",
      network: "whatsapp",
      cmsKey: "social_whatsapp_izicall",
      labelKey: "whatsappIzicall",
      label: "WhatsApp IZICALL",
      href: "https://wa.me/221771705741",
      icon: "/brand/social/whatsapp.png",
    },
    {
      id: "linkedin-infolog",
      network: "linkedin",
      cmsKey: "social_linkedin_infolog",
      labelKey: "linkedinInfolog",
      label: "LinkedIn INFOLOG",
      href: "https://www.linkedin.com/in/infolog-mauritanie-146538254",
      icon: "/brand/social/linkedin.png",
    },
  ] as const,
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
