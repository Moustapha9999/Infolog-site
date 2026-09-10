import { Container } from "@/components/ui/Container";
import { getCollaboration } from "@/data/collaboration";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function CollaborationHero() {
  const locale = await getLocale();
  const collaboration = getCollaboration(locale);
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
        <p className={cn(type.label, "tracking-[0.22em] text-mute")}>
          {collaboration.breadcrumb}
        </p>

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

          <div className="relative grid items-center gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10 lg:px-12 lg:py-14">
            <div>
              <h1 className={cn(type.h1, "max-w-3xl text-paper")}>
                {collaboration.title}
              </h1>
              <p className={cn(type.body, "mt-5 max-w-3xl text-paper/75")}>
                {collaboration.heroLead}
              </p>
            </div>

            <div className="relative flex h-28 w-full max-w-[140px] items-center justify-center border border-paper/15 bg-paper p-3 sm:h-32 sm:max-w-[160px] lg:h-36 lg:max-w-[180px] lg:justify-self-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/collaboration/hero-icon.gif"
                alt=""
                className="h-full w-full object-contain"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <p className={cn(type.lead, "mt-10 max-w-none text-ink/80 lg:max-w-[92%]")}>
          {collaboration.introBefore}{" "}
          <span className="text-plan">{collaboration.introHighlight}</span>{" "}
          {collaboration.introAfter}
        </p>
      </Container>
    </section>
  );
}
