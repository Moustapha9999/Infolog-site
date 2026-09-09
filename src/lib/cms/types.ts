import type { PhoneCategory, PhoneProduct } from "@/data/telephonie/types";

export type Availability = "available" | "out_of_stock" | "hidden";

export type MediaRecord = {
  id: string;
  kind: "image" | "video";
  title: string | null;
  alt: string | null;
  description: string | null;
  original_name: string | null;
  generated_name: string | null;
  storage_path: string | null;
  public_url: string | null;
  external_url: string | null;
  mime_type: string | null;
  size_bytes: number | null;
  created_at: string;
};

export type MediaLink = {
  id: string;
  media_id: string;
  entity_type: string;
  entity_id: string;
  role: string;
  position: number;
  media?: MediaRecord | null;
};

export type BrandRecord = {
  id: string;
  name: string;
  slug: string;
  logo_id: string | null;
  is_active: boolean;
};

export type CategoryRecord = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_id: string | null;
  is_active: boolean;
  sort_order: number;
};

export type PriceRecord = {
  amount: number | null;
  compare_at_amount: number | null;
  currency: string;
  promo_starts_at: string | null;
  promo_ends_at: string | null;
  is_visible: boolean;
};

export type ProductRecord = {
  id: string;
  slug: string;
  name: string;
  brand_id: string | null;
  category_id: string | null;
  tagline: string | null;
  description: string | null;
  details: Record<string, unknown>;
  is_active: boolean;
  is_featured: boolean;
  is_new: boolean;
  is_promo: boolean;
  availability: Availability;
  sort_order: number;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
  brands?: BrandRecord | null;
  categories?: CategoryRecord | null;
  product_prices?: PriceRecord | PriceRecord[] | null;
};

export type BannerRecord = {
  id: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  button_label: string | null;
  button_href: string | null;
  sort_order: number;
  is_active: boolean;
  starts_at: string | null;
  ends_at: string | null;
};

export type ServiceRecord = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  icon: string | null;
  sort_order: number;
  is_active: boolean;
};

export type PageRecord = {
  id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  is_published: boolean;
};

export type PageSectionRecord = {
  id: string;
  page_id: string;
  key: string;
  kind: string;
  value: string | null;
  href: string | null;
  media_id: string | null;
  sort_order: number;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  read_at: string | null;
  created_at: string;
};

export type PhoneCommerce = {
  priceLabel?: string | null;
  compareLabel?: string | null;
  isNew?: boolean;
  isPromo?: boolean;
  availability?: Availability;
  brandName?: string | null;
  categoryLabel?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  searchKeywords?: string[];
};

export type CatalogPhone = PhoneProduct & PhoneCommerce;

export function categoryFromSlug(slug: string | undefined): PhoneCategory {
  if (
    slug === "flagship" ||
    slug === "foldable" ||
    slug === "a-series" ||
    slug === "tablet"
  ) {
    return slug;
  }
  return "a-series";
}
