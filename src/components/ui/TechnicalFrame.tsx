import { cn } from "@/lib/utils";

export function TechnicalFrame({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  return (
    <Tag
      className={cn(
        "frame-corners border border-ink/15 bg-paper",
        className,
      )}
    >
      <span className="frame-corners-bl" aria-hidden />
      <span className="frame-corners-br" aria-hidden />
      {children}
    </Tag>
  );
}

export function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
      {children}
    </p>
  );
}
