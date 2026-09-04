import type { MetadataRoute } from "next";
import { poles } from "@/data/poles";
import { phones } from "@/data/telephonie";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
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
    "/electromenager",
    ...phones.map((phone) => `/telephonie/${phone.id}`),
    "/contact",
    ...poles.map((pole) => `/${pole.slug}`),
  ];

  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/telephonie/") ? 0.6 : 0.7,
  }));
}
