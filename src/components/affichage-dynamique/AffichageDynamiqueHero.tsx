import { Container } from "@/components/ui/Container";
import { affichageDynamique as content } from "@/data/affichage-dynamique";
import { AffichageDynamiqueHeroIcon } from "@/components/affichage-dynamique/AffichageDynamiqueHeroIcon";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function AffichageDynamiqueHero() {
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

        <div className="relative mt-6 overflow-hidden border border-ink/15 bg-ink shadow-[0_24px_48px_-32px_rgba(16,24,32,0.55)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            aria-hidden
            style={{
              backgroundImage:
                "linear-gradient(rgba(238,241,244,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(238,241,244,0.18) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <span
            className="pointer-events-none absolute left-5 top-5 h-6 w-6 border-l border-t border-paper/25"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-5 right-5 h-6 w-6 border-b border-r border-paper/20"
            aria-hidden
          />

          <div className="relative flex flex-col items-start gap-8 px-6 py-10 sm:px-8 sm:py-12 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-12 lg:py-14">
            <div className="min-w-0 flex-1">
              <h1 className={cn(type.h1, "max-w-2xl text-paper")}>
                {content.title}
              </h1>
              <p className={cn(type.body, "mt-5 max-w-2xl text-paper/75")}>
                {content.heroLead}
              </p>
            </div>
            <div
              className="relative h-[140px] w-[140px] shrink-0 sm:h-[160px] sm:w-[160px]"
              aria-hidden
            >
              <AffichageDynamiqueHeroIcon />
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-none space-y-5 lg:max-w-[92%]">
          <p className={cn(type.label, "text-copper")}>{content.introLabel}</p>
          <h2 className={cn(type.h2, "text-ink")}>{content.introTitle}</h2>
          {content.intro.map((block, index) =>
            "highlight" in block ? (
              <p key={index} className={cn(type.lead, "text-ink/80")}>
                {block.before}
                <span className="font-medium text-plan">{block.highlight}</span>
                {block.after}
              </p>
            ) : (
              <p key={index} className={cn(type.lead, "text-ink/80")}>
                {block.text}
              </p>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
