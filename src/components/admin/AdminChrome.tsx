import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { cn } from "@/lib/utils";

export function AdminPageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-3xl font-medium tracking-tight">{title}</h1>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-mute">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function AdminPanel({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TechnicalFrame className={cn("bg-paper", className)}>
      {title ? (
        <div className="border-b border-ink/10 px-5 py-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
            {title}
          </p>
        </div>
      ) : null}
      <div className="p-5">{children}</div>
    </TechnicalFrame>
  );
}

export function AdminEmpty({ children }: { children: React.ReactNode }) {
  return (
    <p className="border border-dashed border-ink/15 px-4 py-8 text-center text-sm text-mute">
      {children}
    </p>
  );
}
