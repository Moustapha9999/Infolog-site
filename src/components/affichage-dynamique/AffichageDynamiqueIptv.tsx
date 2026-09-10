import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getAffichageDynamique } from "@/data/affichage-dynamique";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function AffichageDynamiqueIptv() {
  const locale = await getLocale();
  const content = getAffichageDynamique(locale);
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper-2/40 py-14 sm:py-16 lg:py-20">
      <Container className="relative max-w-7xl">
        <div className="relative border border-ink/12 bg-paper px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
          <span
            className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-copper"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-plan"
            aria-hidden
          />
          <p className={cn(type.label, "text-copper")}>{content.iptvLabel}</p>
          <h2 className={cn(type.h2, "mt-3 max-w-2xl text-ink")}>
            {content.iptvTitle}
          </h2>
          <p className={cn(type.lead, "mt-5 max-w-3xl text-ink/80")}>
            {content.iptvBody}
          </p>
        </div>

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
