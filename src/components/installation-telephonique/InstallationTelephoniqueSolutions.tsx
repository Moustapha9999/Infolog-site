import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { installationTelephonique as content } from "@/data/installation-telephonique";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function InstallationTelephoniqueSolutions() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper py-14 sm:py-16 lg:py-20">
      <Container className="relative max-w-7xl">
        <p className={cn(type.label, "text-copper")}>{content.solutionsLabel}</p>
        <h2 className={cn(type.h2, "mt-3 max-w-3xl text-ink")}>
          {content.solutionsTitle}
        </h2>
        <p className={cn(type.lead, "mt-5 max-w-3xl text-ink/80")}>
          {content.solutionsLead}
        </p>

        <ul className="mt-10 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-3">
          {content.solutions.map((item) => (
            <li key={item.name} className="bg-paper p-5 sm:p-6">
              <span className="mb-3 block h-1 w-8 bg-copper" aria-hidden />
              <h3 className={cn(type.h3, "text-ink")}>{item.name}</h3>
              <p className={cn(type.body, "mt-2 text-ink/75")}>{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className={cn(type.label, "text-copper")}>{content.extrasLabel}</p>
          <h3 className={cn(type.h3, "mt-3 text-ink")}>{content.extrasTitle}</h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {content.extras.map((item) => (
              <li
                key={item}
                className="border border-ink/12 bg-paper-2/50 px-4 py-2.5"
              >
                <span className={cn(type.bodyCard, "text-ink/85")}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function InstallationTelephoniqueSupport() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10">
      {/* Bande chaude — rappel de l'ancien fond saumon */}
      <div className="bg-[#D97A45] py-14 sm:py-16 lg:py-20">
        <Container className="relative max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
            <div>
              <p
                className={cn(
                  type.label,
                  "tracking-[0.22em] text-ink/70",
                )}
              >
                {content.supportLabel}
              </p>
              <h2 className={cn(type.h2, "mt-3 text-ink")}>
                {content.supportTitle}
              </h2>
            </div>
            <p className={cn(type.lead, "text-ink/85")}>{content.supportBody}</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-14 sm:py-16 lg:py-20">
        <Container className="relative max-w-7xl">
          <div className="relative overflow-hidden border border-ink/15 bg-ink px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
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
      </div>
    </section>
  );
}
