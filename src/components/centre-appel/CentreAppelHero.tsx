import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getCentreAppel } from "@/data/centre-appel";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function CentreAppelHero() {
  const locale = await getLocale();
  const content = getCentreAppel(locale);
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

        <div className="relative mt-6 h-[260px] overflow-hidden border border-ink/15 sm:h-[300px] lg:h-[340px]">
          <Image
            src={content.heroImage}
            alt="Équipe du centre d'appel Infolog"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/50 to-ink/10"
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

          <div className="absolute inset-y-0 left-0 z-10 flex max-w-lg flex-col justify-center px-6 sm:px-8 lg:px-10">
            <h1 className={cn(type.h1, "text-paper")}>{content.title}</h1>
            <p className={cn(type.body, "mt-4 text-paper/75")}>
              {content.heroLead}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
