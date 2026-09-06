import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NetworkGraph } from "@/components/home/NetworkGraph";
import { site } from "@/data/site";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function Hero({
  title,
  lead,
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Container
        wide
        className="relative grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20"
      >
        <div className="flex flex-col justify-center lg:col-span-5">
          <h1
            className={cn(
              type.h2,
              "max-w-[22ch] text-balance text-paper",
            )}
          >
            {title ??
              "Partenaire technologique des entreprises en Mauritanie et en Afrique"}
          </h1>
          <p
            className={cn(
              type.body,
              "mt-5 max-w-[36rem] text-pretty text-paper/75",
            )}
          >
            {lead ?? site.mission}
          </p>
          <div className="mt-7">
            <Button href="#poles" variant="primary">
              Découvrir nos solutions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative flex items-center lg:col-span-7">
          <div className="relative aspect-[430/270] w-full">
            <NetworkGraph />
            <div className="pointer-events-none absolute left-[7%] top-[11%] font-mono text-[9px] uppercase tracking-[0.28em] text-paper/55">
              Réseau
            </div>
            <div className="pointer-events-none absolute bottom-[11%] left-[7%] font-mono text-[9px] uppercase tracking-[0.22em] text-paper/50">
              IT · Finance · Formation · BTP
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
