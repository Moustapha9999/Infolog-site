import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PhoneCarousel } from "@/components/telephonie/PhoneCarousel";
import { TelephonieHeroVisual } from "@/components/telephonie/TelephonieHeroVisual";
import { TelephonieServiceTabs } from "@/components/telephonie/TelephonieServiceTabs";
import { getPublishedProducts, telephonie } from "@/data/telephonie";
import { getPageSections, sectionValue } from "@/lib/cms/pages";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Téléphonie",
  description: telephonie.description,
};

export default async function TelephoniePage() {
  const [phones, sections] = await Promise.all([
    getPublishedProducts(),
    getPageSections("telephonie"),
  ]);
  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden border-b border-ink/10 bg-ink">
        <TelephonieHeroVisual />
        <div className="relative z-10 flex min-h-[78vh] w-full items-center py-16 pl-8 pr-5 sm:py-20 sm:pl-12 sm:pr-8 lg:pl-16">
          <div className="max-w-lg">
            <SectionLabel className="text-paper/80" tone="dark">
              Samsung Galaxy
            </SectionLabel>
            <h1 className={cn(type.h1, "mt-4 text-paper")}>
              {sectionValue(sections, "title", telephonie.title)}
            </h1>
            <p className={cn(type.h3, "mt-3 text-paper/90")}>
              {telephonie.heroTitle}
            </p>
            <p className={cn(type.body, "mt-4 max-w-md text-paper/70")}>
              {telephonie.heroLead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#catalogue">Découvrir</Button>
              <Button href="/contact" variant="secondary">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper py-14 sm:py-16">
        <Container className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel>INFOLOG</SectionLabel>
          </div>
          <div className={cn(type.body, "mt-5 space-y-4 text-left text-ink/80 sm:text-center")}>
            {telephonie.intro.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <TelephonieServiceTabs />

      <section
        id="catalogue"
        className="scroll-mt-24 border-b border-ink/10 bg-paper-2/40 py-16 sm:py-20"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Catalogue</SectionLabel>
            </div>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {telephonie.showcaseTitle}
            </h2>
            <p className={cn(type.body, "mt-3 text-mute")}>
              Cliquez sur Découvrir pour ouvrir la fiche complète de chaque
              modèle.
            </p>
          </div>
          <PhoneCarousel phones={phones} />
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className={cn(type.h2, "text-paper")}>
            {telephonie.ctaTitle}
          </h2>
          <p className={cn(type.body, "mt-4 text-paper/70")}>
            {telephonie.ctaLead}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Contact</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
