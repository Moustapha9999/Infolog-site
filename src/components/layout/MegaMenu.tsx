"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { NavGroup } from "@/data/nav";

export function MegaMenu({
  open,
  groups,
  onClose,
}: {
  open: boolean;
  groups: NavGroup[];
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="absolute inset-x-0 top-full z-40 border-b border-ink/10 bg-paper shadow-[0_24px_40px_-28px_rgba(16,24,32,0.45)]">
      <div className="mx-auto grid max-w-6xl gap-0 px-5 py-8 sm:px-8 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.label}
            className="border-t border-ink/10 py-5 lg:border-t-0 lg:border-l lg:py-0 lg:pl-6 first:lg:border-l-0 first:lg:pl-0"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
              {group.label}
            </p>
            <ul className="mt-4 space-y-1">
              {group.items.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-1.5 text-[15px] text-ink/70 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
