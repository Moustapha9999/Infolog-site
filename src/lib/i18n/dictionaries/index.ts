import type { Locale } from "../config";
import type { Dictionary } from "../dictionary-types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

const dictionaries: Record<Locale, Dictionary> = { fr, en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.fr;
}

export { fr, en, ar };
