"use client";

import { PanelLeft } from "lucide-react";
import { AdminNav } from "@/components/admin/AdminNav";
import { AdminThemeProvider, useAdminUi } from "@/components/admin/AdminTheme";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { Logo } from "@/components/ui/Logo";
import type { AdminSession } from "@/lib/cms/auth";
import { cn } from "@/lib/utils";

function AdminShellFrame({
  session,
  unread,
  children,
}: {
  session: AdminSession;
  unread: number;
  children: React.ReactNode;
}) {
  const { collapsed, setCollapsed } = useAdminUi();

  return (
    <div
      className={cn(
        "grid min-h-screen",
        collapsed ? "lg:grid-cols-[76px_1fr]" : "lg:grid-cols-[240px_1fr]",
      )}
    >
      <aside className="admin-sidebar relative flex flex-col lg:sticky lg:top-0 lg:h-screen">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-4">
          {collapsed ? (
            <Logo compact onDark href="/admin" />
          ) : (
            <div>
              <Logo compact onDark href="/admin" />
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--admin-sidebar-fg)]/50">
                Console CMS
              </p>
            </div>
          )}
          <div className="lg:hidden">
            <AdminNav unread={unread} showUsers={session.role === "admin"} />
          </div>
        </div>
        <div className="hidden flex-1 overflow-y-auto py-3 lg:block">
          <AdminNav unread={unread} showUsers={session.role === "admin"} />
        </div>
        <div className="hidden border-t border-white/10 px-3 py-4 lg:block">
          {collapsed ? null : (
            <div className="mb-3">
              <p className="truncate text-xs text-[var(--admin-sidebar-fg)]/75">
                {session.email}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
                {session.role}
              </p>
            </div>
          )}
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="inline-flex w-full items-center justify-center border border-white/15 px-2 py-2 text-[var(--admin-sidebar-fg)]/80 hover:border-white/40"
            aria-expanded={!collapsed}
            aria-label={collapsed ? "Déplier le menu" : "Réduire le menu"}
            title={collapsed ? "Déplier" : "Réduire"}
          >
            <PanelLeft strokeWidth={1.4} className="h-4 w-4" />
          </button>
        </div>
      </aside>
      <div className="flex min-w-0 flex-col">
        <AdminTopbar session={session} />
        <div className="flex-1 bg-paper px-5 py-6 sm:px-8">{children}</div>
      </div>
    </div>
  );
}

export function AdminShell({
  session,
  unread,
  children,
}: {
  session: AdminSession;
  unread: number;
  children: React.ReactNode;
}) {
  return (
    <AdminThemeProvider>
      <AdminShellFrame session={session} unread={unread}>
        {children}
      </AdminShellFrame>
    </AdminThemeProvider>
  );
}
