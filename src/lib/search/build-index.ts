import "server-only";

import { getActiveBanners } from "@/lib/cms/banners";
import { getPublishedPages } from "@/lib/cms/pages";
import { getPublishedServices } from "@/lib/cms/services";
import { getPublishedBrands, getPublishedCategories } from "@/lib/cms/taxonomy";
import { getPublishedProducts } from "@/data/telephonie";
import type { Locale } from "@/lib/i18n/config";
import { applyTranslations, parseTranslations } from "@/lib/i18n/localize";
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

async function loadCmsServices(locale: Locale): Promise<SearchDocument[]> {
  try {
    const services = await getPublishedServices();
    return services.map((service, index) => {
      const localized = applyTranslations(
        locale,
        service,
        parseTranslations(service.translations),
        ["title", "description"],
      );
      return {
        id: `cms-service-${service.id}`,
        title: localized.title,
        description:
          localized.description || `Service INFOLOG — ${localized.title}.`,
        category: "Services",
        keywords: uniqueKeywords([
          service.slug,
          localized.title,
          localized.description,
          service.title,
          service.description,
          "nos services",
          "service",
          "our services",
          "خدمات",
        ]),
        type: "service" as const,
        url: "/qui-sommes-nous",
        section: service.slug,
        image: null,
        priority: 55 - Math.min(index, 20),
      };
    });
  } catch {
    return [];
  }
}

async function loadPhoneProducts(locale: Locale): Promise<SearchDocument[]> {
  try {
    const phones = await getPublishedProducts(locale);
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
        "phone",
        "هاتف",
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

async function loadCmsPages(locale: Locale): Promise<SearchDocument[]> {
  try {
    const pages = await getPublishedPages();
    return pages.map((page, index) => {
      const localized = applyTranslations(
        locale,
        page,
        parseTranslations(page.translations),
        ["title", "meta_title", "meta_description"],
      );
      return {
        id: `cms-page-${page.slug}`,
        title: localized.meta_title || localized.title,
        description:
          localized.meta_description ||
          `${localized.title} — contenu INFOLOG.`,
        category: "Pages",
        keywords: uniqueKeywords([
          page.slug,
          localized.title,
          localized.meta_title,
          localized.meta_description,
          page.title,
          "page",
        ]),
        type: "page" as const,
        url: pageUrl(page.slug),
        image: null,
        priority: 72 - Math.min(index, 20),
      };
    });
  } catch {
    return [];
  }
}

async function loadCmsCategories(locale: Locale): Promise<SearchDocument[]> {
  try {
    const categories = await getPublishedCategories();
    return categories.map((category, index) => {
      const localized = applyTranslations(
        locale,
        category,
        parseTranslations(category.translations),
        ["name", "description"],
      );
      return {
        id: `cms-category-${category.slug}`,
        title: localized.name,
        description:
          localized.description ||
          `Catégorie catalogue ${localized.name} — téléphonie INFOLOG.`,
        category: "Catégories",
        keywords: uniqueKeywords([
          localized.name,
          category.slug,
          localized.description,
          "categorie",
          "catalogue",
          "telephonie",
          "phone",
          "هاتف",
        ]),
        type: "section" as const,
        url: "/telephonie",
        image: null,
        priority: 48 - Math.min(index, 15),
      };
    });
  } catch {
    return [];
  }
}

async function loadCmsBrands(locale: Locale): Promise<SearchDocument[]> {
  try {
    const brands = await getPublishedBrands();
    return brands.map((brand, index) => {
      const localized = applyTranslations(
        locale,
        brand,
        parseTranslations(brand.translations),
        ["name"],
      );
      return {
        id: `cms-brand-${brand.slug}`,
        title: localized.name,
        description: `Marque ${localized.name} — produits disponibles chez INFOLOG.`,
        category: "Marques",
        keywords: uniqueKeywords([
          localized.name,
          brand.slug,
          "marque",
          "brand",
          "telephonie",
        ]),
        type: "section" as const,
        url: "/telephonie",
        image: null,
        priority: 46 - Math.min(index, 15),
      };
    });
  } catch {
    return [];
  }
}

async function loadCmsBanners(locale: Locale): Promise<SearchDocument[]> {
  try {
    const banners = await getActiveBanners();
    return banners
      .filter((banner) => banner.title.trim())
      .map((banner, index) => {
        const localized = applyTranslations(
          locale,
          banner,
          parseTranslations(banner.translations),
          ["title", "subtitle", "description", "button_label"],
        );
        return {
          id: `cms-banner-${banner.id}`,
          title: localized.title,
          description:
            localized.description ||
            localized.subtitle ||
            `Slide d’accueil INFOLOG — ${localized.title}.`,
          category: "Actualités",
          keywords: uniqueKeywords([
            localized.title,
            localized.subtitle,
            localized.description,
            banner.title,
            "accueil",
            "actualite",
            "carrousel",
          ]),
          type: "section" as const,
          url: banner.button_href || "/",
          image: banner.desktopSrc ?? banner.mobileSrc ?? null,
          priority: 40 - Math.min(index, 10),
        };
      });
  } catch {
    return [];
  }
}

/** Index central : catalogue statique + contenus CMS publiés / actifs. */
export async function buildSearchIndex(
  locale: Locale = "fr",
): Promise<SearchDocument[]> {
  const [products, cmsServices, pages, categories, brands, banners] =
    await Promise.all([
      loadPhoneProducts(locale),
      loadCmsServices(locale),
      loadCmsPages(locale),
      loadCmsCategories(locale),
      loadCmsBrands(locale),
      loadCmsBanners(locale),
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
