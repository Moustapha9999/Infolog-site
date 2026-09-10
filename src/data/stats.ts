import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
  detail?: string;
};

/**
 * Chiffres extraits du site actuel infolog.digital.
 * À valider par INFOLOG avant publication définitive.
 */
const statsPacks: Record<Locale, readonly StatItem[]> = {
  fr: [
    {
      value: 15,
      suffix: "+",
      label: "Années d'activité",
    },
    {
      value: 6,
      suffix: "",
      label: "Partenaires bancaires",
    },
    {
      value: 100,
      suffix: "+",
      label: "Agents du centre d'appel",
    },
    {
      value: 4,
      suffix: "",
      label: "Pays d'intervention",
      detail: "Mauritanie, Sénégal, Côte d'Ivoire, Mali",
    },
  ],
  en: [
    {
      value: 15,
      suffix: "+",
      label: "Years of activity",
    },
    {
      value: 6,
      suffix: "",
      label: "Banking partners",
    },
    {
      value: 100,
      suffix: "+",
      label: "Call center agents",
    },
    {
      value: 4,
      suffix: "",
      label: "Countries of operation",
      detail: "Mauritania, Senegal, Côte d'Ivoire, Mali",
    },
  ],
  ar: [
    {
      value: 15,
      suffix: "+",
      label: "سنوات النشاط",
    },
    {
      value: 6,
      suffix: "",
      label: "شركاء مصرفيون",
    },
    {
      value: 100,
      suffix: "+",
      label: "وكلاء مركز الاتصال",
    },
    {
      value: 4,
      suffix: "",
      label: "بلدان التدخل",
      detail: "موريتانيا، السنغال، ساحل العاج، مالي",
    },
  ],
};

/** @deprecated Prefer getStats(locale) — French default for legacy imports. */
export const stats = statsPacks.fr;

export function getStats(locale: Locale): readonly StatItem[] {
  return pickContent(statsPacks, locale);
}
