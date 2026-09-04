import Link from "next/link";
import { Building2, CreditCard, GraduationCap, Server } from "lucide-react";
import { poles, type Pole } from "@/data/poles";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/sections/Reveal";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

const poleIcon: Record<Pole["id"], typeof Server> = {
  it: Server,
  finance: CreditCard,
  support: GraduationCap,
  industrie: Building2,
};

export function PolesGrid() {
  return (
    <section id="poles" className="scroll-mt-40 py-20">
      <Container>
        <SectionLabel>Domaines d&apos;expertise</SectionLabel>
        <h2 className={cn(type.h2, "mt-4 max-w-xl text-ink")}>
          Quatre pôles, une même entreprise
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {poles.map((pole, index) => {
            const Icon = poleIcon[pole.id];
            return (
              <Reveal key={pole.id} delay={index * 0.06} className="h-full">
                <article className="frame-corners group relative flex h-full flex-col overflow-hidden border border-ink/15 bg-paper p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:border-plan hover:shadow-[8px_16px_0_0_color-mix(in_srgb,var(--plan)_18%,transparent)] sm:p-8">
                  <span className="frame-corners-bl" aria-hidden />
                  <span className="frame-corners-br" aria-hidden />
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-copper transition-transform duration-500 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                  <div className="flex items-start">
                    <span className="grid h-12 w-12 place-items-center border border-plan text-plan transition-colors duration-300 group-hover:bg-plan group-hover:text-paper">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className={cn(type.h3, "mt-6 text-ink")}>
                    <Link href={`/${pole.slug}`}>{pole.name}</Link>
                  </h3>
                  <p className={cn(type.bodyCard, "mt-3 max-w-md text-ink/80")}>
                    {pole.intro}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {pole.activities.map((activity) => (
                      <li
                        key={activity.slug}
                        className="border border-ink/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/70 transition-colors duration-300 group-hover:border-plan/40 group-hover:text-ink"
                      >
                        {activity.name}
                      </li>
                    ))}
                  </ul>
                  <div className="relative z-10 mt-auto pt-8">
                    <Button href={`/${pole.slug}`} variant="primary">
                      Découvrir
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
