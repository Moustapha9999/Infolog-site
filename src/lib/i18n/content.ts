import {
  defaultLocale,
  type Locale,
} from "@/lib/i18n/config";

/** Pick localized pack with FR fallback — never mix languages. */
export function pickContent<T>(
  packs: { fr: T; en?: unknown; ar?: unknown },
  locale: Locale,
): T {
  if (locale === defaultLocale) return packs.fr;
  const localized = packs[locale as "en" | "ar"];
  return (localized as T | undefined) ?? packs.fr;
}

export function hasLocalePack(
  packs: { fr: unknown; en?: unknown; ar?: unknown },
  locale: Locale,
): boolean {
  if (locale === defaultLocale) return true;
  return packs[locale as "en" | "ar"] != null;
}

/** Completeness for admin badges. */
export type TranslationStatus = "complete" | "partial" | "missing";

export function translationStatus(
  frFilled: boolean,
  enFilled: boolean,
  arFilled: boolean,
): Record<"fr" | "en" | "ar", TranslationStatus> {
  return {
    fr: frFilled ? "complete" : "missing",
    en: enFilled ? "complete" : "missing",
    ar: arFilled ? "complete" : "missing",
  };
}

export function cmsTranslationStatus(
  fr: Record<string, string | null | undefined>,
  translations: { en?: Record<string, unknown>; ar?: Record<string, unknown> } | null | undefined,
  fields: string[],
): Record<"fr" | "en" | "ar", TranslationStatus> {
  const frOk = fields.every((f) => Boolean(String(fr[f] ?? "").trim()));
  const packOk = (locale: "en" | "ar") => {
    const pack = translations?.[locale];
    if (!pack) return false;
    return fields.every((f) => Boolean(String(pack[f] ?? "").trim()));
  };
  return {
    fr: frOk ? "complete" : "partial",
    en: packOk("en") ? "complete" : "missing",
    ar: packOk("ar") ? "complete" : "missing",
  };
}
