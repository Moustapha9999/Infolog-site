"use client";

import { useEffect, useState } from "react";
import { ExternalLink, LogOut } from "lucide-react";
import { logoutAction } from "@/app/admin/actions/auth";
import { AdminThemeToggle } from "@/components/admin/AdminTheme";
import type { AdminSession } from "@/lib/cms/auth";
import { publicHrefFromLocation } from "@/lib/site-hosts";

const iconBtn =
  "grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-[var(--admin-card)] text-mute transition hover:border-plan/40 hover:text-plan";

export function AdminTopbar({
  session,
  siteHref,
}: {
  session: AdminSession;
  siteHref: string;
}) {
  const [href, setHref] = useState(siteHref);

  useEffect(() => {
    setHref(publicHrefFromLocation(window.location));
  }, [siteHref]);

  return (
    <header className="flex items-center justify-end gap-2 px-5 py-4 sm:px-8">
      <span className="sr-only">Connecté en tant que {session.email}</span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={iconBtn}
        aria-label="Voir le site"
        title="Voir le site"
        onClick={(event) => {
          event.preventDefault();
          window.open(publicHrefFromLocation(window.location), "_blank", "noopener,noreferrer");
        }}
      >
        <ExternalLink strokeWidth={1.5} className="h-4 w-4" />
      </a>
      <AdminThemeToggle />
      <form action={logoutAction}>
        <button type="submit" className={iconBtn} aria-label="Déconnexion" title="Déconnexion">
          <LogOut strokeWidth={1.5} className="h-4 w-4" />
        </button>
      </form>
    </header>
  );
}
