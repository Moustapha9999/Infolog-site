import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function Intro() {
  return (
    <section className="border-b border-ink/10 bg-paper py-20">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionLabel>Présentation</SectionLabel>
          <h2 className={cn(type.h2, "mt-4 max-w-md text-ink")}>
            INFOLOG, votre partenaire technologique
          </h2>
          <p className={cn(type.body, "mt-5 max-w-sm border-l-2 border-copper pl-4 font-medium text-ink")}>
            15+ ans d&apos;expérience au service des entreprises
          </p>
        </div>
        <div className="border-l-2 border-plan pl-6 sm:pl-8">
          <p className={cn(type.lead, "text-ink")}>
            INFOLOG est une société de prestations de services et d&apos;intégration
            de solutions technologiques, présente en Mauritanie depuis plus de
            15 ans.
          </p>
          <p className={cn(type.lead, "mt-5 text-ink")}>
            Nous accompagnons les entreprises dans leurs projets de
            transformation numérique en leur apportant{" "}
            <strong className="font-semibold">
              des solutions adaptées à leurs besoins, une expertise technique
              reconnue et un accompagnement de proximité
            </strong>
            .
          </p>
          <p className={cn(type.lead, "mt-5 text-ink")}>
            Notre ambition est simple :{" "}
            <strong className="font-semibold">
              faire de la technologie un véritable levier de développement pour
              votre organisation.
            </strong>
          </p>
          <div className="mt-8">
            <Button href="/qui-sommes-nous" variant="dark">
              En savoir plus sur INFOLOG
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
