import { AlertTriangle, Check, X } from "lucide-react";
import { localeMeta } from "@/lib/i18n/config";
import type { TranslationStatus } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<TranslationStatus, string> = {
  complete: "complet",
  partial: "partiel",
  missing: "manquant",
};

function StatusIcon({ status }: { status: TranslationStatus }) {
  if (status === "complete") {
    return <Check className="h-3 w-3" strokeWidth={2.25} aria-hidden />;
  }
  if (status === "partial") {
    return <AlertTriangle className="h-3 w-3" strokeWidth={2.25} aria-hidden />;
  }
  return <X className="h-3 w-3" strokeWidth={2.25} aria-hidden />;
}

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
              "inline-flex items-center gap-1 border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em]",
              value === "complete" && "border-plan/35 bg-plan/8 text-plan",
              value === "partial" && "border-copper/40 bg-copper/8 text-copper",
              value === "missing" && "border-ink/15 bg-paper-2 text-mute",
            )}
          >
            <span className="font-medium">{localeMeta[locale].short}</span>
            <StatusIcon status={value} />
            <span className="sr-only">
              {localeMeta[locale].label} : {STATUS_LABEL[value]}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
