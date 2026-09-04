import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { pearsonVue as content } from "@/data/pearson-vue";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function PearsonVueHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper-2/60">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Container className="relative max-w-7xl py-10 sm:py-12 lg:py-14">
        <p className={cn(type.label, "text-mute")}>{content.breadcrumb}</p>

        <div className="relative mt-6 h-[240px] overflow-hidden border border-ink/15 sm:h-[300px] lg:h-[340px]">
          <Image
            src={content.heroImage}
            alt="Pearson VUE Authorised Test Centre — Infolog Mauritanie"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/5"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute left-5 top-5 z-10 h-6 w-6 border-l border-t border-paper/30"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-5 right-5 z-10 h-6 w-6 border-b border-r border-paper/25"
            aria-hidden
          />

          <div className="absolute inset-x-0 bottom-0 z-10 px-6 py-6 sm:px-8 sm:py-8 lg:px-10">
            <p className={cn(type.label, "tracking-[0.22em] text-paper/65")}>
              Centre de test agréé
            </p>
            <h1 className={cn(type.h1, "mt-2 max-w-3xl text-paper")}>
              {content.heroCaption}
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
