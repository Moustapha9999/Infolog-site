import "server-only";

import { getActiveBanners } from "@/lib/cms/banners";
import { getPublishedPages } from "@/lib/cms/pages";
import { getPublishedServices } from "@/lib/cms/services";
import { getPublishedBrands, getPublishedCategories } from "@/lib/cms/taxonomy";
import { getPublishedProducts } from "@/data/telephonie";
import { staticSearchCatalog } from "./catalog";
import type { SearchDocument } from "./types";

const PAGE_SLUG_URLS: Record<string, string> = {
  home: "/",
  accueil: "/",
  contact: "/contact",
  telephonie: "/telephonie",
  "qui-sommes-nous": "/qui-sommes-nous",
  "national-cash": "/qui-sommes-nous/national-cash",
  monetique: "/monetique",
  btp: "/btp",
  electromenager: "/electromenager",
  infogerance: "/infogerance",
  "progiciel-erp": "/progiciel-erp",
};

function pageUrl(slug: string) {
  return PAGE_SLUG_URLS[slug] ?? `/${slug}`;
}

function uniqueKeywords(values: Array<string | null | undefined>) {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const value of values) {
    const next = value?.trim();
    if (!next) continue;
    const key = next.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(next);
  }
  return out;
}

async function loadCmsServices(): Promise<SearchDocument[]> {
  try {
    const services = await getPublishedServices();
    return services.map((service, index) => ({
      id: `cms-service-${service.id}`,
      title: service.title,
      description: service.description || `Service INFOLOG — ${service.title}.`,
      category: "Services",
      keywords: uniqueKeywords([
        service.slug,
        service.title,
        service.description,
        "nos services",
        "service",
      ]),
      type: "service" as const,
      url: "/qui-sommes-nous",
      section: service.slug,
      image: null,
      priority: 55 - Math.min(index, 20),
    }));
  } catch {
    return [];
  }
}

async function loadPhoneProducts(): Promise<SearchDocument[]> {
  try {
    const phones = await getPublishedProducts();
    return phones.map((phone, index) => ({
      id: `product-${phone.id}`,
      title: phone.name,
      description:
        phone.metaDescription ||
        phone.tagline ||
        phone.description ||
        `${phone.name} — disponible chez INFOLOG.`,
      category: phone.categoryLabel || "Produits",
      keywords: uniqueKeywords([
        phone.name,
        phone.brandName,
        phone.categoryLabel,
        phone.metaTitle,
        phone.metaDescription,
        "smartphone",
        "telephone",
        "galaxy",
        "telephonie",
        "produit",
        ...(phone.searchKeywords ?? []),
        ...(phone.highlights ?? []),
        ...(phone.variants ?? []),
      ]),
      type: "product" as const,
      url: `/telephonie/${phone.id}`,
      image: phone.image || phone.hero || null,
      priority: 88 - Math.min(index, 20),
    }));
  } catch {
    return [];
  }
}

async function loadCmsPages(): Promise<SearchDocument[]> {
  try {
    const pages = await getPublishedPages();
    return pages.map((page, index) => ({
      id: `cms-page-${page.slug}`,
      title: page.meta_title || page.title,
      description:
        page.meta_description ||
        `${page.title} — contenu INFOLOG.`,
      category: "Pages",
      keywords: uniqueKeywords([
        page.slug,
        page.title,
        page.meta_title,
        page.meta_description,
        "page",
      ]),
      type: "page" as const,
      url: pageUrl(page.slug),
      image: null,
      priority: 72 - Math.min(index, 20),
    }));
  } catch {
    return [];
  }
}

async function loadCmsCategories(): Promise<SearchDocument[]> {
  try {
    const categories = await getPublishedCategories();
    return categories.map((category, index) => ({
      id: `cms-category-${category.slug}`,
      title: category.name,
      description:
        category.description ||
        `Catégorie catalogue ${category.name} — téléphonie INFOLOG.`,
      category: "Catégories",
      keywords: uniqueKeywords([
        category.name,
        category.slug,
        category.description,
        "categorie",
        "catalogue",
        "telephonie",
      ]),
      type: "section" as const,
      url: "/telephonie",
      image: null,
      priority: 48 - Math.min(index, 15),
    }));
  } catch {
    return [];
  }
}

async function loadCmsBrands(): Promise<SearchDocument[]> {
  try {
    const brands = await getPublishedBrands();
    return brands.map((brand, index) => ({
      id: `cms-brand-${brand.slug}`,
      title: brand.name,
      description: `Marque ${brand.name} — produits disponibles chez INFOLOG.`,
      category: "Marques",
      keywords: uniqueKeywords([
        brand.name,
        brand.slug,
        "marque",
        "brand",
        "telephonie",
      ]),
      type: "section" as const,
      url: "/telephonie",
      image: null,
      priority: 46 - Math.min(index, 15),
    }));
  } catch {
    return [];
  }
}

async function loadCmsBanners(): Promise<SearchDocument[]> {
  try {
    const banners = await getActiveBanners();
    return banners
      .filter((banner) => banner.title.trim())
      .map((banner, index) => ({
        id: `cms-banner-${banner.id}`,
        title: banner.title,
        description:
          banner.description ||
          banner.subtitle ||
          `Slide d’accueil INFOLOG — ${banner.title}.`,
        category: "Actualités",
        keywords: uniqueKeywords([
          banner.title,
          banner.subtitle,
          banner.description,
          "accueil",
          "actualite",
          "carrousel",
        ]),
        type: "section" as const,
        url: banner.button_href || "/",
        image: banner.desktopSrc ?? banner.mobileSrc ?? null,
        priority: 40 - Math.min(index, 10),
      }));
  } catch {
    return [];
  }
}

/** Index central : catalogue statique + contenus CMS publiés / actifs. */
export async function buildSearchIndex(): Promise<SearchDocument[]> {
  const [products, cmsServices, pages, categories, brands, banners] =
    await Promise.all([
      loadPhoneProducts(),
      loadCmsServices(),
      loadCmsPages(),
      loadCmsCategories(),
      loadCmsBrands(),
      loadCmsBanners(),
    ]);

  const byId = new Map<string, SearchDocument>();
  for (const doc of [
    ...staticSearchCatalog,
    ...products,
    ...cmsServices,
    ...pages,
    ...categories,
    ...brands,
    ...banners,
  ]) {
    const existing = byId.get(doc.id);
    if (!existing || doc.priority >= existing.priority) {
      byId.set(doc.id, doc);
    }
  }
  return Array.from(byId.values());
}
