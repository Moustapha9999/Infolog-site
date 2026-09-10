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
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { getInfogerance } from "@/data/infogerance";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getLocale();
  const infogerance = getInfogerance(locale);
  return buildLocaleMetadata({
    locale,
    title: infogerance.title,
    description: infogerance.description,
    path: "/infogerance",
  });
}

const serviceIcons: LucideIcon[] = [
  Workflow,
  Layers,
  ShieldCheck,
  Activity,
  LineChart,
  Headset,
  LifeBuoy,
];

export default async function InfogerancePage() {
  const locale = await getLocale();
  const infogerance = getInfogerance(locale);
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
          <Container
            wide
            className="relative flex min-h-[240px] items-center py-16 sm:min-h-[300px] lg:min-h-[360px]"
          >
            <h1 className={cn(type.h1, "border-l-2 border-paper pl-5 text-paper sm:pl-6")}>
              {infogerance.title}
            </h1>
          </Container>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper">
        <Container
          wide
          className="grid gap-10 py-16 lg:grid-cols-12 lg:items-start lg:gap-16 lg:py-20"
        >
          <header className="border-l-2 border-plan pl-5 sm:pl-6 lg:col-span-4">
            <SectionLabel>Solutions IT</SectionLabel>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {infogerance.title}
            </h2>
          </header>

          <TechnicalFrame className="overflow-hidden lg:col-span-8">
            <div className="relative">
              <div
                className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-plan/30 lg:block"
                aria-hidden
              />
              <ul className="grid lg:grid-cols-3">
                {infogerance.paragraphs.map((paragraph) => (
                  <li
                    key={paragraph.slice(0, 40)}
                    className="border-b border-ink/10 px-6 py-7 last:border-b-0 sm:px-8 sm:py-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <span
                      className="relative z-10 mb-5 block h-2.5 w-2.5 bg-plan"
                      aria-hidden
                    />
                    <p className={cn(type.bodyCard, "text-ink/80")}>{paragraph}</p>
                  </li>
                ))}
              </ul>
            </div>
          </TechnicalFrame>
        </Container>
      </section>

      <section className="bg-paper-2/50 py-16 sm:py-20">
        <Container wide>
          <div className="grid gap-6 border-l-2 border-plan pl-5 sm:pl-6 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>Offre</SectionLabel>
              <h2 className={cn(type.h2, "mt-4 text-ink")}>
                {infogerance.servicesTitle}
              </h2>
            </div>
            <p className={cn(type.body, "text-mute lg:col-span-7")}>
              {infogerance.servicesIntro}
            </p>
          </div>

          <ul className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-12">
            {infogerance.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Workflow;
              return (
                <li
                  key={service}
                  className={index < 4 ? "lg:col-span-3" : "lg:col-span-4"}
                >
                  <article className="flex h-full min-h-[168px] flex-col bg-paper px-5 py-8 transition-colors duration-300 hover:bg-paper-2 motion-reduce:transition-none">
                    <span className="grid h-11 w-11 place-items-center border border-plan/35 text-plan">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <h3 className={cn(type.h3, "mt-5 text-plan")}>{service}</h3>
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
