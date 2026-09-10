import { Container } from "@/components/ui/Container";
import { getPearsonVue } from "@/data/pearson-vue";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function PearsonVueIntro() {
  const locale = await getLocale();
  const content = getPearsonVue(locale);
  const { presentation, leader } = content;

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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className={cn(type.label, "text-copper")}>
              {presentation.label}
            </p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>
              {presentation.title}
            </h2>
            <div className="mt-5 space-y-4">
              {presentation.paragraphs.map((block, index) =>
                "highlight" in block ? (
                  <p key={index} className={cn(type.lead, "text-ink/80")}>
                    {block.before}{" "}
                    <span className="font-medium text-plan">
                      {block.highlight}
                    </span>
                    {block.after}
                  </p>
                ) : (
                  <p key={index} className={cn(type.lead, "text-ink/80")}>
                    {block.text}
                  </p>
                ),
              )}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {presentation.partners.map((partner) => (
                <li
                  key={partner}
                  className="border border-ink/15 bg-paper-2/60 px-3.5 py-2 font-mono text-xs tracking-wide text-plan-muted"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={cn(type.label, "text-copper")}>{leader.label}</p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>{leader.title}</h2>
            <p className={cn(type.lead, "mt-5 text-ink/80")}>
              {leader.before}{" "}
              <span className="font-medium text-plan">{leader.highlight}</span>
              {leader.after}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
