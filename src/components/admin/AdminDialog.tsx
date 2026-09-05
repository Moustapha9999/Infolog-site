"use client";

import { X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { cn } from "@/lib/utils";

export function AdminDialog({
  open,
  onClose,
  title,
  description,
  children,
  wide,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const titleId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-[#101820]/60"
        aria-label="Fermer"
        onClick={onClose}
      />
      <TechnicalFrame
        className={cn(
          "relative z-10 max-h-[90vh] w-full overflow-y-auto",
          wide ? "max-w-2xl" : "max-w-md",
        )}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="flex flex-col"
        >
          <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-5 py-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
                Console
              </p>
              <h2 id={titleId} className="mt-1 text-xl font-medium">
                {title}
              </h2>
              {description ? (
                <p className="mt-2 text-sm leading-6 text-mute">{description}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="grid h-8 w-8 place-items-center border border-ink/15 text-ink/70 hover:border-plan hover:text-plan"
            >
              <X strokeWidth={1.4} className="h-4 w-4" />
            </button>
          </div>
          <div className="px-5 py-5">{children}</div>
        </div>
      </TechnicalFrame>
    </div>,
    document.body,
  );
}
