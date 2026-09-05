import { cn } from "@/lib/utils";

export const adminControlClass = cn(
  "mt-2 w-full border border-ink/15 bg-paper px-3 py-2.5 text-sm text-ink outline-none",
  "placeholder:text-mute/70 focus:border-plan",
);

export const adminGhostButtonClass = cn(
  "border border-ink/15 bg-paper px-3 py-2 text-sm text-ink",
  "hover:border-plan hover:text-plan",
);

export const adminDangerClass =
  "font-mono text-[11px] uppercase tracking-[0.14em] text-copper hover:underline";
