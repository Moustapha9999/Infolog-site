export const locales = ["fr", "en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const LOCALE_COOKIE = "infolog_locale";

export const localeMeta: Record<
  Locale,
  {
    code: string;
    label: string;
    nativeLabel: string;
    short: string;
    flag: string;
    dir: "ltr" | "rtl";
    htmlLang: string;
    ogLocale: string;
  }
> = {
  fr: {
    code: "fr",
    label: "Français",
    nativeLabel: "Français",
    short: "FR",
    flag: "🇫🇷",
    dir: "ltr",
    htmlLang: "fr",
    ogLocale: "fr_MR",
  },
  en: {
    code: "en",
    label: "English",
    nativeLabel: "English",
    short: "EN",
    flag: "🇬🇧",
    dir: "ltr",
    htmlLang: "en",
    ogLocale: "en_US",
  },
  ar: {
    code: "ar",
    label: "Arabic",
    nativeLabel: "العربية",
    short: "AR",
    flag: "🇸🇦",
    dir: "rtl",
    htmlLang: "ar",
    ogLocale: "ar_MR",
  },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function localeDirection(locale: Locale): "ltr" | "rtl" {
  return localeMeta[locale].dir;
}
