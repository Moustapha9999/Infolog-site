import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getSecurite } from "@/data/securite";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function SecuriteHero() {
  const locale = await getLocale();
  const securite = getSecurite(locale);
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

      <Container className="relative py-10 sm:py-12 lg:py-14">
        <p className={cn(type.label, "tracking-[0.22em] text-mute")}>
          {securite.breadcrumb}
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

          <div className="relative grid items-center gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-14">
            <div>
              <h1 className={cn(type.h1, "max-w-xl text-paper")}>
                {securite.title}
              </h1>
              <p className={cn(type.body, "mt-5 max-w-xl text-paper/70")}>
                {securite.heroLead}
              </p>
            </div>

            <div className="relative mx-auto flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48 lg:mx-0 lg:h-56 lg:w-56 lg:justify-self-end">
              <Image
                src="/brand/securite/shield-gear.png"
                alt=""
                width={224}
                height={224}
                className="h-full w-full object-contain brightness-0 invert"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <p className={cn(type.lead, "mt-10 max-w-4xl text-ink/80")}>
          {securite.introBefore}{" "}
          <span className="text-plan">{securite.introHighlight}</span>{" "}
          {securite.introAfter}
        </p>
      </Container>
    </section>
  );
}
