import { MapPin } from "lucide-react";
import { AboutServices } from "@/components/about/AboutServices";
import { Container } from "@/components/ui/Container";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { engagements, site } from "@/data/site";

export const metadata = {
  title: "Qui sommes-nous",
  description: site.description,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-ink text-paper">
        <Container wide className="py-16 sm:py-20 lg:py-24">
          <SectionLabel tone="dark">À propos</SectionLabel>
          <h1 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
            Qui sommes-nous
          </h1>
        </Container>
      </section>

      <Container
        wide
        className="grid gap-8 py-16 lg:grid-cols-[1.35fr_0.85fr] lg:items-start lg:gap-12"
      >
        <div className="space-y-10">
          <article className="frame-corners relative border border-ink/15 bg-paper p-6 sm:p-8">
            <span className="frame-corners-bl" aria-hidden />
            <span className="frame-corners-br" aria-hidden />
            <SectionLabel>INFOLOG</SectionLabel>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Présentation
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-ink/80">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="frame-corners relative border border-ink/15 bg-paper p-6 sm:p-8">
            <span className="frame-corners-bl" aria-hidden />
            <span className="frame-corners-br" aria-hidden />
            <SectionLabel>Engagement</SectionLabel>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Mission
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/80">{site.mission}</p>
          </article>

          <article className="frame-corners relative border border-ink/15 bg-paper p-6 sm:p-8">
            <span className="frame-corners-bl" aria-hidden />
            <span className="frame-corners-br" aria-hidden />
            <SectionLabel>Territoires</SectionLabel>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Notre présence
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/80">
              {site.presenceText}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {site.presence.map((country) => (
                <li
                  key={country}
                  className="flex items-center gap-3 border border-ink/10 bg-paper-2/60 px-4 py-3"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-copper" aria-hidden />
                  <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink">
                    {country}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <aside>
          <TechnicalFrame className="p-6">
            <SectionLabel>Valeurs</SectionLabel>
            <p className="mt-3 text-xl font-medium text-ink">Nos engagements</p>
            <ul className="mt-5 space-y-3">
              {engagements.map((item) => (
                <li
                  key={item}
                  className="border-b border-ink/10 pb-3 font-mono text-sm text-ink last:border-b-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </TechnicalFrame>
        </aside>
      </Container>

      <AboutServices />
    </>
  );
}
