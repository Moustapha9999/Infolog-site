import type { Metadata } from "next";
import { site } from "@/data/site";
import { localeMeta, locales, type Locale } from "@/lib/i18n/config";

export type LocaleMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  /** Site path, e.g. `/contact` or `/` — locale is cookie-based, not path-prefixed. */
  path: string;
};

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function absoluteUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? site.url : `${site.url}${normalized}`;
}

/**
 * Build page Metadata with OG locale + hreflang alternates.
 *
 * Locale is stored in a cookie (not `/fr` prefixes), so `alternates.languages`
 * points every language (and `x-default`) at the same canonical URL. Google
 * still receives the active language via `<html lang>`.
 */
export function buildLocaleMetadata({
  locale,
  title,
  description,
  path,
}: LocaleMetadataInput): Metadata {
  const meta = localeMeta[locale];
  const normalized = normalizePath(path);
  const canonical = absoluteUrl(normalized);

  const languages: Record<string, string> = {
    "x-default": canonical,
  };
  for (const code of locales) {
    languages[code] = canonical;
  }

  return {
    title,
    description,
    alternates: {
      canonical: normalized,
      languages,
    },
    openGraph: {
      title,
      description,
      locale: meta.ogLocale,
      url: canonical,
      type: "website",
    },
  };
}
