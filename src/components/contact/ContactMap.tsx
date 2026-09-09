import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function ContactMap({
  className,
  embedSrc = site.mapsEmbed,
  street = site.street,
}: {
  className?: string;
  embedSrc?: string;
  street?: string;
}) {
  return (
    <div className={cn("overflow-hidden border border-ink/15 bg-paper-2", className)}>
      <iframe
        title={`Carte — ${site.name}, ${street}, ${site.city}`}
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[260px] w-full border-0 sm:h-[320px]"
      />
    </div>
  );
}
