import { localeMeta } from "@/lib/i18n/config";
import type { TranslationStatus } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

const STATUS_ICON: Record<TranslationStatus, string> = {
  complete: "✅",
  partial: "⚠️",
  missing: "❌",
};

const STATUS_LABEL: Record<TranslationStatus, string> = {
  complete: "complet",
  partial: "partiel",
  missing: "manquant",
};

type TranslationStatusBadgesProps = {
  status: Record<"fr" | "en" | "ar", TranslationStatus>;
  className?: string;
};

export function TranslationStatusBadges({
  status,
  className,
}: TranslationStatusBadgesProps) {
  return (
    <ul
      className={cn("mt-1.5 flex flex-wrap items-center gap-1.5", className)}
      aria-label="État des traductions"
    >
      {(["fr", "en", "ar"] as const).map((locale) => {
        const value = status[locale];
        return (
          <li
            key={locale}
            title={`${localeMeta[locale].label} : ${STATUS_LABEL[value]}`}
            className={cn(
              "inline-flex items-center gap-1 border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em]",
              value === "complete" && "border-plan/30 bg-plan/5 text-plan",
              value === "partial" && "border-copper/35 bg-copper/5 text-copper",
              value === "missing" && "border-ink/15 bg-paper-2 text-mute",
            )}
          >
            <span aria-hidden>{localeMeta[locale].flag}</span>
            <span aria-hidden>{STATUS_ICON[value]}</span>
            <span className="sr-only">
              {localeMeta[locale].label} : {STATUS_LABEL[value]}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
