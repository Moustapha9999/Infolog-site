"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import {
  contentTypeLabel,
  type SearchHit,
  type SearchResponse,
} from "@/components/search/client-types";
import { cn } from "@/lib/utils";

type SiteSearchProps = {
  variant?: "nav" | "mobile" | "page";
  className?: string;
  autoFocus?: boolean;
  initialQuery?: string;
  onNavigate?: () => void;
};

export function SiteSearch({
  variant = "nav",
  className,
  autoFocus = false,
  initialQuery = "",
  onNavigate,
}: SiteSearchProps) {
  const router = useRouter();
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [payload, setPayload] = useState<SearchResponse | null>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const value = query.trim();
    if (value.length < 2) {
      setPayload(null);
      return;
    }
    const controller = new AbortController();
    const timer = setTimeout(() => {
      startTransition(async () => {
        try {
          const response = await fetch(
            `/api/search?mode=suggest&q=${encodeURIComponent(value)}`,
            { signal: controller.signal },
          );
          if (!response.ok) return;
          const data = (await response.json()) as SearchResponse;
          setPayload(data);
          setOpen(true);
        } catch {
          // ignore abort / network
        }
      });
    }, 180);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  function goToResults(value = query) {
    const next = value.trim();
    if (next.length < 2) return;
    setOpen(false);
    onNavigate?.();
    router.push(`/recherche?q=${encodeURIComponent(next)}`);
  }

  const suggestions = payload?.suggestions ?? [];

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative",
        variant === "nav" && "w-[168px] xl:w-[200px] 2xl:w-[220px]",
        variant === "mobile" && "w-full",
        variant === "page" && "w-full max-w-2xl",
        className,
      )}
    >
      <form
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          goToResults();
        }}
        className={cn(
          "flex items-center border bg-paper",
          variant === "nav"
            ? "h-9 border-ink/15"
            : "border-ink/15 shadow-[0_1px_0_rgba(16,24,32,0.04)]",
        )}
      >
        <label className="sr-only" htmlFor={listId}>
          Rechercher sur INFOLOG
        </label>
        <input
          id={listId}
          ref={inputRef}
          type="search"
          value={query}
          autoFocus={autoFocus}
          autoComplete="off"
          placeholder={
            variant === "nav" ? "Rechercher…" : "Rechercher sur INFOLOG…"
          }
          aria-label="Rechercher sur INFOLOG"
          aria-autocomplete="list"
          aria-expanded={open && suggestions.length > 0}
          aria-controls={`${listId}-list`}
          onFocus={() => query.trim().length >= 2 && setOpen(true)}
          onChange={(event) => setQuery(event.target.value)}
          className={cn(
            "w-full min-w-0 bg-transparent text-ink outline-none placeholder:text-mute/70",
            variant === "nav"
              ? "px-2.5 py-1.5 text-xs xl:text-sm"
              : "px-4 py-3 text-sm",
          )}
        />
        {query ? (
          <button
            type="button"
            aria-label="Effacer la recherche"
            className={cn(
              "grid shrink-0 place-items-center text-mute hover:text-ink",
              variant === "nav" ? "h-9 w-7" : "h-9 w-9",
            )}
            onClick={() => {
              setQuery("");
              setPayload(null);
              inputRef.current?.focus();
            }}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : null}
        <button
          type="submit"
          aria-label="Lancer la recherche"
          className={cn(
            "grid shrink-0 place-items-center text-plan hover:bg-paper-2 hover:text-copper",
            variant === "nav" ? "h-9 w-8" : "h-9 w-9",
          )}
        >
          <Search className="h-3.5 w-3.5 xl:h-4 xl:w-4" strokeWidth={2} />
        </button>
      </form>

      {open && query.trim().length >= 2 ? (
        <div
          id={`${listId}-list`}
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-[60] border border-ink/12 bg-paper shadow-[0_18px_40px_-24px_rgba(16,24,32,0.45)]"
        >
          <div className="border-b border-ink/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
            {pending ? "Recherche…" : "Suggestions"}
            <span className="ml-2 text-mute/70">Ctrl/⌘ K</span>
          </div>
          {suggestions.length > 0 ? (
            <ul className="max-h-[360px] overflow-y-auto py-1">
              {suggestions.map((item) => (
                <li key={item.id} role="option">
                  <SuggestionRow
                    item={item}
                    onSelect={() => {
                      setOpen(false);
                      onNavigate?.();
                      if (item.url.startsWith("http")) {
                        window.open(item.url, "_blank", "noopener,noreferrer");
                      } else {
                        router.push(item.url);
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-5 text-sm text-mute">
              Aucune suggestion. Appuyez sur Entrée pour voir tous les
              résultats.
            </p>
          )}
          <button
            type="button"
            className="flex w-full items-center justify-between border-t border-ink/10 px-4 py-3 text-left text-sm text-plan hover:bg-paper-2"
            onClick={() => goToResults()}
          >
            Voir tous les résultats
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
              Entrée
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

function SuggestionRow({
  item,
  onSelect,
}: {
  item: SearchHit;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full items-start gap-3 px-3 py-2.5 text-left hover:bg-paper-2"
    >
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center overflow-hidden border border-ink/10 bg-paper-2">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            width={36}
            height={36}
            className="h-full w-full object-cover"
          />
        ) : (
          <Search className="h-3.5 w-3.5 text-plan" aria-hidden />
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-ink">
          {item.title}
        </span>
        <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-plan">
          {contentTypeLabel(item.type)} · {item.category}
        </span>
      </span>
    </button>
  );
}
