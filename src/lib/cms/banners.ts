import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { mediaSrc } from "./media-url";
import type { BannerRecord, MediaRecord } from "./types";

export type PublicBanner = BannerRecord & {
  desktopSrc: string | null;
  mobileSrc: string | null;
  videoSrc: string | null;
};

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

    return (data as BannerRecord[]).map((banner) => {
      const related = (links ?? []).filter((link) => link.entity_id === banner.id);
      const desktop = related.find((link) => link.role === "desktop")?.media as
        | MediaRecord
        | undefined;
      const mobile = related.find((link) => link.role === "mobile")?.media as
        | MediaRecord
        | undefined;
      const video = related.find((link) => link.role === "video")?.media as
        | MediaRecord
        | undefined;
      return {
        ...banner,
        desktopSrc: mediaSrc(desktop) ?? mediaSrc(mobile),
        mobileSrc: mediaSrc(mobile) ?? mediaSrc(desktop),
        videoSrc: mediaSrc(video),
      };
    });
  } catch {
    return [];
  }
}

export async function listAdminBanners() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("banners")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as BannerRecord[];
}
