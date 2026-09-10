"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  localeMeta,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

type LanguageSelectorProps = {
  variant?: "nav" | "mobile" | "top";
  className?: string;
};

export function LanguageSelector({
  variant = "nav",
  className,
}: LanguageSelectorProps) {
  const { locale, setLocale, dictionary, pending } = useLocale();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = localeMeta[locale];

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function select(next: Locale) {
    setOpen(false);
    setLocale(next);
  }

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative shrink-0",
        variant === "nav" && "ms-1 xl:ms-2",
        className,
      )}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={dictionary.language.switchTo}
        disabled={pending}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center gap-1.5 border border-ink/15 bg-paper text-ink/80 transition-colors hover:border-ink/25 hover:text-ink",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper",
          variant === "nav" && "h-9 px-2.5 text-xs font-medium xl:px-3 xl:text-sm",
          variant === "mobile" && "h-11 w-full justify-between px-4 text-sm",
          variant === "top" &&
            "h-11 border-paper/25 bg-transparent px-3 text-sm text-paper hover:border-paper/45 hover:text-paper",
          pending && "opacity-70",
        )}
      >
        <span className="inline-flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
          <span className="font-mono tracking-[0.08em]">{current.short}</span>
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 shrink-0 opacity-70 transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      <div
        id={listId}
        role="listbox"
        aria-label={dictionary.language.label}
        hidden={!open}
        className={cn(
          "absolute z-[70] min-w-[11.5rem] border border-ink/12 bg-paper py-1 shadow-[0_16px_32px_-20px_rgba(16,24,32,0.45)]",
          "origin-top transition-[opacity,transform] duration-150",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
          variant === "mobile"
            ? "inset-inline-0 top-[calc(100%+6px)]"
            : "inset-inline-end-0 top-[calc(100%+6px)]",
        )}
      >
        {locales.map((code) => {
          const meta = localeMeta[code];
          const selected = code === locale;
          return (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={selected}
              onClick={() => select(code)}
              className={cn(
                "flex w-full items-center gap-2.5 px-3 py-2.5 text-sm transition-colors",
                selected
                  ? "bg-paper-2 text-ink"
                  : "text-ink/75 hover:bg-paper-2 hover:text-ink",
              )}
            >
              <span aria-hidden className="text-base leading-none">
                {meta.flag}
              </span>
              <span className="flex-1 text-start">{meta.nativeLabel}</span>
              {selected ? (
                <Check
                  className="h-3.5 w-3.5 shrink-0 text-copper"
                  aria-hidden
                />
              ) : (
                <span className="w-3.5" aria-hidden />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
