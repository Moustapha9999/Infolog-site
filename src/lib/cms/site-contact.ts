import { site } from "@/data/site";
import { getPageSections, sectionValue } from "@/lib/cms/pages";

export type SitePhone = {
  display: string;
  href: string;
};

export type SiteSocialNetwork =
  | "facebook"
  | "instagram"
  | "tiktok"
  | "whatsapp"
  | "linkedin";

export type SiteSocial = {
  id: (typeof site.socials)[number]["id"];
  network: SiteSocialNetwork;
  cmsKey: string;
  labelKey: (typeof site.socials)[number]["labelKey"];
  label: string;
  href: string;
  icon: string;
};

/** Libellés back-office pour les sections de coordonnées. */
export const CONTACT_SECTION_LABELS: Record<string, string> = {
  phone_1: "Téléphone 1",
  phone_1_href: "Lien téléphone 1 (tel:)",
  phone_2: "Téléphone 2",
  phone_2_href: "Lien téléphone 2 (tel:)",
  email: "E-mail",
  email_href: "Lien e-mail (mailto:)",
  address: "Adresse",
  street: "Rue",
  postal_box: "Boîte postale",
  plus_code: "Plus Code",
  geo_lat: "Latitude",
  geo_lng: "Longitude",
  maps_href: "Lien Google Maps",
  maps_embed: "Intégration carte",
  social_facebook_infolog_shop: "Facebook — Infolog Shop / SAV",
  social_facebook_national_cash: "Facebook — National Cash",
  social_instagram_national_cash: "Instagram — National Cash",
  social_facebook_izicall: "Facebook — IZICALL Mauritanie",
  social_tiktok_izicall_mr: "TikTok — IZICALL Mauritanie",
  social_tiktok_izicall_ci: "TikTok — IZICALL Côte d'Ivoire",
  social_tiktok_izicall_sn: "TikTok — IZICALL Sénégal",
  social_tiktok_izicall_ml: "TikTok — IZICALL Mali",
  social_whatsapp_izicall:
    "WhatsApp — IZICALL (numéro ou URL wa.me, ouvre la discussion)",
  social_linkedin_infolog: "LinkedIn — INFOLOG",
  social_facebook: "Ancien Facebook (obsolète — à supprimer)",
  social_tiktok: "Ancien TikTok (obsolète — à supprimer)",
};

export type SiteContact = {
  phones: SitePhone[];
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  address: string;
  street: string;
  postalBox: string;
  plusCode: string;
  geo: { lat: number; lng: number };
  mapsHref: string;
  mapsEmbed: string;
};

/** Sections CMS pour la page `contact` (coordonnées vitrine). */
export const CONTACT_PAGE_SECTIONS = [
  { key: "phone_1", value: "+222 45 25 42 79" },
  { key: "phone_1_href", value: "tel:+22245254279" },
  { key: "phone_2", value: "+222 47 94 00 56" },
  { key: "phone_2_href", value: "tel:+22247940056" },
  { key: "email", value: "commercial@infolog.mr" },
  { key: "email_href", value: "mailto:commercial@infolog.mr" },
  {
    key: "address",
    value: "BP 1953, Rue Mohamed Lemine Ould Eye, Nouakchott, Mauritanie",
  },
  { key: "street", value: "Rue Mohamed Lemine Ould Eye" },
  { key: "postal_box", value: "BP 1953" },
  { key: "plus_code", value: "32Q6+X6 Nouakchott, Mauritanie" },
  { key: "geo_lat", value: "18.089889" },
  { key: "geo_lng", value: "-15.989528" },
  {
    key: "maps_href",
    value:
      "https://www.google.com/maps/search/?api=1&query=32Q6%2BX6+Nouakchott,+Mauritanie",
  },
  {
    key: "maps_embed",
    value:
      "https://maps.google.com/maps?q=18.089889,-15.989528&hl=fr&z=17&output=embed",
  },
  ...site.socials.map((social) => ({
    key: social.cmsKey,
    value: social.href,
  })),
] as const;

