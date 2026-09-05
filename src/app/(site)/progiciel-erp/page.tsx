import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { erp } from "@/data/erp";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Progiciel ERP",
  description: erp.description,
};

export default function ErpPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink/10">
        <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[400px]">
          <Image
            src="/brand/erp-hero.jpg"
            alt="Progiciel ERP — gestion intégrée de l'entreprise"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(105deg,rgba(16,24,32,0.55)_0%,rgba(16,24,32,0.2)_55%,rgba(16,24,32,0.45)_100%)]"
            aria-hidden
          />
          <Container className="relative flex min-h-[260px] items-end py-10 sm:min-h-[320px] sm:py-12 lg:min-h-[400px]">
            <div className="max-w-xl border border-paper/20 bg-ink/50 px-5 py-4 backdrop-blur-sm sm:px-6 sm:py-5">
              <SectionLabel tone="dark">Solutions IT</SectionLabel>
              <h1 className={cn(type.h1, "mt-3 text-paper")}>
                {erp.title}
              </h1>
              <p className={cn(type.body, "mt-2 text-paper/75")}>
                ({erp.subtitle})
              </p>
            </div>
          </Container>
        </div>
      </section>

      <Container className="grid items-center gap-10 border-b border-ink/10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:py-20">
        <div className="flex items-center justify-center border border-ink/10 bg-paper px-8 py-10 shadow-[0_14px_36px_rgba(16,24,32,0.08)]">
          <Image
            src="/brand/erp-side-logo.png"
            alt="Pearson VUE Authorised Test Centre"
            width={781}
            height={601}
            quality={95}
            className="h-auto w-full max-w-[280px] object-contain"
          />
        </div>

        <div>
          <SectionLabel>ERP</SectionLabel>
          <h2 className={cn(type.h2, "mt-4 text-ink")}>
            {erp.why.title}
          </h2>
          <p className={cn(type.body, "mt-5 text-ink/80")}>
            {erp.why.intro}
          </p>
          <ul className={cn(type.body, "mt-4 space-y-2 text-ink/80")}>
            {erp.why.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-copper" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className={cn(type.body, "mt-5 text-ink/80")}>
            {erp.why.conclusion}
          </p>
        </div>
      </Container>

      <section className="border-b border-ink/10 bg-paper-2/40 py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <SectionLabel>Bénéfices</SectionLabel>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {erp.advantages.title}
            </h2>
            <ul className={cn(type.body, "mt-6 space-y-3 text-ink/80")}>
              {erp.advantages.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-copper"
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[8/5] overflow-hidden border border-ink/10 bg-paper shadow-[0_14px_36px_rgba(16,24,32,0.08)]">
            <Image
              src="/brand/erp-mocks.jpg"
              alt="Interface progiciel ERP"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain object-center p-4 sm:p-6"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionLabel>Méthode</SectionLabel>
          <p className={cn(type.body, "mt-5 text-ink/80")}>
            {erp.approach.intro}
          </p>
          <ol className="mt-8 space-y-4">
            {erp.approach.points.map((point, index) => (
              <li
                key={point}
                className="flex items-baseline gap-4 border border-ink/10 bg-paper-2/40 px-4 py-4 sm:px-5"
              >
                <span className="shrink-0 font-mono text-[13px] leading-7 tracking-[0.14em] text-copper sm:text-[14px] sm:leading-8">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={cn(type.body, "text-ink/80")}>
                  {point}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
