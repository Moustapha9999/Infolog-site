import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getTransformationIt } from "@/data/transformation-it";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function TransformationItCta() {
  const locale = await getLocale();
  const content = getTransformationIt(locale);
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper py-14 sm:py-16 lg:py-20">
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

          <p className={cn(type.label, "relative tracking-[0.22em] text-paper/55")}>
            {content.closingLabel}
          </p>
          <p className={cn(type.lead, "relative mt-4 max-w-3xl text-paper/80")}>
            <span className="font-medium text-copper">{content.closingHighlight}</span>
            {content.closingAfter}
          </p>

          <div className="relative mt-10 flex flex-col gap-8 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
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
