import { Monitor, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { affichageDynamique as content } from "@/data/affichage-dynamique";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function AffichageDynamiqueDuo() {
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
            <p className={cn(type.label, "text-copper")}>{content.duoLabel}</p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>{content.duoTitle}</h2>
          </div>
          <p className={cn(type.lead, "text-ink/75 lg:pb-1")}>
            {content.duoLead}
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Application */}
          <article className="relative border border-ink/12 bg-paper p-6 sm:p-8">
            <span
              className="absolute left-0 top-0 h-full w-1 bg-plan"
              aria-hidden
            />
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-plan/40 text-plan">
                <Monitor className="h-5 w-5" strokeWidth={1.6} aria-hidden />
              </span>
              <div>
                <p className={cn(type.label, "tracking-[0.2em] text-plan")}>
                  Usages
                </p>
                <h3 className={cn(type.h3, "mt-1 text-ink")}>
                  {content.applications.title}
                </h3>
              </div>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {content.applications.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 border border-ink/8 bg-paper-2/50 px-3 py-2.5"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plan"
                    aria-hidden
                  />
                  <span className={cn(type.bodyCard, "text-ink/80")}>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Avantages */}
          <article className="relative border border-ink/12 bg-paper p-6 sm:p-8">
            <span
              className="absolute left-0 top-0 h-full w-1 bg-copper"
              aria-hidden
            />
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-copper/40 text-copper">
                <Sparkles className="h-5 w-5" strokeWidth={1.6} aria-hidden />
              </span>
              <div>
                <p className={cn(type.label, "tracking-[0.2em] text-copper")}>
                  Bénéfices
                </p>
                <h3 className={cn(type.h3, "mt-1 text-ink")}>
                  {content.avantages.title}
                </h3>
              </div>
            </div>
            <ul>
              {content.avantages.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-t border-ink/10 py-3 first:border-t-0 first:pt-0"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper"
                    aria-hidden
                  />
                  <p className={cn(type.body, "text-ink/80")}>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
