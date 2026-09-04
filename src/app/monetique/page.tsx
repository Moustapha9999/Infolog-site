import Image from "next/image";
import {
  BookOpen,
  Building2,
  CreditCard,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { monetique } from "@/data/monetique";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Monétique",
  description: monetique.description,
};

const sifcoIcons: LucideIcon[] = [Users, CreditCard, BookOpen, Building2];

export default function MonetiquePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper-2">
        <Container className="pt-10 pb-4 sm:pt-12">
          <h2 className={cn(type.h2, "text-center text-plan")}>
            {monetique.network.title}
          </h2>
        </Container>
        <Image
          src="/brand/monetique-hero.png"
          alt="Réseau et collaboration — sécurité et infrastructures"
          width={1089}
          height={264}
          priority
          quality={95}
          sizes="100vw"
          className="block h-auto w-full"
        />
      </section>

      <Container className="grid items-start gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-20">
        <div>
          <SectionLabel>Finance</SectionLabel>
          <h1 className={cn(type.h1, "mt-4 text-ink")}>
            {monetique.title}
          </h1>
          <p className={cn(type.body, "mt-6 text-ink/80")}>
            {monetique.intro}
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-ink/10 bg-paper-2 shadow-[0_18px_40px_rgba(16,24,32,0.1)]">
          <Image
            src="/brand/monetique-content.jpg"
            alt="Datacenter et solutions monétiques INFOLOG"
            fill
            quality={92}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center"
          />
        </div>
      </Container>

      <section className="border-y border-ink/10 bg-paper-2/40 py-14 sm:py-16">
        <Container className="grid gap-5 md:grid-cols-2">
          <TechnicalFrame className="p-6 sm:p-8">
            <SectionLabel>Engagement</SectionLabel>
            <h3 className={cn(type.h3, "mt-3 text-ink")}>
              {monetique.mission.title}
            </h3>
            <p className={cn(type.bodyCard, "mt-4 text-mute")}>
              {monetique.mission.text}
            </p>
          </TechnicalFrame>
          <TechnicalFrame className="p-6 sm:p-8">
            <SectionLabel>Ambition</SectionLabel>
            <h3 className={cn(type.h3, "mt-3 text-ink")}>
              {monetique.vision.title}
            </h3>
            <p className={cn(type.bodyCard, "mt-4 text-mute")}>
              {monetique.vision.text}
            </p>
          </TechnicalFrame>
        </Container>
      </section>

      <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="relative aspect-[4/3] overflow-hidden border border-ink/10 bg-paper-2 shadow-[0_18px_40px_rgba(16,24,32,0.1)]">
          <Image
            src="/brand/monetique-gab.jpg"
            alt="Guichet automatique bancaire NCR"
            fill
            quality={92}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <div>
          <SectionLabel>GAB</SectionLabel>
          <h2 className={cn(type.h2, "mt-4 text-ink")}>
            {monetique.gab.title}
          </h2>
          <p className={cn(type.body, "mt-5 text-ink/80")}>
            {monetique.gab.body}
          </p>
        </div>
      </Container>

      <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 className={cn(type.h2, "text-ink")}>
            {monetique.payment.title}
          </h2>
          <div className={cn(type.body, "mt-5 space-y-4 text-ink/80")}>
            {monetique.payment.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden border border-ink/10 bg-paper-2 shadow-[0_18px_40px_rgba(16,24,32,0.1)]">
          <Image
            src="/brand/monetique-gallery-1.jpg"
            alt="Paiement électronique mobile et TPE"
            fill
            quality={92}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </Container>

      <Container className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Solutions</SectionLabel>
          </div>
          <h2 className={cn(type.h2, "mt-4 text-ink")}>
            Nos expertises monétiques
          </h2>
        </div>

        <article className="frame-corners relative mt-12 border border-ink/15 bg-paper p-6 sm:p-8 lg:p-10">
          <span className="frame-corners-bl" aria-hidden />
          <span className="frame-corners-br" aria-hidden />
          <div className="max-w-4xl">
            <h3 className={cn(type.h3, "text-plan")}>
              {monetique.sifco.title}
            </h3>
            <p className={cn(type.body, "mt-4 text-ink/80")}>
              {monetique.sifco.body}
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {monetique.sifco.modules.map((module, index) => {
              const Icon = sifcoIcons[index] ?? Users;
              return (
                <li key={module.title}>
                  <div className="group flex h-full flex-col border border-ink/12 bg-paper-2/40 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-plan/40 hover:bg-paper">
                    <div className="flex items-center gap-3 border-b border-ink/10 bg-plan px-4 py-3 text-paper">
                      <span className="grid h-9 w-9 place-items-center border border-paper/30 bg-paper/10">
                        <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden />
                      </span>
                      <h4 className="font-mono text-[12px] uppercase tracking-[0.16em]">
                        {module.title}
                      </h4>
                    </div>
                    <ul className="flex flex-1 flex-col gap-2.5 px-4 py-5">
                      {module.features.map((feature) => (
                        <li
                          key={feature}
                          className={cn(
                            type.bodyCard,
                            "flex items-start gap-2.5 text-ink/80",
                          )}
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 bg-copper"
                            aria-hidden
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
      </Container>

      <section className="border-t border-ink/10 bg-paper-2/50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Références</SectionLabel>
            </div>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {monetique.partnersTitle}
            </h2>
          </div>
          <ul className="mt-12 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {monetique.partners.map((partner) => (
              <li
                key={partner.name}
                className="flex h-28 items-center justify-center border border-ink/10 bg-paper px-4 py-5"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="h-12 w-auto max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
