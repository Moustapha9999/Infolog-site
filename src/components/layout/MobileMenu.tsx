"use client";

import { useEffect } from "react";
import Link from "next/link";
import { LanguageSelector } from "@/components/i18n/LanguageSelector";
import { SiteSearch } from "@/components/search/SiteSearch";
import { site } from "@/data/site";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { localizedMainNav } from "@/lib/i18n/localized-nav";
import type { SiteContact } from "@/lib/cms/site-contact";

export function MobileMenu({
  open,
  onClose,
  contact,
}: {
  open: boolean;
  onClose: () => void;
  contact: SiteContact;
}) {
  const dictionary = useDictionary();
  const mainNav = localizedMainNav(dictionary);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-paper lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={dictionary.common.menu}
    >
      <div className="flex h-full flex-col overflow-y-auto px-5 pb-10 pt-24">
        <div className="mb-6 sm:hidden">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-plan">
            {dictionary.language.label}
          </p>
          <LanguageSelector variant="mobile" />
        </div>
        <nav className="space-y-6">
          {mainNav.map((item) => {
            if (item.type === "link") {
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  onClick={onClose}
                  className="block text-xl text-ink"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.id}>
                <details className="group">
                  <summary className="cursor-pointer list-none text-xl text-ink">
                    <span className="flex items-center justify-between border-b border-ink/10 pb-3">
                      {item.label}
                      <span className="font-mono text-xs text-mute">+</span>
                    </span>
                  </summary>
                  <ul className="space-y-2 py-3 ps-1">
                    {item.type === "mega"
                      ? item.groups.map((group) => (
                          <li key={group.label}>
                            <p className="pt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-plan">
                              {group.label}
                            </p>
                            <ul className="mt-2 space-y-2">
                              {group.items.map((child) => (
                                <li key={`${child.href}-${child.label}`}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className="text-sm text-mute"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))
                      : item.items.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="text-sm text-mute"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                  </ul>
                </details>
                {item.type === "mega" && item.id === "services" ? (
                  <div className="mt-4">
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-plan">
                      {dictionary.common.search}
                    </p>
                    <SiteSearch variant="mobile" onNavigate={onClose} />
                  </div>
                ) : null}
              </div>
            );
          })}
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex bg-copper px-5 py-3 text-sm text-paper"
          >
            {dictionary.common.contactUs}
          </Link>
        </nav>
        <div className="mt-auto pt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
            {site.city} · {site.country}
          </p>
          <div className="mt-3 space-y-1 font-mono text-[11px] tracking-[0.08em] text-mute">
            {contact.phones.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block hover:text-ink"
              >
                {item.display}
              </a>
            ))}
            <a href={contact.emailHref} className="block hover:text-ink">
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
