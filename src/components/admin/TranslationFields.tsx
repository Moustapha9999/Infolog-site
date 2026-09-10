"use client";

import { useState } from "react";
import { AdminField } from "@/components/admin/AdminField";
import type { ContentTranslations } from "@/lib/i18n/localize";
import { cn } from "@/lib/utils";

type TranslationFieldDef = {
  key: string;
  labelFr: string;
  labelEn: string;
  labelAr: string;
  textarea?: boolean;
  required?: boolean;
  frName: string;
  frDefault?: string | null;
  hint?: string;
};

type TranslationFieldsProps = {
  fields: TranslationFieldDef[];
  translations?: ContentTranslations | null;
  className?: string;
};

const TABS = [
  { id: "fr" as const, label: "🇫🇷 Français" },
  { id: "en" as const, label: "🇬🇧 English" },
  { id: "ar" as const, label: "🇸🇦 العربية" },
];

export function TranslationFields({
  fields,
  translations,
  className,
}: TranslationFieldsProps) {
  const [tab, setTab] = useState<"fr" | "en" | "ar">("fr");

  return (
    <div className={cn("space-y-4 border border-ink/10 bg-paper-2/40 p-4", className)}>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-plan">
          Traductions
        </p>
        <p className="mt-1 text-xs text-mute">
          Le français est la langue par défaut. Renseignez EN et AR pour publier
          les traductions sans modifier le code.
        </p>
      </div>
      <div
        role="tablist"
        aria-label="Langues"
        className="flex flex-wrap gap-1 border-b border-ink/10 pb-2"
      >
        {TABS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            onClick={() => setTab(item.id)}
            className={cn(
              "px-3 py-1.5 text-sm transition-colors",
              tab === item.id
                ? "bg-ink text-paper"
                : "text-ink/70 hover:bg-paper hover:text-ink",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" hidden={tab !== "fr"} className="space-y-4">
        {fields.map((field) => (
          <AdminField
            key={`fr-${field.key}`}
            label={field.labelFr}
            name={field.frName}
            textarea={field.textarea}
            required={field.required}
            defaultValue={field.frDefault}
            hint={field.hint}
          />
        ))}
      </div>

      <div role="tabpanel" hidden={tab !== "en"} className="space-y-4" dir="ltr">
        {fields.map((field) => (
          <AdminField
            key={`en-${field.key}`}
            label={field.labelEn}
            name={`en_${field.key}`}
            textarea={field.textarea}
            defaultValue={translations?.en?.[field.key]}
          />
        ))}
      </div>

      <div role="tabpanel" hidden={tab !== "ar"} className="space-y-4" dir="rtl">
        {fields.map((field) => (
          <AdminField
            key={`ar-${field.key}`}
            label={field.labelAr}
            name={`ar_${field.key}`}
            textarea={field.textarea}
            defaultValue={translations?.ar?.[field.key]}
          />
        ))}
      </div>
    </div>
  );
}
