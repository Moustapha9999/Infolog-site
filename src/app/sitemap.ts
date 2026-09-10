import type { MetadataRoute } from "next";
import { poles } from "@/data/poles";
import { getPublishedProducts } from "@/data/telephonie";
import { site } from "@/data/site";

/**
 * Sitemap uses cookie-based locale (no /fr|/en|/ar prefixes).
 * Paths stay canonical; language is signaled via html lang + hreflang alternates
 * from buildLocaleMetadata. Do not noindex public pages.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const phones = await getPublishedProducts();
  const pages = [
    "",
    "/qui-sommes-nous",
    "/qui-sommes-nous/national-cash",
    "/infogerance",
    "/data-center",
    "/securite",
    "/collaboration",
    "/ged",
    "/virtualisation-serveurs",
    "/virtualisation-postes",
    "/pearson-vue",
    "/centre-appel",
    "/transformation-it",
    "/affichage-dynamique",
    "/installation-telephonique",
    "/energie",
    "/monetique",
    "/progiciel-erp",
    "/btp",
    "/telephonie",
    "/telephonie/izi-shop",
    "/electromenager",
    ...phones.map((phone) => `/telephonie/${phone.id}`),
    "/contact",
    "/recherche",
    ...poles.map((pole) => `/${pole.slug}`),
  ];

  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/telephonie/izi-shop"
          ? 0.7
          : path.startsWith("/telephonie/")
            ? 0.6
            : 0.7,
  }));
}
