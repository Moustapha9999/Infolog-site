import type { Locale } from "./config";
import { defaultLocale } from "./config";

/** Shape for CMS / content fields available in three languages. */
export type LocalizedFields = {
  fr?: string | null;
  en?: string | null;
  ar?: string | null;
};

export type ContentTranslations = Partial<
  Record<"en" | "ar", Record<string, string | null | undefined>>
>;

/**
 * Resolve a localized string with FR as fallback.
 * Prefer explicit LocalizedFields, else translations JSON + base FR value.
 */
export function pickLocalized(
  locale: Locale,
  fields: LocalizedFields | string | null | undefined,
  fallback = "",
): string {
  if (typeof fields === "string") {
    return fields || fallback;
  }
  if (!fields) return fallback;

  if (locale === "fr") {
    return fields.fr?.trim() || fallback;
  }
  const localized = fields[locale]?.trim();
  if (localized) return localized;
  return fields.fr?.trim() || fallback;
}

/** Apply CMS translations JSON onto a base (FR) record for a given locale. */
export function applyTranslations<T extends Record<string, unknown>>(
  locale: Locale,
  base: T,
  translations: ContentTranslations | null | undefined,
  fields: (keyof T & string)[],
): T {
  if (locale === defaultLocale || !translations) return base;
  const pack =
    locale === "en" || locale === "ar" ? translations[locale] : undefined;
  if (!pack) return base;

  const next = { ...base };
  for (const field of fields) {
    const value = pack[field];
    if (typeof value === "string" && value.trim()) {
      (next as Record<string, unknown>)[field] = value;
    }
  }
  return next;
}

export function parseTranslations(value: unknown): ContentTranslations {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const raw = value as Record<string, unknown>;
  const result: ContentTranslations = {};
  for (const locale of ["en", "ar"] as const) {
    const pack = raw[locale];
    if (pack && typeof pack === "object" && !Array.isArray(pack)) {
      result[locale] = pack as Record<string, string | null | undefined>;
    }
  }
  return result;
}

export function readTranslationFields(
  formData: FormData,
  fields: string[],
): ContentTranslations {
  const translations: ContentTranslations = { en: {}, ar: {} };
  for (const locale of ["en", "ar"] as const) {
    for (const field of fields) {
      const key = `${locale}_${field}`;
      const value = String(formData.get(key) ?? "").trim();
      if (value) {
        translations[locale]![field] = value;
      }
    }
  }
  return translations;
}
