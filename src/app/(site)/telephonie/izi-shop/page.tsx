import {
  ArrowUpRight,
  BadgeCheck,
  CreditCard,
  IdCard,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  UserRound,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { OutboundCta } from "@/components/sections/OutboundCta";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { Button } from "@/components/ui/Button";
import { getIziShop } from "@/data/izi-shop";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getLocale();
  const iziShop = getIziShop(locale);
  return buildLocaleMetadata({
    locale,
    title: iziShop.title,
    description: iziShop.description,
    path: "/telephonie/izi-shop",
  });
}

const highlightIcons: LucideIcon[] = [CreditCard, BadgeCheck, Wrench];
const stepIcons: LucideIcon[] = [UserRound, Smartphone, IdCard, MessageCircle];

export default async function IziShopPage() {
  const locale = await getLocale();
  const iziShop = getIziShop(locale);
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink/10 bg-ink">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(238,241,244,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(238,241,244,0.22) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <span
          className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-paper/20 sm:left-10 sm:top-10"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 border-b border-r border-paper/15 sm:bottom-10 sm:right-10"
          aria-hidden
        />

        <Container wide className="relative py-16 sm:py-20 lg:py-24">
          <SectionLabel className="text-paper/80" tone="dark">
            {iziShop.heroEyebrow}
          </SectionLabel>
          <h1 className={cn(type.h1, "mt-4 max-w-3xl text-paper")}>
            {iziShop.title}
          </h1>
          <p className={cn(type.h3, "mt-4 max-w-2xl text-paper/90")}>
            {iziShop.heroTitle}
          </p>
          <p className={cn(type.body, "mt-4 max-w-xl text-paper/70")}>
            {iziShop.heroLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={iziShop.website.href}>
              {iziShop.website.cta}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/telephonie" variant="secondary">
              Catalogue INFOLOG
            </Button>
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/45">
            {iziShop.website.host}
          </p>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper">
        <Container wide className="py-16 lg:py-20">
          <TechnicalFrame className="overflow-hidden">
            <div className="relative">
              <div
                className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-plan/30 lg:block"
                aria-hidden
              />
              <ul className="grid lg:grid-cols-3">
                {iziShop.paragraphs.map((paragraph) => (
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
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {iziShop.offersTitle}
            </h2>
            <p className={cn(type.body, "mt-4 text-mute")}>
              {iziShop.offersLead}
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {iziShop.highlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? ShieldCheck;
              return (
                <li key={item.title}>
                  <article className="group relative flex h-full flex-col border border-ink/12 bg-paper px-5 py-7 text-center transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-plan/40 sm:px-6 sm:py-8">
                    <span
                      className="absolute inset-x-0 top-0 h-[3px] bg-copper"
                      aria-hidden
                    />
                    <span className="mx-auto grid h-12 w-12 place-items-center border border-plan/30 text-plan transition-colors duration-300 group-hover:border-copper/50 group-hover:bg-copper group-hover:text-paper">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <h3 className="mt-5 text-base font-medium leading-snug text-plan sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-mute">
                      {item.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper py-16 sm:py-20">
        <Container className="max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel>{iziShop.rangeTitle}</SectionLabel>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              Samsung Galaxy
            </h2>
            <p className={cn(type.body, "mt-4 text-ink/80")}>
              {iziShop.rangeLead}
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {iziShop.range.map((model) => (
              <li
                key={model}
                className="border border-ink/15 bg-paper-2/60 px-4 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-ink"
              >
                {model}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper-2/40 py-16 sm:py-20">
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
          <div className="max-w-2xl">
            <SectionLabel>Parcours</SectionLabel>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {iziShop.subscription.title}
            </h2>
            <p className={cn(type.body, "mt-4 text-ink/80")}>
              {iziShop.subscription.lead}
            </p>
          </div>

          <ol className="relative mt-12 grid gap-5 lg:grid-cols-4">
            <span
              className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-plan/30 lg:block"
              aria-hidden
            />
            {iziShop.subscription.steps.map((step, index) => {
              const Icon = stepIcons[index] ?? UserRound;
              return (
                <li key={step.title}>
                  <article className="relative flex h-full flex-col border border-ink/12 bg-paper px-5 py-7 sm:px-6">
                    <span className="relative z-10 mb-5 grid h-10 w-10 place-items-center border border-plan/30 bg-paper text-plan">
                      <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                    </span>
                    <h3 className={cn(type.h3, "text-ink")}>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-mute">
                      {step.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper">
        <Container
          wide
          className="grid items-start gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20"
        >
          <header className="border-l-2 border-plan pl-5 sm:pl-6 lg:col-span-7">
            <SectionLabel>Affiliation</SectionLabel>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {iziShop.affiliation.title}
            </h2>
            <p className={cn(type.body, "mt-5 text-ink/80")}>
              {iziShop.affiliation.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={iziShop.website.href}>
                {iziShop.website.cta}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                href="/qui-sommes-nous/national-cash"
                variant="outline"
              >
                National Cash
              </Button>
            </div>
          </header>
          <aside className="border border-ink/12 bg-paper-2/50 p-6 sm:p-8 lg:col-span-5">
            <p className={cn(type.label, "text-plan")}>Raison sociale</p>
            <p className={cn(type.h3, "mt-3 text-ink")}>{iziShop.legalName}</p>
            <span className="mt-6 block h-px w-10 bg-copper" aria-hidden />
            <p className={cn(type.label, "mt-6 text-plan")}>Téléphone</p>
            <a
              href={iziShop.contact.phoneHref}
              className="mt-3 inline-block font-mono text-sm tracking-wide text-ink hover:text-plan"
            >
              {iziShop.contact.phone}
            </a>
            <p className={cn(type.label, "mt-6 text-plan")}>Boutique</p>
            <a
              href={iziShop.website.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-mono text-sm tracking-wide text-ink hover:text-plan"
            >
              {iziShop.website.host}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </aside>
        </Container>
      </section>

      <OutboundCta
        title={iziShop.ctaTitle}
        lead={iziShop.ctaLead}
        primary={{
          href: iziShop.website.href,
          label: iziShop.website.cta,
        }}
        secondary={{
          href: "/telephonie",
          label: "Catalogue INFOLOG",
        }}
      />
    </>
  );
}
