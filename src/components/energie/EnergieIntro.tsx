import { Container } from "@/components/ui/Container";
import { energie as content } from "@/data/energie";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function EnergieIntro() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Container className="relative max-w-7xl">
        <p className={cn(type.label, "text-copper")}>{content.introLabel}</p>
        <h2 className={cn(type.h2, "mt-3 max-w-3xl text-ink")}>
          {content.introTitle}
        </h2>
        <div className="mt-6 max-w-4xl space-y-5">
          {content.intro.map((block, index) =>
            "highlight" in block ? (
              <p key={index} className={cn(type.lead, "text-ink/80")}>
                {block.before}{" "}
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

        <div className="relative mt-12 border border-ink/12 bg-paper-2/40 px-6 py-8 sm:px-10 sm:py-10">
          <span
            className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-copper"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-plan"
            aria-hidden
          />
          <p className={cn(type.label, "text-copper")}>{content.partnerLabel}</p>
          <p className="mt-3 font-mono text-sm uppercase tracking-[0.2em] text-plan">
            {content.partnerName}
          </p>
          <h3 className={cn(type.h2, "mt-2 text-ink")}>{content.partnerTitle}</h3>
          <p className={cn(type.lead, "mt-4 max-w-3xl text-ink/80")}>
            {content.partnerBody}
          </p>
        </div>
      </Container>
    </section>
  );
}
