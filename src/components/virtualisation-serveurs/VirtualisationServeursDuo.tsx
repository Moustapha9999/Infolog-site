import { Container } from "@/components/ui/Container";
import { getVirtualisationServeurs } from "@/data/virtualisation-serveurs";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function VirtualisationServeursDuo() {
  const locale = await getLocale();
  const content = getVirtualisationServeurs(locale);
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

        <div className="relative mt-10 border border-ink/15 bg-paper shadow-[0_20px_40px_-36px_rgba(16,24,32,0.45)]">
          <span
            className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-plan"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-copper"
            aria-hidden
          />

          <div className="grid gap-px bg-ink/12 lg:grid-cols-2">
            <div className="bg-paper p-6 sm:p-8 lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-plan"
                  aria-hidden
                />
                <h3 className={cn(type.h3, "text-ink")}>
                  {content.avantages.title}
                </h3>
              </div>
              <ul>
                {content.avantages.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3.5 border-t border-ink/10 py-4 first:border-t-0 first:pt-0"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-plan/70"
                      aria-hidden
                    />
                    <p className={cn(type.body, "text-ink/80")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-copper/[0.045] p-6 sm:p-8 lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-copper"
                  aria-hidden
                />
                <h3 className={cn(type.h3, "text-ink")}>
                  {content.savoirFaire.title}
                </h3>
              </div>
              <ul>
                {content.savoirFaire.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3.5 border-t border-ink/10 py-4 first:border-t-0 first:pt-0"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper"
                      aria-hidden
                    />
                    <p className={cn(type.body, "text-ink")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
