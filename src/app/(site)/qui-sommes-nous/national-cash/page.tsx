import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  CircleDollarSign,
  Globe2,
  IdCard,
  PenLine,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { OutboundCta } from "@/components/sections/OutboundCta";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { Button } from "@/components/ui/Button";
import { NationalCashStats } from "@/components/national-cash/NationalCashStats";
import { nationalCash } from "@/data/site";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "National Cash",
  description: nationalCash.description,
};

const productIcons: LucideIcon[] = [
  PenLine,
  BarChart3,
  Globe2,
  IdCard,
  Briefcase,
  Wallet,
];

export default function NationalCashPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink/10 bg-ink">
        <div className="relative h-[240px] w-full sm:h-[280px] lg:h-[320px]">
          <Image
            src="/brand/national-cash-hero.jpg"
            alt="Billets en ouguiya — National Cash"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,24,32,0.55)_0%,rgba(16,24,32,0.15)_45%,rgba(16,24,32,0.2)_100%)]"
            aria-hidden
          />
          <Container
            wide
            className="absolute inset-0 flex items-end pb-5 sm:pb-6 lg:pb-8"
          >
            <div className="border-l-2 border-paper pl-5 sm:pl-6">
              <h1 className={cn(type.h1, "text-paper")}>
                {nationalCash.title}
              </h1>
              <div className="mt-5">
                <Button href={nationalCash.website.href}>
                  {nationalCash.website.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper">
        <Container wide className="py-16 lg:py-20">
          <TechnicalFrame className="overflow-hidden">
            <div className="relative">
              <div
                className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-plan/30 lg:block"
                aria-hidden
              />
              <ul className="grid lg:grid-cols-2">
                {nationalCash.paragraphs.map((paragraph) => (
                  <li
                    key={paragraph.slice(0, 48)}
                    className="border-b border-ink/10 px-6 py-8 last:border-b-0 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <span
                      className="relative z-10 mb-5 block h-2.5 w-2.5 bg-plan"
                      aria-hidden
                    />
                    <p className={cn(type.body, "text-ink/80")}>{paragraph}</p>
                  </li>
                ))}
              </ul>
            </div>
          </TechnicalFrame>
        </Container>
      </section>

      <NationalCashStats />

      <section className="border-b border-ink/10 bg-paper">
        <Container wide className="py-16 lg:py-20">
          <TechnicalFrame className="overflow-hidden">
            <div className="relative">
              <div
                className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-plan/30 lg:block"
                aria-hidden
              />
              <ul className="grid lg:grid-cols-2">
                {nationalCash.highlight.map((paragraph) => (
                  <li
                    key={paragraph.slice(0, 48)}
                    className="border-b border-ink/10 px-6 py-8 last:border-b-0 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <span
                      className="relative z-10 mb-5 block h-2.5 w-2.5 bg-plan"
                      aria-hidden
                    />
                    <p className={cn(type.body, "text-ink/80")}>{paragraph}</p>
                  </li>
                ))}
              </ul>
            </div>
          </TechnicalFrame>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-paper-2/50 py-16 sm:py-20">
        <Container className="max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Offre</SectionLabel>
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              {nationalCash.productsTitle}
            </h2>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nationalCash.products.map((product, index) => {
              const Icon = productIcons[index] ?? PenLine;
              return (
                <li key={product.title}>
                  <article className="group relative flex h-full flex-col border border-ink/12 bg-paper px-5 py-7 text-center transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-plan/40 sm:px-6 sm:py-8">
                    <span
                      className="absolute inset-x-0 top-0 h-[3px] bg-copper"
                      aria-hidden
                    />
                    <span className="mx-auto grid h-12 w-12 place-items-center border border-plan/30 text-plan transition-colors duration-300 group-hover:border-copper/50 group-hover:bg-copper group-hover:text-paper">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <h3 className="mt-5 text-base font-medium leading-snug text-plan sm:text-lg">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-mute">
                      {product.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>

          <article className="group relative mt-5 flex w-full flex-col border border-ink/12 bg-paper px-5 py-7 text-center transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-plan/40 sm:px-10 sm:py-9">
            <span
              className="absolute inset-x-0 top-0 h-[3px] bg-plan"
              aria-hidden
            />
            <span className="mx-auto grid h-12 w-12 place-items-center border border-plan/30 text-plan transition-colors duration-300 group-hover:border-copper/50 group-hover:bg-copper group-hover:text-paper">
              <CircleDollarSign
                className="h-5 w-5"
                strokeWidth={1.6}
                aria-hidden
              />
            </span>
            <h3 className="mt-5 text-base font-medium leading-snug text-plan sm:text-lg">
              {nationalCash.pep.title}
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-mute">
              {nationalCash.pep.description}
            </p>
          </article>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper">
        <Container
          wide
          className="grid items-start gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20"
        >
          <header className="border-l-2 border-plan pl-5 sm:pl-6 lg:col-span-7">
            <SectionLabel>Agences</SectionLabel>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {nationalCash.agencies.title}
            </h2>
            <p className={cn(type.body, "mt-5 text-ink/80")}>
              {nationalCash.agencies.text}
            </p>
          </header>
          <div className="overflow-hidden border border-ink/10 bg-ink lg:col-span-5">
            <Image
              src="/brand/national-cash-agences.jpg"
              alt="Retrait mobile Cash National Cash"
              width={982}
              height={1226}
              quality={92}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink pt-16 text-paper sm:pt-20">
        <Container className="relative z-10 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              {nationalCash.mobileAgency.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-paper/85 sm:text-base sm:leading-8">
              {nationalCash.mobileAgency.text}
            </p>
          </div>

          <ul className="relative z-20 mt-12 grid items-stretch gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16">
            {nationalCash.mobileAgency.cards.map((card) => (
              <li key={card.title} className="h-full">
                <article className="flex h-full flex-col border border-ink/10 bg-paper px-6 py-8 text-center shadow-[0_18px_40px_rgba(16,24,32,0.18)] sm:px-8 sm:py-9">
                  <h3 className="font-mono text-[12px] uppercase tracking-[0.16em] text-plan sm:text-[13px]">
                    {card.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-mute">
                    {card.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Container>

        <div
          className="pointer-events-none relative -mt-16 h-[88px] sm:-mt-20 sm:h-[112px] lg:-mt-24 lg:h-[128px]"
          aria-hidden
        >
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="absolute inset-x-0 bottom-0 block h-full w-full"
          >
            <path
              d="M0,48 C240,110 480,110 720,48 C960,-14 1200,-14 1440,48 L1440,120 L0,120 Z"
              fill="var(--paper)"
            />
          </svg>
        </div>
      </section>

      <OutboundCta
        title="National Cash en ligne"
        lead="Retrouvez l'offre, les services et les démarches sur le site officiel National Cash."
        primary={{
          href: nationalCash.website.href,
          label: nationalCash.website.cta,
        }}
      />
    </>
  );
}
