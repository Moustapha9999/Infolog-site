import { site } from "@/data/site";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/cms/format";

export type SiteSocialNetwork =
  | "facebook"
  | "instagram"
  | "tiktok"
  | "whatsapp"
  | "linkedin";

export type SocialGroupKey =
  | "infolog"
  | "national-cash"
  | "izicall"
  | "autre";

export type SocialPlacement =
  | "footer"
  | "contact"
  | "national-cash"
  | "izi-shop"
  | "telephonie";

export type SiteSocial = {
  id: string;
  slug: string;
  network: SiteSocialNetwork;
  label: string;
  href: string;
  icon: string;
  groupKey: SocialGroupKey;
  sortOrder: number;
  isActive: boolean;
  showFooter: boolean;
  showContact: boolean;
  showNationalCash: boolean;
  showIziShop: boolean;
  showTelephonie: boolean;
};

export type SocialLinkRecord = {
  id: string;
  slug: string;
  network: SiteSocialNetwork;
  label: string;
  href: string;
  group_key: string;
  sort_order: number;
  is_active: boolean;
  show_footer: boolean;
  show_contact: boolean;
  show_national_cash: boolean;
  show_izi_shop: boolean;
  show_telephonie: boolean;
  created_at?: string;
  updated_at?: string;
};

export const SOCIAL_NETWORKS: {
  value: SiteSocialNetwork;
  label: string;
  icon: string;
}[] = [
  { value: "facebook", label: "Facebook", icon: "/brand/social/facebook.png" },
  {
    value: "instagram",
    label: "Instagram",
    icon: "/brand/social/instagram.svg",
  },
  { value: "tiktok", label: "TikTok", icon: "/brand/social/tiktok.png" },
  { value: "whatsapp", label: "WhatsApp", icon: "/brand/social/whatsapp.png" },
  { value: "linkedin", label: "LinkedIn", icon: "/brand/social/linkedin.png" },
];

export const SOCIAL_GROUPS: { value: SocialGroupKey; label: string }[] = [
  { value: "infolog", label: "INFOLOG" },
  { value: "national-cash", label: "National Cash" },
  { value: "izicall", label: "IZICALL" },
  { value: "autre", label: "Autre" },
];

export const SOCIAL_NETWORK_ICONS: Record<SiteSocialNetwork, string> = {
  facebook: "/brand/social/facebook.png",
  instagram: "/brand/social/instagram.svg",
  tiktok: "/brand/social/tiktok.png",
  whatsapp: "/brand/social/whatsapp.png",
  linkedin: "/brand/social/linkedin.png",
};

function isNetwork(value: string): value is SiteSocialNetwork {
  return SOCIAL_NETWORKS.some((item) => item.value === value);
}

function isGroup(value: string): value is SocialGroupKey {
  return SOCIAL_GROUPS.some((item) => item.value === value);
}

/** Transforme un numéro ou une URL WhatsApp en lien wa.me. */
export function toWhatsAppHref(value: string, fallback = "") {
  const raw = value.trim() || fallback.trim();
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw) || raw.startsWith("whatsapp:")) return raw;
  const digits = raw.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

function mapRecord(row: SocialLinkRecord): SiteSocial {
  const network = isNetwork(row.network) ? row.network : "facebook";
  const href =
    network === "whatsapp" ? toWhatsAppHref(row.href, row.href) : row.href.trim();
  return {
    id: row.id,
    slug: row.slug,
    network,
    label: row.label,
    href,
    icon: SOCIAL_NETWORK_ICONS[network],
    groupKey: isGroup(row.group_key) ? row.group_key : "autre",
    sortOrder: row.sort_order,
    isActive: row.is_active,
    showFooter: row.show_footer,
    showContact: row.show_contact,
    showNationalCash: row.show_national_cash,
    showIziShop: row.show_izi_shop,
    showTelephonie: row.show_telephonie,
  };
}

/** Fallback local si la table n’est pas encore migrée / Supabase down. */
function fallbackSocials(activeOnly: boolean): SiteSocial[] {
  return site.socials.map((social, index) => {
    const groupKey: SocialGroupKey = social.id.includes("national-cash")
      ? "national-cash"
      : social.id.includes("izicall") || social.network === "whatsapp"
        ? "izicall"
        : social.id.includes("infolog") || social.network === "linkedin"
          ? "infolog"
          : "autre";
    return {
      id: social.id,
      slug: social.id,
      network: social.network,
      label: social.label,
      href:
        social.network === "whatsapp"
          ? toWhatsAppHref(social.href)
          : social.href,
      icon: social.icon,
      groupKey,
      sortOrder: (index + 1) * 10,
      isActive: true,
      showFooter: true,
      showContact: groupKey === "infolog",
      showNationalCash: groupKey === "national-cash",
      showIziShop: groupKey === "izicall",
      showTelephonie:
        social.id === "facebook-infolog-shop" ||
        social.id === "whatsapp-izicall",
    };
  }).filter((item) => (activeOnly ? item.isActive : true));
}

export async function listSocialLinks(options?: {
  activeOnly?: boolean;
}): Promise<SiteSocial[]> {
  const activeOnly = options?.activeOnly ?? false;
  if (!isSupabaseConfigured()) return fallbackSocials(activeOnly);

  try {
    const supabase = await createServerSupabaseClient();
    let query = supabase
      .from("social_links")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });
    if (activeOnly) query = query.eq("is_active", true);
    const { data, error } = await query;
    if (error) return fallbackSocials(activeOnly);
    return (data as SocialLinkRecord[]).map(mapRecord);
  } catch {
    return fallbackSocials(activeOnly);
  }
}

/** True si la table CMS `social_links` est disponible. */
export async function isSocialLinksTableReady(): Promise<boolean> {
  if (!isSupabaseConfigured()) return false;
  try {
    const supabase = await createServerSupabaseClient();
    const { error } = await supabase
      .from("social_links")
      .select("id")
      .limit(1);
    return !error;
  } catch {
    return false;
  }
}

/** Vitrine : uniquement les liens actifs. */
export async function getSiteSocials(): Promise<SiteSocial[]> {
  return listSocialLinks({ activeOnly: true });
}

export function socialsFor(
  socials: SiteSocial[],
  placement: SocialPlacement,
): SiteSocial[] {
  return socials.filter((social) => {
    if (placement === "footer") return social.showFooter;
    if (placement === "contact") return social.showContact;
    if (placement === "national-cash") return social.showNationalCash;
    if (placement === "izi-shop") return social.showIziShop;
    return social.showTelephonie;
  });
}

/** @deprecated Prefer socialsFor — conservé pour compat. */
export function socialsByIds(socials: SiteSocial[], ids: readonly string[]) {
  const allowed = new Set(ids);
  return socials.filter(
    (social) => allowed.has(social.id) || allowed.has(social.slug),
  );
}

export function makeSocialSlug(label: string, network: string) {
  const base = slugify(`${network}-${label}`) || `${network}-lien`;
  return base.slice(0, 80);
}
