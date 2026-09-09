"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { isNavActive, mainNav } from "@/data/nav";
import type { SiteContact } from "@/lib/cms/site-contact";
import { cn } from "@/lib/utils";

function navClass(active: boolean) {
  return cn(
    "inline-flex items-center gap-1.5 whitespace-nowrap text-base font-medium xl:text-lg",
    active ? "text-ink" : "text-ink/70 hover:text-ink",
  );
}

export function Header({ contact }: { contact: SiteContact }) {
  const pathname = usePathname();
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaItem = mainNav.find((item) => item.type === "mega");
  const megaOpen = openId === megaItem?.id;

  function clearCloseTimeout() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }

  function openMenu(id: string) {
    clearCloseTimeout();
    setOpenId(id);
  }

  function scheduleClose() {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpenId(null), 160);
  }

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpenId(null);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenId(null);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
      clearCloseTimeout();
    };
  }, []);

  return (
    <header
      ref={wrapRef}
      className="relative sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-sm"
    >
      <div className="bg-ink">
        <div className="mx-auto flex h-[84px] max-w-[1600px] items-center justify-between gap-4 px-5 sm:px-8">
          <Logo compact large />
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden bg-copper px-5 py-3 text-[15px] font-medium text-paper sm:inline-flex"
            >
              Nous contacter
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center border border-paper/25 text-paper lg:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <nav
        className="hidden border-t border-ink/10 lg:block"
        aria-label="Principal"
      >
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-4 sm:px-8 xl:gap-x-8">
          {mainNav.map((item) => {
            if (item.type === "link") {
              const active =
                !item.href.includes("#") && isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  onClick={() => setOpenId(null)}
                  className={navClass(active)}
                >
                  {item.label}
                </Link>
              );
            }

            const open = openId === item.id;
            const parentActive =
              item.type === "dropdown" &&
              item.items.some(
                (child) =>
                  !child.href.includes("#") && isNavActive(pathname, child.href),
              );
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => openMenu(item.id)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={
                    item.type === "mega" ? "mega-menu" : `${item.id}-menu`
                  }
                  onClick={() =>
                    setOpenId((current) => (current === item.id ? null : item.id))
                  }
                  className={navClass(open || parentActive)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      open && "rotate-180",
                    )}
                  />
                </button>
                {item.type === "dropdown" && open ? (
                  <div
                    id={`${item.id}-menu`}
                    className="absolute left-1/2 top-full z-50 min-w-52 -translate-x-1/2 pt-3"
                  >
                    <ul className="border border-ink/10 bg-paper py-2 shadow-[0_16px_32px_-20px_rgba(16,24,32,0.45)]">
                      {item.items.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpenId(null)}
                            className="block px-4 py-2.5 text-base text-ink/70 hover:bg-paper-2 hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </nav>

      {megaItem?.type === "mega" ? (
        <div
          id="mega-menu"
          hidden={!megaOpen}
          className="hidden lg:block"
          onMouseEnter={() => openMenu(megaItem.id)}
          onMouseLeave={scheduleClose}
        >
          <MegaMenu
            open={megaOpen}
            groups={megaItem.groups}
            onClose={() => setOpenId(null)}
          />
        </div>
      ) : null}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        contact={contact}
      />
    </header>
  );
}
