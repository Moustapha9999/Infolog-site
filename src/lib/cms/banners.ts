import { getHomeHeroSlidesFallback, type HomeHeroSlide } from "@/data/home-hero-slides";
import { getLocale } from "@/lib/i18n/get-locale";
import { applyTranslations, parseTranslations } from "@/lib/i18n/localize";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { mediaSrc } from "./media-url";
import type { BannerRecord, MediaRecord } from "./types";

export type PublicBanner = BannerRecord & {
  desktopSrc: string | null;
  mobileSrc: string | null;
  videoSrc: string | null;
};

export type AdminBanner = BannerRecord & {
  desktop_media_id: string | null;
  mobile_media_id: string | null;
  video_media_id: string | null;
  desktopSrc: string | null;
};

function isLive(banner: BannerRecord) {
  const now = Date.now();
  if (banner.starts_at && Date.parse(banner.starts_at) > now) return false;
  if (banner.ends_at && Date.parse(banner.ends_at) < now) return false;
  return true;
}

function attachMedia(
  banners: BannerRecord[],
  links: { entity_id: string; role: string; media?: MediaRecord | null }[],
): PublicBanner[] {
  return banners.map((banner) => {
    const related = links.filter((link) => link.entity_id === banner.id);
    const desktop = related.find((link) => link.role === "desktop")?.media;
    const mobile = related.find((link) => link.role === "mobile")?.media;
    const video = related.find((link) => link.role === "video")?.media;
    return {
      ...banner,
      desktopSrc: mediaSrc(desktop) ?? mediaSrc(mobile),
      mobileSrc: mediaSrc(mobile) ?? mediaSrc(desktop),
      videoSrc: mediaSrc(video),
    };
  });
}

export async function getActiveBanners(): Promise<PublicBanner[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("banners")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });
    if (error || !data?.length) return [];

    const ids = data.map((row) => row.id as string);
    const { data: links } = await supabase
      .from("media_links")
      .select("*, media(*)")
      .eq("entity_type", "banner")
      .in("entity_id", ids);

    return attachMedia(data as BannerRecord[], links ?? []).filter(isLive);
  } catch {
    return [];
  }
}

export function bannerToHeroSlide(banner: PublicBanner): HomeHeroSlide | null {
  const image = banner.desktopSrc ?? banner.mobileSrc;
  if (!image) return null;
  return {
    id: banner.id,
    title: banner.title,
    href: banner.button_href || "#poles",
    lead: banner.description || banner.subtitle || "",
    image,
    imageAlt: banner.title,
    ctaLabel: banner.button_label || undefined,
  };
}

export async function getHomeHeroSlides(): Promise<HomeHeroSlide[]> {
  const locale = await getLocale();
  const banners = await getActiveBanners();
  const slides = banners
    .map((banner) => {
      const localized = applyTranslations(
        locale,
        banner,
        parseTranslations(banner.translations),
        ["title", "subtitle", "description", "button_label"],
      );
      return bannerToHeroSlide({ ...banner, ...localized });
    })
    .filter((slide): slide is HomeHeroSlide => slide !== null);
  return slides.length > 0 ? slides : getHomeHeroSlidesFallback(locale);
}

export async function getNewsBanners(): Promise<PublicBanner[]> {
  const banners = await getActiveBanners();
  return banners.filter(
    (banner) => !banner.desktopSrc && !banner.mobileSrc && !banner.videoSrc,
  );
}

export async function listAdminBanners(): Promise<AdminBanner[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("banners")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  const banners = (data ?? []) as BannerRecord[];
  if (banners.length === 0) return [];

  const ids = banners.map((banner) => banner.id);
  const { data: links } = await supabase
    .from("media_links")
    .select("*, media(*)")
    .eq("entity_type", "banner")
    .in("entity_id", ids);

  return banners.map((banner) => {
    const related = (links ?? []).filter((link) => link.entity_id === banner.id);
    const desktop = related.find((link) => link.role === "desktop");
    const mobile = related.find((link) => link.role === "mobile");
    const video = related.find((link) => link.role === "video");
    const desktopMedia = desktop?.media as MediaRecord | undefined;
    const mobileMedia = mobile?.media as MediaRecord | undefined;
    return {
      ...banner,
      desktop_media_id: desktop?.media_id ?? null,
      mobile_media_id: mobile?.media_id ?? null,
      video_media_id: video?.media_id ?? null,
      desktopSrc: mediaSrc(desktopMedia) ?? mediaSrc(mobileMedia),
    };
  });
}
