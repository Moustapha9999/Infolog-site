"use client";

import { useEffect } from "react";
import Link from "next/link";
import { mainNav } from "@/data/nav";
import { site } from "@/data/site";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
      aria-label="Menu"
    >
      <div className="flex h-full flex-col overflow-y-auto px-5 pb-10 pt-24">
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
              <details key={item.id} className="group">
                <summary className="cursor-pointer list-none text-xl text-ink">
                  <span className="flex items-center justify-between border-b border-ink/10 pb-3">
                    {item.label}
                    <span className="font-mono text-xs text-mute">+</span>
                  </span>
                </summary>
                <ul className="space-y-2 py-3 pl-1">
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
            );
          })}
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex bg-copper px-5 py-3 text-sm text-paper"
          >
            Nous contacter
          </Link>
        </nav>
        <p className="mt-auto pt-12 font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
          {site.city} · {site.country}
        </p>
      </div>
    </div>
  );
}
