"use client";

import { MoreHorizontal, PanelLeft } from "lucide-react";
import { AdminNav } from "@/components/admin/AdminNav";
import { AdminThemeProvider, useAdminUi } from "@/components/admin/AdminTheme";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { Logo } from "@/components/ui/Logo";
import type { AdminSession } from "@/lib/cms/auth";
import { STAFF_ROLE_LABELS } from "@/lib/cms/roles";
import { cn } from "@/lib/utils";

function initials(email?: string) {
  const local = email?.split("@")[0] ?? "AD";
  const parts = local.split(/[._-]/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return local.slice(0, 2).toUpperCase();
}

function displayName(email?: string) {
  const local = email?.split("@")[0] ?? "Équipe";
  return local
    .split(/[._-]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

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
  const name = displayName(session.email);
  const roleLabel = STAFF_ROLE_LABELS[session.role];

  return (
    <div
      className={cn(
        "grid min-h-screen",
        collapsed ? "lg:grid-cols-[80px_1fr]" : "lg:grid-cols-[260px_1fr]",
      )}
    >
      <aside className="admin-sidebar relative flex flex-col lg:sticky lg:top-0 lg:h-screen">
        <div className="flex items-center justify-between px-4 py-5">
          {collapsed ? (
            <Logo compact href="/admin" />
          ) : (
            <div>
              <Logo compact href="/admin" />
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--admin-sidebar-muted)]">
                Console CMS
              </p>
            </div>
          )}
          <div className="lg:hidden">
            <AdminNav unread={unread} showUsers={session.role === "admin"} />
          </div>
        </div>

        <div className="hidden min-h-0 flex-1 overflow-y-auto px-3 pb-3 lg:block">
          <AdminNav unread={unread} showUsers={session.role === "admin"} />
        </div>

        <div className="mt-auto hidden space-y-2 border-t border-ink/8 px-3 py-3 lg:block">
          {collapsed ? (
            <div
              className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[var(--admin-sidebar-active)] font-mono text-[11px] text-plan"
              title={`${name} · ${roleLabel}`}
            >
              {initials(session.email)}
            </div>
          ) : (
            <div className="flex items-center gap-3 rounded-[12px] bg-[var(--admin-sidebar-hover)]/70 px-2.5 py-2">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--admin-sidebar-active)] font-mono text-[11px] text-plan">
                {initials(session.email)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-[var(--admin-sidebar-fg)]">
                  {name}
                </p>
                <p className="truncate text-xs text-[var(--admin-sidebar-muted)]">{roleLabel}</p>
              </div>
              <span className="text-[var(--admin-sidebar-muted)]" aria-hidden>
                <MoreHorizontal strokeWidth={1.5} className="h-4 w-4" />
              </span>
            </div>
          )}
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="inline-flex w-full items-center justify-center rounded-xl border border-ink/10 bg-[var(--admin-card)] px-2 py-2 text-[var(--admin-sidebar-muted)] transition hover:border-plan/30 hover:text-plan"
            aria-expanded={!collapsed}
            aria-label={collapsed ? "Déplier le menu" : "Réduire le menu"}
            title={collapsed ? "Déplier" : "Réduire"}
          >
            <PanelLeft strokeWidth={1.4} className="h-4 w-4" />
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-col bg-[var(--admin-main)]">
        <AdminTopbar session={session} />
        <div className="flex-1 px-5 py-6 sm:px-8 sm:py-8">{children}</div>
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
