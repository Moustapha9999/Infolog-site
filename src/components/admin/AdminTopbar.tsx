"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { logoutAction } from "@/app/admin/actions/auth";
import { adminPageTitle } from "@/components/admin/admin-nav-data";
import { AdminThemeToggle } from "@/components/admin/AdminTheme";
import type { AdminSession } from "@/lib/cms/auth";

function initials(email?: string) {
  const local = email?.split("@")[0] ?? "AD";
  const parts = local.split(/[._-]/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return local.slice(0, 2).toUpperCase();
}

export function AdminTopbar({ session }: { session: AdminSession }) {
  const pathname = usePathname();
  const title = adminPageTitle(pathname);

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 bg-paper px-5 py-3 sm:px-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          Console CMS
        </p>
        <h1 className="text-lg font-medium tracking-tight">{title}</h1>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-ink/15 px-3 py-1.5 text-sm hover:border-plan"
        >
          <ExternalLink strokeWidth={1.5} className="h-4 w-4" />
          <span className="hidden sm:inline">Voir le site</span>
        </Link>
        <form action={logoutAction}>
          <button
            type="submit"
            className="border border-ink/15 px-3 py-1.5 text-sm hover:border-plan"
          >
            Déconnexion
          </button>
        </form>
        <AdminThemeToggle />
        <div
          className="grid h-9 w-9 place-items-center border border-ink/15 bg-paper-2 font-mono text-[11px]"
          title={session.email}
        >
          {initials(session.email)}
        </div>
      </div>
    </header>
  );
}
