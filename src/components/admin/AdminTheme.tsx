"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "infolog-admin-theme";
const COLLAPSE_KEY = "infolog-admin-nav-collapsed";

type Theme = "light" | "dark";

type AdminUiContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const AdminUiContext = createContext<AdminUiContextValue | null>(null);

export function useAdminUi() {
  const value = useContext(AdminUiContext);
  if (!value) {
    throw new Error("useAdminUi must be used inside AdminThemeProvider");
  }
  return value;
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function readTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

function readCollapsed(): boolean {
  return window.localStorage.getItem(COLLAPSE_KEY) === "1";
}

export function AdminThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "light" as Theme);
  const collapsed = useSyncExternalStore(subscribe, readCollapsed, () => false);

  const setTheme = useCallback((next: Theme) => {
    window.localStorage.setItem(THEME_KEY, next);
    window.dispatchEvent(new Event("storage"));
  }, []);

  const setCollapsed = useCallback((value: boolean) => {
    window.localStorage.setItem(COLLAPSE_KEY, value ? "1" : "0");
    window.dispatchEvent(new Event("storage"));
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, collapsed, setCollapsed }),
    [theme, collapsed, setTheme, setCollapsed],
  );

  return (
    <AdminUiContext.Provider value={value}>
      <div data-admin-theme={theme} className="admin-shell min-h-screen bg-paper text-ink">
        {children}
      </div>
    </AdminUiContext.Provider>
  );
}

export function AdminThemeToggle() {
  const { theme, setTheme } = useAdminUi();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="grid h-9 w-9 place-items-center border border-ink/15 hover:border-plan"
      aria-pressed={theme === "dark"}
      aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
      title={theme === "dark" ? "Mode clair" : "Mode sombre"}
    >
      {theme === "dark" ? (
        <Sun strokeWidth={1.5} className="h-4 w-4" />
      ) : (
        <Moon strokeWidth={1.5} className="h-4 w-4" />
      )}
    </button>
  );
}
