import { Container } from "@/components/ui/Container";
import { installationTelephonique as content } from "@/data/installation-telephonique";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function InstallationTelephoniqueHero() {
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

        <div className="relative mt-6 overflow-hidden border border-ink/15 bg-ink">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            aria-hidden
            style={{
              backgroundImage:
                "linear-gradient(rgba(238,241,244,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(238,241,244,0.18) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block"
            aria-hidden
          >
            <div
              className="absolute inset-0 bg-[#D97A45]"
              style={{
                clipPath: "polygon(38% 0, 100% 0, 100% 100%, 12% 100%)",
              }}
            />
            <div
              className="absolute inset-0 bg-copper opacity-90"
              style={{
                clipPath: "polygon(55% 0, 100% 0, 100% 100%, 28% 100%)",
              }}
            />
          </div>

          <span
            className="pointer-events-none absolute left-5 top-5 z-10 h-6 w-6 border-l border-t border-paper/25"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-5 right-5 z-10 h-6 w-6 border-b border-r border-paper/25"
            aria-hidden
          />

          <div className="relative max-w-3xl px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <ul className="flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-paper/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <h1 className={cn(type.h1, "mt-5 text-paper")}>{content.title}</h1>
            <p className={cn(type.body, "mt-5 max-w-xl text-paper/75")}>
              {content.heroLead}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
