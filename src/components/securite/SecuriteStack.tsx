import Image from "next/image";
import { ArrowUpRight, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getSecurite } from "@/data/securite";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function SecuriteStack() {
  const locale = await getLocale();
  const securite = getSecurite(locale);
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper-2/50 py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[28%] bg-plan/10 lg:block"
        aria-hidden
        style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
      />

      <Container className="relative">
        <div>
          <p className={cn(type.label, "text-copper")}>
            Stack
          </p>
          <h2 className={cn(type.h2, "mt-3 text-ink")}>
            {securite.techTitle}
          </h2>
          <p className={cn(type.body, "mt-3 max-w-xl text-mute")}>
            Des briques éprouvées, choisies et déployées selon vos usages —
            pas une liste de logos sans contexte.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {securite.technologies.map((tech) => (
            <li key={tech.name}>
              <article className="group relative flex h-full flex-col overflow-hidden border border-ink/12 bg-paper p-5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-plan/45 hover:shadow-[6px_12px_0_0_color-mix(in_srgb,var(--plan)_14%,transparent)] sm:p-6">
                <span
                  className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-ink/10 transition-colors duration-300 group-hover:bg-copper"
                  aria-hidden
                />

                <h3 className={cn(type.h3, "text-ink")}>
                  {tech.name}
                </h3>
                {"fullName" in tech && tech.fullName ? (
                  <p className={cn(type.label, "mt-1 tracking-[0.14em] text-mute")}>
                    {tech.fullName}
                  </p>
                ) : null}
                <p className={cn(type.bodyCard, "mt-3 flex-1 text-ink/75")}>
                  {tech.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export async function SecuriteCta() {
  const locale = await getLocale();
  const securite = getSecurite(locale);
  const dictionary = getDictionary(locale);
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper py-14 sm:py-16">
      <Container>
        <div className="relative overflow-hidden border border-ink/15 bg-ink shadow-[0_24px_48px_-32px_rgba(16,24,32,0.5)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            aria-hidden
            style={{
              backgroundImage:
                "linear-gradient(rgba(238,241,244,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(238,241,244,0.18) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-plan/35"
            aria-hidden
            style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 100%)" }}
          />
          <span
            className="pointer-events-none absolute left-5 top-5 h-6 w-6 border-l border-t border-paper/25"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-5 right-5 h-6 w-6 border-b border-r border-paper/20"
            aria-hidden
          />

          <div className="relative grid items-center gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center border border-copper/50 text-copper">
                  <Shield className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                </span>
                <p className={cn(type.label, "text-paper/70")}>
                  {dictionary.common.contact}
                </p>
              </div>
              <h2 className={cn(type.h2, "mt-4 text-paper")}>
                {securite.ctaTitle}
              </h2>
              <p className={cn(type.body, "mt-3 text-paper/65")}>
                {securite.ctaLead}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-end">
              <div className="hidden h-16 w-16 opacity-90 sm:block lg:h-20 lg:w-20">
                <Image
                  src="/brand/securite/shield-gear.png"
                  alt=""
                  width={80}
                  height={80}
                  className="h-full w-full object-contain brightness-0 invert"
                  aria-hidden
                />
              </div>
              <Button href="/contact" className="inline-flex items-center gap-2">
                {dictionary.common.contactUs}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