function toTelHref(display: string, fallback?: string) {
  if (fallback) return fallback;
  const cleaned = display.replace(/[^\d+]/g, "");
  if (!cleaned) return "#";
  return `tel:${cleaned.startsWith("+") ? cleaned : `+${cleaned}`}`;
}

function toMailHref(email: string, fallback?: string) {
  if (fallback) return fallback;
  return `mailto:${email}`;
}

function parseCoord(raw: string, fallback: number) {
  const value = Number(raw);
  return Number.isFinite(value) ? value : fallback;
}

/** Coordonnées vitrine : CMS page `contact` avec repli sur `site.ts`. */
export async function getSiteContact(): Promise<SiteContact> {
  const sections = await getPageSections("contact");
  const defaults = site.phones;

  const phone1 = sectionValue(
    sections,
    "phone_1",
    defaults[0]?.display ?? site.phone,
  );
  const phone2Raw = sectionValue(
    sections,
    "phone_2",
    defaults[1]?.display ?? "",
  ).trim();

  const phone1Href = toTelHref(
    phone1,
    sectionValue(sections, "phone_1_href", "") || defaults[0]?.href,
  );
  const phone2Href = phone2Raw
    ? toTelHref(
        phone2Raw,
        sectionValue(sections, "phone_2_href", "") || defaults[1]?.href,
      )
    : "";

  const phones: SitePhone[] = [{ display: phone1, href: phone1Href }];
  if (phone2Raw) phones.push({ display: phone2Raw, href: phone2Href });

  const email = sectionValue(sections, "email", site.email);
  const emailHref = toMailHref(
    email,
    sectionValue(sections, "email_href", "") || undefined,
  );

  return {
    phones,
    phone: phones[0]?.display ?? site.phone,
    phoneHref: phones[0]?.href ?? site.phoneHref,
    email,
    emailHref,
    address: sectionValue(sections, "address", site.address),
    street: sectionValue(sections, "street", site.street),
    postalBox: sectionValue(sections, "postal_box", site.postalBox),
    plusCode: sectionValue(sections, "plus_code", site.plusCode),
    geo: {
      lat: parseCoord(
        sectionValue(sections, "geo_lat", String(site.geo.lat)),
        site.geo.lat,
      ),
      lng: parseCoord(
        sectionValue(sections, "geo_lng", String(site.geo.lng)),
        site.geo.lng,
      ),
    },
    mapsHref: sectionValue(sections, "maps_href", site.mapsHref),
    mapsEmbed: sectionValue(sections, "maps_embed", site.mapsEmbed),
  };
}

/** Transforme un numéro ou une URL WhatsApp en lien wa.me (ouvre la discussion). */
export function toWhatsAppHref(value: string, fallback = "") {
  const raw = value.trim() || fallback.trim();
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw) || raw.startsWith("whatsapp:")) return raw;
  const digits = raw.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

export function socialsByIds(socials: SiteSocial[], ids: readonly string[]) {
  const allowed = new Set(ids);
  return socials.filter((social) => allowed.has(social.id));
}

/** Comptes INFOLOG (contact / accueil) — hors National Cash et IZICALL. */
export const INFOLOG_SOCIAL_IDS = [
  "facebook-infolog-shop",
  "linkedin-infolog",
] as const;

/** Réseaux sociaux vitrine : CMS page `contact` avec repli sur `site.socials`. */
export async function getSiteSocials(): Promise<SiteSocial[]> {
  const sections = await getPageSections("contact");

  return site.socials.map((social) => {
    const fromCms = sectionValue(sections, social.cmsKey, "").trim();
    const href =
      social.network === "whatsapp"
        ? toWhatsAppHref(fromCms, social.href)
        : fromCms || social.href || "";

    return {
      id: social.id,
      network: social.network,
      cmsKey: social.cmsKey,
      labelKey: social.labelKey,
      label: social.label,
      icon: social.icon,
      href,
    };
  });
}
