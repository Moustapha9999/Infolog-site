"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
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

export function AdminThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [collapsed, setCollapsedState] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_KEY);
    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeState(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeState("dark");
    }
    setCollapsedState(window.localStorage.getItem(COLLAPSE_KEY) === "1");
  }, []);

  function setTheme(next: Theme) {
    setThemeState(next);
    window.localStorage.setItem(THEME_KEY, next);
  }

  function setCollapsed(value: boolean) {
    setCollapsedState(value);
    window.localStorage.setItem(COLLAPSE_KEY, value ? "1" : "0");
  }

  const value = useMemo(
    () => ({ theme, setTheme, collapsed, setCollapsed }),
    [theme, collapsed],
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
