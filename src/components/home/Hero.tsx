import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NetworkGraph } from "@/components/home/NetworkGraph";
import { site } from "@/data/site";

export function Hero({
  title,
  lead,
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden tech-grid-dark text-paper">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 border-l border-plan/30 lg:block"
        aria-hidden
      />
      <Container className="relative grid min-h-[78vh] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="max-w-xl text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
            {title ??
              "Partenaire technologique des entreprises en Mauritanie et en Afrique"}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-paper/75">
            {lead ?? site.mission}
          </p>
          <div className="mt-9">
            <Button href="#poles" variant="primary">
              Découvrir nos solutions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative hidden h-[340px] border border-plan/35 bg-ink/40 p-6 lg:block">
          <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.28em] text-paper/45">
            SCH-01 · RÉSEAU
          </div>
          <div className="absolute right-3 top-3 h-2 w-2 bg-copper" />
          <NetworkGraph />
          <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/40">
            IT · Finance · Formation · BTP
          </div>
        </div>
      </Container>
    </section>
  );
}
