import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  align = "left",
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em]",
        tone === "dark" ? "text-plan-muted" : "text-plan",
        align === "center" && "justify-center",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 shrink-0 bg-copper" aria-hidden />
      {children}
    </p>
  );
}
