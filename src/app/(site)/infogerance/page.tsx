import Image from "next/image";
import {
  Activity,
  Headset,
  Layers,
  LifeBuoy,
  LineChart,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { infogerance } from "@/data/infogerance";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Infogérance",
  description: infogerance.description,
};

const serviceIcons: LucideIcon[] = [
  Workflow,
  Layers,
  ShieldCheck,
  Activity,
  LineChart,
  Headset,
  LifeBuoy,
];

export default function InfogerancePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink/10">
        <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[360px]">
          <Image
            src="/brand/infogerance-hero.png"
            alt="Infogérance — maintenance et gestion d'infrastructure informatique"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,32,0.35)_0%,rgba(16,24,32,0.55)_100%)]"
            aria-hidden
          />
          <Container className="relative flex min-h-[240px] items-center justify-center py-16 sm:min-h-[300px] lg:min-h-[360px]">
            <h1 className={cn(type.h1, "text-paper")}>
              {infogerance.title}
            </h1>
          </Container>
        </div>
      </section>

      <Container className="grid items-start gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-20">
        <div>
          <SectionLabel>Solutions IT</SectionLabel>
          <h2 className={cn(type.h2, "mt-4 text-ink")}>
            {infogerance.title}
          </h2>
          <div className={cn(type.body, "mt-6 space-y-4 text-ink/80")}>
            {infogerance.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative aspect-[3/2] overflow-hidden border border-ink/10 bg-paper-2 shadow-[0_18px_40px_rgba(16,24,32,0.1)]">
          <Image
            src="/brand/infogerance-content.jpg"
            alt="Accompagnement Infogérance INFOLOG"
            fill
            quality={92}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center"
          />
        </div>
      </Container>

      <section className="border-t border-ink/10 bg-paper-2/50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Offre</SectionLabel>
            </div>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {infogerance.servicesTitle}
            </h2>
            <p className={cn(type.body, "mt-4 text-mute")}>
              {infogerance.servicesIntro}
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {infogerance.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Workflow;
              return (
                <li
                  key={service}
                  className={
                    index < 4
                      ? "lg:col-span-3"
                      : "lg:col-span-4"
                  }
                >
                  <article className="group flex h-full min-h-[160px] flex-col items-center justify-center border border-ink/12 bg-paper px-5 py-8 text-center transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-plan/40">
                    <span className="grid h-12 w-12 place-items-center border border-plan/30 text-plan transition-colors duration-300 group-hover:border-copper/50 group-hover:bg-copper group-hover:text-paper">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <h3 className={cn(type.h3, "mt-5 text-plan")}>
                      {service}
                    </h3>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
