"use client";

import { X } from "lucide-react";
import { useEffect, useId, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useAdminUi } from "@/components/admin/AdminTheme";
import { cn } from "@/lib/utils";

function subscribe() {
  return () => undefined;
}

export function AdminDialog({
  open,
  onClose,
  title,
  description,
  children,
  wide,
  tone = "default",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  wide?: boolean;
  tone?: "default" | "copper" | "plan";
}) {
  const titleId = useId();
  const { theme } = useAdminUi();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

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
    <div
      data-admin-theme={theme}
      className="admin-portal fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center sm:p-6"
    >
      <button
        type="button"
        className="admin-dialog-backdrop absolute inset-0"
        aria-label="Fermer"
        onClick={onClose}
      />
      <div
        className={cn(
          "admin-dialog relative z-10 max-h-[90vh] w-full overflow-y-auto",
          wide ? "max-w-2xl" : "max-w-md",
        )}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="flex flex-col"
        >
          <div className="flex items-start justify-between gap-4 border-b border-ink/8 px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                {tone !== "default" ? (
                  <span
                    className={cn(
                      "h-2 w-2 shrink-0 rounded-full",
                      tone === "copper" ? "bg-copper" : "bg-plan",
                    )}
                    aria-hidden
                  />
                ) : null}
                <h2 id={titleId} className="text-lg font-semibold tracking-tight text-ink">
                  {title}
                </h2>
              </div>
              {description ? (
                <p className="mt-1.5 text-sm leading-6 text-mute">{description}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 bg-[var(--admin-main)] text-mute transition hover:border-plan/40 hover:text-plan"
            >
              <X strokeWidth={1.4} className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-[var(--admin-card)] px-5 py-5 sm:px-6">{children}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
