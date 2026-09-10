import { ArrowUpRight, Gauge, Building2, DraftingCompass, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getEnergie } from "@/data/energie";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

const axisIcons = [Users, DraftingCompass, Gauge, Building2];

export async function EnergieAxes() {
  const locale = await getLocale();
  const content = getEnergie(locale);
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper-2/50 py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
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
            <p className={cn(type.label, "text-copper")}>{content.axesLabel}</p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>{content.axesTitle}</h2>
          </div>
          <p className={cn(type.lead, "text-ink/75 lg:pb-1")}>
            {content.axesLead}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {content.axes.map((axis, index) => {
            const Icon = axisIcons[index] ?? Gauge;
            return (
              <li
                key={axis.title}
                className="group relative border border-ink/12 bg-paper p-5 transition-[border-color] duration-300 hover:border-plan/40 sm:p-6"
              >
                <span
                  className="absolute left-0 top-0 h-full w-1 bg-transparent transition-colors group-hover:bg-copper"
                  aria-hidden
                />
                <span className="grid h-10 w-10 place-items-center border border-copper/40 text-copper">
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className={cn(type.h3, "mt-4 text-ink")}>{axis.title}</h3>
                <p className={cn(type.body, "mt-2 text-ink/75")}>{axis.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export async function EnergieApproach() {
  const locale = await getLocale();
  const content = getEnergie(locale);
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper py-14 sm:py-16 lg:py-20">
      <Container className="relative max-w-7xl">
        <p className={cn(type.label, "text-copper")}>{content.approachLabel}</p>
        <h2 className={cn(type.h2, "mt-3 max-w-2xl text-ink")}>
          {content.approachTitle}
        </h2>

        <ol className="mt-10 grid gap-px border border-ink/12 bg-ink/12 lg:grid-cols-3">
          {content.approach.map((step) => (
            <li key={step.title} className="bg-paper p-6 sm:p-8">
              <span className="mb-3 block h-1 w-8 bg-copper" aria-hidden />
              <h3 className={cn(type.h3, "text-ink")}>{step.title}</h3>
              <p className={cn(type.body, "mt-2 text-ink/75")}>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="relative mt-12 overflow-hidden border border-ink/15 bg-ink px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            aria-hidden
            style={{
              backgroundImage:
                "linear-gradient(rgba(238,241,244,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(238,241,244,0.18) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <span
            className="pointer-events-none absolute left-5 top-5 h-6 w-6 border-l border-t border-paper/25"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-5 right-5 h-6 w-6 border-b border-r border-paper/20"
            aria-hidden
          />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <h2 className={cn(type.h2, "max-w-xl text-paper")}>
              {content.ctaTitle}
            </h2>
            <Button
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 self-start sm:self-auto"
            >
              {content.ctaLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
