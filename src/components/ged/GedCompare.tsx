import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getGed } from "@/data/ged";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function GedCompare() {
  const locale = await getLocale();
  const ged = getGed(locale);
  const pairs = ged.without.items.map((without, index) => ({
    without,
    with: ged.with.items[index] ?? "",
  }));

  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Container className="relative max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
          <div>
            <p className={cn(type.label, "text-copper")}>{ged.compareLabel}</p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>{ged.compareTitle}</h2>
          </div>
          <p className={cn(type.lead, "text-ink/75 lg:pb-1")}>
            {ged.compareLead}
          </p>
        </div>

        <div className="relative mt-10 border border-ink/15 bg-paper shadow-[0_20px_40px_-36px_rgba(16,24,32,0.45)]">
          <span
            className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-copper"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-plan"
            aria-hidden
          />

          <div className="grid border-b border-ink/12 lg:grid-cols-2">
            <div className="flex items-center gap-3 border-b border-ink/12 bg-paper-2/70 px-5 py-4 sm:px-7 sm:py-5 lg:border-b-0 lg:border-r lg:border-ink/12">
              <span
                className="grid h-8 w-8 place-items-center border border-ink/20 bg-paper text-mute"
                aria-hidden
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </span>
              <p className={cn(type.label, "tracking-[0.22em] text-mute")}>
                {ged.without.label}
              </p>
            </div>
            <div className="flex items-center gap-3 bg-plan/[0.07] px-5 py-4 sm:px-7 sm:py-5">
              <span
                className="grid h-8 w-8 place-items-center border border-copper/50 bg-copper text-paper"
                aria-hidden
              >
                <Check className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <p className={cn(type.label, "tracking-[0.22em] text-plan")}>
                {ged.with.label}
              </p>
            </div>
          </div>

          <ul>
            {pairs.map((pair) => (
              <li
                key={pair.without}
                className="grid border-b border-ink/10 last:border-b-0 lg:grid-cols-2"
              >
                <div className="border-b border-ink/10 px-5 py-5 sm:px-7 sm:py-6 lg:border-b-0 lg:border-r lg:border-ink/10">
                  <p className={cn(type.body, "text-ink/70")}>{pair.without}</p>
                </div>
                <div className="flex gap-3 bg-plan/[0.04] px-5 py-5 sm:gap-4 sm:px-7 sm:py-6">
                  <span
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-copper"
                    aria-hidden
                  />
                  <p className={cn(type.body, "text-ink")}>{pair.with}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
