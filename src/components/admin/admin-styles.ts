import { cn } from "@/lib/utils";

export const adminControlClass = cn(
  "mt-2 w-full rounded-xl border border-ink/10 bg-[var(--admin-card)] px-3.5 py-2.5 text-sm text-ink outline-none",
  "placeholder:text-mute/70 focus:border-plan focus:ring-2 focus:ring-plan/15",
);

export const adminGhostButtonClass = cn(
  "rounded-xl border border-ink/10 bg-[var(--admin-main)] px-3.5 py-2 text-sm text-ink",
  "transition hover:border-plan/40 hover:text-plan",
);

export const adminPrimaryButtonClass = cn(
  "rounded-xl bg-copper px-5 py-2.5 text-sm font-medium text-paper",
  "transition hover:bg-[#a34f27]",
);

export const adminDangerClass =
  "font-mono text-[11px] uppercase tracking-[0.14em] text-copper hover:underline";
