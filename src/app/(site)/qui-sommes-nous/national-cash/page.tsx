import Image from "next/image";
import {
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
import { nationalCash } from "@/data/site";

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
      <section className="relative isolate overflow-hidden border-b border-ink/10">
        <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[400px]">
          <Image
            src="/brand/national-cash-hero.jpg"
            alt="Billets en ouguiya — National Cash"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,32,0.28)_0%,rgba(16,24,32,0.45)_100%)]"
            aria-hidden
          />
          <Container className="relative flex min-h-[280px] items-center justify-center py-16 sm:min-h-[340px] lg:min-h-[400px]">
            <div className="w-full max-w-3xl border border-paper/20 bg-ink/55 px-6 py-8 text-center backdrop-blur-sm sm:px-10 sm:py-10">
              <h1 className="mt-4 text-3xl font-medium tracking-tight text-paper sm:text-4xl lg:text-5xl">
                {nationalCash.title}
              </h1>
            </div>
          </Container>
        </div>
      </section>

      <Container className="py-16 lg:pb-10 lg:pt-20">
        <div className="grid items-start gap-8 border border-ink/10 bg-paper p-5 shadow-[0_14px_36px_rgba(16,24,32,0.08)] sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
          <div className="relative aspect-[4/3] overflow-hidden border border-ink/10 bg-paper-2 sm:aspect-square">
            <Image
              src="/brand/national-cash-pos.jpg"
              alt="Terminaux de paiement National Cash"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>

          <div className="space-y-5 text-base leading-7 text-ink/80 sm:text-[17px] sm:leading-8">
            {nationalCash.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>

      <section className="pb-10 pt-2 sm:pb-12">
        <Container>
          <div className="frame-corners relative border border-ink/15 bg-paper px-3 py-8 shadow-[0_14px_36px_rgba(16,24,32,0.08)] sm:px-5 sm:py-10 lg:px-4">
            <span className="frame-corners-bl" aria-hidden />
            <span className="frame-corners-br" aria-hidden />
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.35fr] lg:items-start lg:gap-0">
              {nationalCash.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="px-2 text-center lg:border-r lg:border-ink/10 lg:px-4 lg:last:border-r-0"
                >
                  <p
                    className={`whitespace-nowrap font-mono font-medium tracking-tight text-copper ${
                      stat.value.length > 6
                        ? "text-xl sm:text-2xl lg:text-[1.65rem]"
                        : "text-3xl sm:text-4xl"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="mx-auto mt-3 max-w-[16ch] font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-ink">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-12 pt-2 sm:pb-16">
        <Container className="max-w-7xl">
          <div className="border border-plan/40 bg-plan px-6 py-8 text-base leading-7 text-paper shadow-[0_14px_36px_rgba(29,78,137,0.28)] sm:px-10 sm:py-10 sm:text-[17px] sm:leading-8">
            <div className="space-y-5">
              {nationalCash.highlight.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
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

      <section className="bg-copper">
        <Container className="grid max-w-7xl w-full items-stretch gap-8 py-14 sm:gap-10 lg:grid-cols-2 lg:gap-10 lg:py-16">
          <div className="flex min-w-0 flex-col justify-center text-paper">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
              {nationalCash.agencies.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-paper/90 sm:text-base sm:leading-8">
              {nationalCash.agencies.text}
            </p>
          </div>
          <div className="relative min-h-[260px] w-full overflow-hidden border border-paper/20 bg-ink/20 shadow-[0_18px_40px_rgba(16,24,32,0.22)] lg:min-h-full">
            <Image
              src="/brand/national-cash-agences.jpg"
              alt="Retrait mobile Cash National Cash"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-plan pt-16 text-paper sm:pt-20">
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
    </>
  );
}
