import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getCentreAppel } from "@/data/centre-appel";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function CentreAppelIntro() {
  const locale = await getLocale();
  const content = getCentreAppel(locale);
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Container className="relative max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:gap-14 lg:items-start">
          <div>
            <p className={cn(type.label, "text-copper")}>{content.introLabel}</p>
            <div className="mt-5 space-y-5">
              {content.intro.map((block, index) => {
                if ("highlights" in block) {
                  return (
                    <p key={index} className={cn(type.lead, "text-ink/80")}>
                      {block.before}{" "}
                      {block.highlights.map((item, i) => (
                        <span key={item.label}>
                          {i > 0 ? " et " : null}
                          <span className="font-medium text-plan">
                            {item.label}
                          </span>
                        </span>
                      ))}{" "}
                      {block.mid}{" "}
                      <span className="font-medium text-plan">
                        {block.highlight}
                      </span>
                      {block.after}
                    </p>
                  );
                }
                return (
                  <p key={index} className={cn(type.lead, "text-ink/80")}>
                    {block.before}{" "}
                    <span className="font-medium text-plan">
                      {block.highlight}
                    </span>
                    {block.after}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden border border-ink/15 bg-paper-2 sm:min-h-[320px]">
            <Image
              src={content.agentImage}
              alt="Agente du centre d'appel Infolog"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
            <span
              className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-copper"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-plan"
              aria-hidden
            />
          </div>
        </div>

        <ul className="mt-12 grid border-y border-ink/12 sm:grid-cols-3">
          {content.stats.map((stat, index) => (
            <li
              key={stat.label}
              className={cn(
                "px-0 py-6 sm:px-6 sm:py-7",
                index > 0 && "border-t border-ink/12 sm:border-t-0 sm:border-l",
              )}
            >
              <p className="font-mono text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                <span className="text-copper">{stat.value}</span>
                {stat.suffix}
              </p>
              <p className={cn(type.bodyCard, "mt-2 text-mute")}>{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
