import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { dataCenter } from "@/data/data-center";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function DataCenterAtouts() {
  return (
    <section className="relative isolate overflow-hidden border-y border-ink/10 bg-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-plan"
          style={{ clipPath: "polygon(42% 0, 100% 0, 100% 52%, 22% 100%)" }}
        />
        <div
          className="absolute inset-0 bg-ink"
          style={{ clipPath: "polygon(58% 38%, 100% 12%, 100% 100%, 8% 100%)" }}
        />
        <span className="absolute right-8 top-8 h-7 w-7 border-r border-t border-paper/30" />
        <span className="absolute bottom-8 right-8 h-7 w-7 border-b border-r border-paper/20" />
      </div>

      <Container className="relative py-14 sm:py-16 lg:py-20">
        <div className="max-w-2xl border border-ink/10 bg-paper/90 p-6 shadow-[0_18px_40px_-28px_rgba(16,24,32,0.35)] backdrop-blur-[2px] sm:p-8 lg:max-w-[56%]">
          <SectionLabel>Data center</SectionLabel>
          <h2 className={cn(type.h2, "mt-3 uppercase tracking-[0.08em] text-ink")}>
            {dataCenter.atoutsTitle}
          </h2>
          <ul className="mt-8 space-y-5">
            {dataCenter.atouts.map((item) => (
              <li
                key={item}
                className={cn(
                  type.body,
                  "grid grid-cols-[auto_1fr] gap-3.5 text-ink/80 sm:gap-4",
                )}
              >
                <span
                  className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-copper"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
