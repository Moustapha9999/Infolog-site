import {
  BadgeCheck,
  Briefcase,
  Ear,
  Shield,
  UserRound,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/sections/Reveal";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

const engagementMeta = [
  {
    label: "Le conseil et l'expertise",
    icon: BadgeCheck,
  },
  {
    label: "L'écoute",
    icon: Ear,
  },
  {
    label: "La réactivité",
    icon: Zap,
  },
  {
    label: "La souplesse",
    icon: UserRound,
  },
  {
    label: "Le professionnalisme",
    icon: Briefcase,
  },
  {
    label: "La confidentialité",
    icon: Shield,
  },
] as const;

export function Engagements() {
  return (
    <section className="border-b border-ink/10 bg-paper py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Valeurs</SectionLabel>
          </div>
          <h2 className={cn(type.h2, "mt-4 text-ink")}>
            Nos Engagements
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engagementMeta.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 0.05}>
                <article className="group relative flex h-full flex-col items-center overflow-hidden border border-ink/15 bg-paper px-6 py-10 text-center transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:border-copper/50 hover:shadow-[6px_12px_0_0_color-mix(in_srgb,var(--copper)_16%,transparent)]">
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-copper transition-transform duration-500 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                  <span className="grid h-16 w-16 place-items-center border border-copper/40 text-copper transition-colors duration-300 group-hover:bg-copper group-hover:text-paper">
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className={cn(type.label, "mt-6 tracking-[0.18em] text-ink")}>
                    {item.label}
                  </h3>
                  <span
                    className="mt-5 h-px w-8 bg-ink/15 transition-all duration-300 group-hover:w-12 group-hover:bg-copper"
                    aria-hidden
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
