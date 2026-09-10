import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getCentreAppel } from "@/data/centre-appel";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

/** Forme géométrique type « enveloppe » du site actuel, en plan technique. */
function AtoutsGraphic() {
  return (
    <svg
      viewBox="0 0 320 360"
      className="mx-auto h-auto w-full max-w-[280px] lg:max-w-none"
      aria-hidden
    >
      <polygon points="0,0 160,90 0,180" fill="#4A6E97" />
      <polygon points="160,90 320,0 320,180" fill="#1D4E89" />
      <polygon points="0,180 160,270 0,360" fill="#1D4E89" />
      <polygon points="160,270 320,180 320,360" fill="#163a66" />
      <polygon points="0,180 160,90 320,180 160,270" fill="#EEF1F4" />
      <polygon
        points="40,180 160,112 280,180 160,248"
        fill="none"
        stroke="#1D4E89"
        strokeWidth="1.2"
        opacity="0.35"
      />
    </svg>
  );
}

export async function CentreAppelAtouts() {
  const locale = await getLocale();
  const content = getCentreAppel(locale);
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper-2/40 py-14 sm:py-16 lg:py-20">
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
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
          <div>
            <p className={cn(type.label, "text-copper")}>
              {content.atoutsLabel}
            </p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>
              {content.atoutsTitle}
            </h2>
            <p className={cn(type.lead, "mt-5 text-ink/80")}>
              {content.atoutsLead}
            </p>

            <ul className="mt-8 space-y-5">
              {content.atouts.map((item) => (
                <li key={item.name} className="flex gap-3.5">
                  <span
                    className="mt-1 grid h-6 w-6 shrink-0 place-items-center border border-copper/40 text-copper"
                    aria-hidden
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
                      {item.name}
                    </p>
                    <h3 className={cn(type.h3, "mt-1 text-ink")}>
                      {item.title}
                    </h3>
                    <p className={cn(type.body, "mt-1.5 text-ink/75")}>
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] border border-ink/10 bg-paper p-6 sm:p-8 lg:max-w-[340px]">
              <span
                className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-plan"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-copper"
                aria-hidden
              />
              <AtoutsGraphic />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
