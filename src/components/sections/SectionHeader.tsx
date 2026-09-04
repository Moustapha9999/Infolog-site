import { MonoLabel } from "@/components/ui/TechnicalFrame";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function SectionHeader({
  code,
  title,
  description,
}: {
  code: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <MonoLabel>{code}</MonoLabel>
      <h2 className={cn(type.h2, "mt-3 text-ink")}>
        {title}
      </h2>
      {description ? (
        <p className={cn(type.body, "mt-4 text-mute")}>{description}</p>
      ) : null}
    </div>
  );
}
