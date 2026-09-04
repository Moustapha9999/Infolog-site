import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ElectromenagerHeroVisual } from "@/components/electromenager/ElectromenagerHeroVisual";
import { ElectromenagerFamilies } from "@/components/electromenager/ElectromenagerFamilies";
import { electromenager } from "@/data/electromenager";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Électroménager",
  description: electromenager.description,
};

export default function ElectromenagerPage() {
  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden border-b border-ink/10 bg-ink">
        <ElectromenagerHeroVisual />
        <div className="relative z-10 flex min-h-[78vh] w-full items-center py-16 pl-8 pr-5 sm:py-20 sm:pl-12 sm:pr-8 lg:pl-16">
          <div className="max-w-lg">
            <SectionLabel className="text-paper/80" tone="dark">
              {electromenager.heroTitle}
            </SectionLabel>
            <h1 className={cn(type.h1, "mt-4 text-paper")}>
              {electromenager.title}
            </h1>
            <p className={cn(type.body, "mt-4 max-w-md text-paper/70")}>
              {electromenager.heroLead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#familles">Découvrir</Button>
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
            {electromenager.intro.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <ElectromenagerFamilies />

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
              {electromenager.showcaseTitle}
            </h2>
            <p className={cn(type.body, "mt-3 text-mute")}>
              {electromenager.showcaseLead}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl border border-dashed border-ink/15 bg-paper px-6 py-14 text-center">
            <p className={cn(type.label, "tracking-[0.14em] text-plan")}>
              Produits
            </p>
            <p className={cn(type.h3, "mt-3 text-ink")}>
              Catalogue à venir
            </p>
            <p className={cn(type.bodyCard, "mt-2 text-mute")}>
              Les fiches produits seront ajoutées ici prochainement.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact?subject=Électroménager">
                Demander un produit
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className={cn(type.h2, "text-paper")}>
            {electromenager.ctaTitle}
          </h2>
          <p className={cn(type.body, "mt-4 text-paper/70")}>
            {electromenager.ctaLead}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Contact</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
