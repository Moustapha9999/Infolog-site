import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

type CtaLink = {
  href: string;
  label: string;
};

export function OutboundCta({
  title,
  lead,
  primary,
  secondary,
}: {
  title: string;
  lead?: string;
  primary: CtaLink;
  secondary?: CtaLink;
}) {
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

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className={cn(type.h2, "text-paper")}>{title}</h2>
              {lead ? (
                <p className={cn(type.body, "mt-4 text-paper/70")}>{lead}</p>
              ) : null}
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href={primary.href}>
                {primary.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
              {secondary ? (
                <Button href={secondary.href} variant="secondary">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
