"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useOptimistic,
  useRef,
  useTransition,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  LOCALE_COOKIE,
  isLocale,
  localeDirection,
  localeMeta,
  resolveLocale,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Dictionary } from "@/lib/i18n/dictionary-types";
import { setLocaleAction } from "@/lib/i18n/set-locale";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  pending: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function persistClient(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_COOKIE, locale);
  } catch {
    // ignore
  }
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
  const meta = localeMeta[locale];
  document.documentElement.lang = meta.htmlLang;
  document.documentElement.dir = meta.dir;
  document.documentElement.dataset.locale = locale;
}

export function LocaleProvider({
  locale: initialLocale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const router = useRouter();
  const hydrated = useRef(false);
  const [pending, startTransition] = useTransition();
  const [locale, setOptimisticLocale] = useOptimistic(
    resolveLocale(initialLocale),
  );

  const setLocale = useCallback(
    (next: Locale) => {
      startTransition(async () => {
        setOptimisticLocale(next);
        persistClient(next);
        await setLocaleAction(next);
        router.refresh();
      });
    },
    [router, setOptimisticLocale],
  );

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    try {
      const stored = localStorage.getItem(LOCALE_COOKIE);
      if (stored && isLocale(stored) && stored !== initialLocale) {
        setLocale(stored);
        return;
      }
    } catch {
      // ignore
    }
    persistClient(initialLocale);
  }, [initialLocale, setLocale]);

  useEffect(() => {
    persistClient(locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dictionary: getDictionary(locale),
      dir: localeDirection(locale),
      setLocale,
      pending,
    }),
    [locale, pending, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

export function useDictionary() {
  return useLocale().dictionary;
}
