/**
 * Locale entrypoints — thin re-exports so architecture can use `src/locales/`.
 * Canonical dictionaries remain in `@/lib/i18n/dictionaries` (do not break those imports).
 */
export { getDictionary as getMessages } from "@/lib/i18n/dictionaries";
export { getDictionary } from "@/lib/i18n/dictionaries";
export type { Dictionary } from "@/lib/i18n/dictionary-types";
export type { Locale } from "@/lib/i18n/config";
export {
  pickContent,
  hasLocalePack,
  translationStatus,
  cmsTranslationStatus,
} from "@/lib/i18n/content";
export { buildLocaleMetadata } from "@/lib/i18n/seo";
