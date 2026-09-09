import { loadPhonesFromFolders } from "@/data/telephonie/load-products";
import type { PhoneProduct } from "@/data/telephonie/types";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { formatMoney, isPromoActive } from "./format";
import { categoryFromSlug, type CatalogPhone, type ProductRecord } from "./types";

function firstPrice(product: ProductRecord) {
  const raw = product.product_prices;
  if (Array.isArray(raw)) return raw[0] ?? null;
  return raw ?? null;
}

function linksByRole(
  links: Array<{ role: string; position: number; media?: { public_url?: string | null; external_url?: string | null } | null }>,
  role: string,
) {
  return links
    .filter((link) => link.role === role)
    .sort((a, b) => a.position - b.position)
    .map((link) => link.media?.public_url || link.media?.external_url)
    .filter((src): src is string => Boolean(src));
}

export function mapProductToPhone(
  product: ProductRecord,
  links: Array<{
    role: string;
    position: number;
    media?: { public_url?: string | null; external_url?: string | null } | null;
  }> = [],
): CatalogPhone {
  const details = product.details ?? {};
  const price = firstPrice(product);
  const promo = isPromoActive({
    isPromo: product.is_promo,
    startsAt: price?.promo_starts_at,
    endsAt: price?.promo_ends_at,
  });
  const visible = Boolean(price?.is_visible && price.amount != null);
  const heroes = linksByRole(links, "hero");
  const covers = linksByRole(links, "cover");
  const gallery = linksByRole(links, "gallery");
  const videos = linksByRole(links, "video");
  const stories = linksByRole(links, "story");
  const designVideos = linksByRole(links, "design");

  const fallback = details as Partial<PhoneProduct> & {
    searchKeywords?: unknown;
  };
  const hero = heroes[0] ?? fallback.hero;
  const image = covers[0] ?? fallback.image ?? hero;
  const searchKeywords = Array.isArray(fallback.searchKeywords)
    ? fallback.searchKeywords.filter(
        (item): item is string => typeof item === "string" && item.trim() !== "",
      )
    : [];

  return {
    id: product.slug,
    name: product.name,
    category: categoryFromSlug(product.categories?.slug),
    hero,
    heroLayout: fallback.heroLayout,
    heroTagline: fallback.heroTagline,
    image,
    imageAlt: fallback.imageAlt ?? `${product.name} — INFOLOG`,
    gallery: gallery.length ? gallery : fallback.gallery,
    video: videos[0] ?? stories[0] ?? fallback.video,
    videos: videos.slice(1).length ? videos.slice(1) : fallback.videos,
    storyVideos: stories.length ? stories : fallback.storyVideos,
    designVideo: designVideos[0] ?? fallback.designVideo,
    designIntro: fallback.designIntro,
    featureHighlight: fallback.featureHighlight,
    featureSuite: fallback.featureSuite,
    keyPoints: fallback.keyPoints,
    design: fallback.design,
    performance: fallback.performance,
    battery: fallback.battery,
    tagline: product.tagline ?? fallback.tagline,
    variants: Array.isArray(fallback.variants) ? fallback.variants : [],
    ram: fallback.ram,
    storage: fallback.storage,
    highlights: Array.isArray(fallback.highlights) ? fallback.highlights : [],
    description: product.description ?? fallback.description,
    media: fallback.media,
    specs: Array.isArray(fallback.specs) ? fallback.specs : [],
    cameras: fallback.cameras,
    colors: fallback.colors,
    sourceNote: fallback.sourceNote,
    priceLabel: visible ? formatMoney(Number(price?.amount), price?.currency) : null,
    compareLabel:
      visible && promo && price?.compare_at_amount
        ? formatMoney(Number(price.compare_at_amount), price.currency)
        : null,
    isNew: product.is_new,
    isPromo: promo,
    availability: product.availability,
    brandName: product.brands?.name ?? null,
    categoryLabel: product.categories?.name ?? null,
    metaTitle: product.meta_title,
    metaDescription: product.meta_description,
    searchKeywords,
  };
}

export async function getPublishedProducts(): Promise<CatalogPhone[]> {
  const files = (): CatalogPhone[] => loadPhonesFromFolders();

  if (!isSupabaseConfigured()) return files();

  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("products")
      .select(
        "*, brands(*), categories(*), product_prices(*)",
      )
      .eq("is_active", true)
      .neq("availability", "hidden")
      .order("sort_order", { ascending: true });

    if (error || !data?.length) return files();

    const ids = data.map((row) => row.id as string);
    const { data: links } = await supabase
      .from("media_links")
      .select("*, media(*)")
      .eq("entity_type", "product")
      .in("entity_id", ids);

    return (data as ProductRecord[])
      .map((product) =>
        mapProductToPhone(
          product,
          (links ?? []).filter((link) => link.entity_id === product.id),
        ),
      )
      .filter((phone) => phone.id !== "galaxy-" && phone.name.trim() !== "galaxy-");
  } catch {
    return files();
  }
}

export async function getPublishedProduct(slug: string) {
  const all = await getPublishedProducts();
  return all.find((phone) => phone.id === slug);
}

export async function listAdminProducts() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select("*, brands(*), categories(*), product_prices(*)")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as ProductRecord[];
}

export async function getAdminProduct(id: string) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select("*, brands(*), categories(*), product_prices(*)")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data as ProductRecord | null;
}
