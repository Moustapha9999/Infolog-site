import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { getErp } from "@/data/erp";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getLocale();
  const erp = getErp(locale);
  return buildLocaleMetadata({
    locale,
    title: erp.title,
    description: erp.description,
    path: "/progiciel-erp",
  });
}

export default async function ErpPage() {
  const locale = await getLocale();
  const erp = getErp(locale);
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink/10">
        <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[360px]">
          <Image
            src="/brand/erp-hero.jpg"
            alt="Modules interconnectés d'un progiciel ERP"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-right"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,24,32,0.55)_0%,rgba(16,24,32,0.2)_50%,rgba(16,24,32,0.28)_100%)]"
            aria-hidden
          />
          <Container
            wide
            className="relative flex min-h-[240px] items-center py-16 sm:min-h-[300px] lg:min-h-[360px]"
          >
            <h1 className={cn(type.h1, "border-l-2 border-paper pl-5 text-paper sm:pl-6")}>
              {erp.title}
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
            <h2 className={cn(type.h2, "mt-4 text-ink")}>{erp.title}</h2>
            <p className={cn(type.body, "mt-4 text-mute")}>({erp.subtitle})</p>
          </header>

          <TechnicalFrame className="p-6 sm:p-8 lg:col-span-8 lg:p-10">
            <SectionLabel>ERP</SectionLabel>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>{erp.why.title}</h2>
            <p className={cn(type.body, "mt-5 text-ink/80")}>{erp.why.intro}</p>

            <ul className="mt-6 grid gap-px bg-ink/10 sm:grid-cols-2">
              {erp.why.points.map((point) => (
                <li key={point} className="bg-paper-2/70 px-5 py-5">
                  <span className="mb-3 block h-2 w-2 bg-plan" aria-hidden />
                  <p className={cn(type.bodyCard, "text-ink/80")}>{point}</p>
                </li>
              ))}
            </ul>

            <p className={cn(type.body, "mt-6 text-ink/80")}>
              {erp.why.conclusion}
            </p>
          </TechnicalFrame>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-2/50 py-16 sm:py-20">
        <Container wide>
          <div className="grid gap-6 border-l-2 border-plan pl-5 sm:pl-6 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>Bénéfices</SectionLabel>
              <h2 className={cn(type.h2, "mt-4 text-ink")}>
                {erp.advantages.title}
              </h2>
            </div>
          </div>

          <ul className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {erp.advantages.points.map((point) => (
              <li key={point} className="bg-paper px-5 py-7">
                <span className="mb-4 block h-2 w-2 bg-plan" aria-hidden />
                <p className={cn(type.bodyCard, "text-ink/80")}>{point}</p>
              </li>
            ))}
          </ul>

          <div className="relative mt-8 aspect-[16/7] overflow-hidden border border-ink/10 bg-ink">
            <Image
              src="/brand/erp-hero.jpg"
              alt="Modules interconnectés d'un progiciel ERP"
              fill
              quality={92}
              sizes="100vw"
              className="object-cover object-right"
            />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <Container wide>
          <div className="grid gap-8 border-l-2 border-plan pl-5 sm:pl-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>Méthode</SectionLabel>
            </div>
            <p className={cn(type.body, "text-ink/80 lg:col-span-8")}>
              {erp.approach.intro}
            </p>
          </div>

          <ol className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-12">
            {erp.approach.points.map((point, index) => (
              <li
                key={point}
                className={cn(
                  "bg-paper px-5 py-7",
                  index < 4 ? "lg:col-span-3" : "lg:col-span-4",
                )}
              >
                <span className="mb-4 block h-2.5 w-2.5 bg-plan" aria-hidden />
                <p className={cn(type.bodyCard, "text-ink/80")}>{point}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
