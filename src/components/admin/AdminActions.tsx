"use client";

import Link from "next/link";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import type { LucideIcon } from "lucide-react";
import { Ban, Eye, Pencil, Power, SquarePen, Trash2 } from "lucide-react";
import { setRecordActive } from "@/app/admin/actions/content";
import { AdminDialog } from "@/components/admin/AdminDialog";
import { adminGhostButtonClass } from "@/components/admin/admin-styles";
import { cn } from "@/lib/utils";

export type AdminActiveEntity =
  | "brands"
  | "categories"
  | "products"
  | "banners"
  | "services"
  | "pages";

type AdminAction = (formData: FormData) => void | Promise<void>;

const iconButtonClass = cn(
  "grid h-8 w-8 place-items-center border border-ink/15 text-ink/70",
  "hover:border-plan hover:text-plan",
);

function PendingSubmit({
  children,
  tone = "copper",
}: {
  children: React.ReactNode;
  tone?: "copper" | "plan";
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "px-4 py-2 text-sm uppercase tracking-[0.14em] text-paper disabled:opacity-60",
        tone === "copper" ? "bg-copper" : "bg-plan",
      )}
    >
      {pending ? "…" : children}
    </button>
  );
}

export function AdminRowActions({ children }: { children: React.ReactNode }) {
  return <div className="flex shrink-0 items-center justify-end gap-1">{children}</div>;
}

export function AdminIconButton({
  label,
  icon: Icon,
  onClick,
  href,
  tone = "default",
}: {
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
  href?: string;
  tone?: "default" | "copper";
}) {
  const className = cn(
    iconButtonClass,
    tone === "copper" && "hover:border-copper hover:text-copper",
  );
  if (href) {
    return (
      <Link href={href} aria-label={label} title={label} className={className}>
        <Icon strokeWidth={1.4} className="h-4 w-4" />
      </Link>
    );
  }
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={className}
    >
      <Icon strokeWidth={1.4} className="h-4 w-4" />
    </button>
  );
}

export function AdminIconSubmit({
  label,
  icon: Icon,
  tone = "default",
}: {
  label: string;
  icon: LucideIcon;
  tone?: "default" | "copper";
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-label={label}
      title={label}
      disabled={pending}
      className={cn(
        iconButtonClass,
        tone === "copper" && "hover:border-copper hover:text-copper",
        pending && "opacity-50",
      )}
    >
      <Icon strokeWidth={1.4} className="h-4 w-4" />
    </button>
  );
}

export function AdminEditLink({ href, label = "Ouvrir" }: { href: string; label?: string }) {
  return <AdminIconButton href={href} label={label} icon={SquarePen} />;
}

export function AdminConfirmDialog({
  action,
  title,
  description,
  confirmLabel,
  triggerLabel,
  icon: Icon,
  tone = "copper",
  children,
}: {
  action: AdminAction;
  title: string;
  description: string;
  confirmLabel: string;
  triggerLabel: string;
  icon: LucideIcon;
  tone?: "copper" | "plan";
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AdminIconButton
        label={triggerLabel}
        icon={Icon}
        tone={tone === "copper" ? "copper" : "default"}
        onClick={() => setOpen(true)}
      />
      <AdminDialog open={open} onClose={() => setOpen(false)} title={title} description={description}>
        <form action={action}>
          {children}
          <div className="mt-6 flex justify-end gap-2">
            <button type="button" onClick={() => setOpen(false)} className={adminGhostButtonClass}>
              Annuler
            </button>
            <PendingSubmit tone={tone}>{confirmLabel}</PendingSubmit>
          </div>
        </form>
      </AdminDialog>
    </>
  );
}

export function AdminFormDialog({
  action,
  title,
  triggerLabel = "Modifier",
  submitLabel = "Enregistrer",
  wide,
  children,
}: {
  action: AdminAction;
  title: string;
  triggerLabel?: string;
  submitLabel?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AdminIconButton label={triggerLabel} icon={Pencil} onClick={() => setOpen(true)} />
      <AdminDialog open={open} onClose={() => setOpen(false)} title={title} wide={wide}>
        <form action={action} className="space-y-4">
          {children}
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setOpen(false)} className={adminGhostButtonClass}>
              Annuler
            </button>
            <PendingSubmit>{submitLabel}</PendingSubmit>
          </div>
        </form>
      </AdminDialog>
    </>
  );
}

export function AdminViewDialog({
  title,
  triggerLabel = "Voir",
  children,
}: {
  title: string;
  triggerLabel?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AdminIconButton label={triggerLabel} icon={Eye} onClick={() => setOpen(true)} />
      <AdminDialog open={open} onClose={() => setOpen(false)} title={title} wide>
        {children}
        <div className="mt-5 flex justify-end">
          <button type="button" onClick={() => setOpen(false)} className={adminGhostButtonClass}>
            Fermer
          </button>
        </div>
      </AdminDialog>
    </>
  );
}

export function AdminDeleteDialog({
  action,
  name,
  children,
}: {
  action: AdminAction;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <AdminConfirmDialog
      action={action}
      title="Supprimer"
      description={`${name} sera retiré définitivement.`}
      confirmLabel="Supprimer"
      triggerLabel="Supprimer"
      icon={Trash2}
      tone="copper"
    >
      {children}
    </AdminConfirmDialog>
  );
}

export function AdminToggleDialog({
  name,
  active,
  entity,
  id,
  next,
  deactivateLabel = "Désactiver",
  activateLabel = "Activer",
  deactivateHint,
  activateHint,
}: {
  name: string;
  active: boolean;
  entity: AdminActiveEntity;
  id: string;
  next?: string;
  deactivateLabel?: string;
  activateLabel?: string;
  deactivateHint?: string;
  activateHint?: string;
}) {
  const label = active ? deactivateLabel : activateLabel;
  return (
    <AdminConfirmDialog
      action={setRecordActive}
      title={label}
      description={
        active
          ? (deactivateHint ?? `${name} ne sera plus visible sur le site.`)
          : (activateHint ?? `${name} redeviendra visible sur le site.`)
      }
      confirmLabel={label}
      triggerLabel={label}
      icon={active ? Ban : Power}
      tone={active ? "copper" : "plan"}
    >
      <input type="hidden" name="entity" value={entity} />
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="active" value={active ? "0" : "1"} />
      {next ? <input type="hidden" name="next" value={next} /> : null}
    </AdminConfirmDialog>
  );
}
