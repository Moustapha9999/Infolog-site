import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { btp } from "@/data/btp";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "BTP",
  description: btp.description,
};

const atoutAccent = [
  "border-plan/35 text-plan",
  "border-plan-muted/50 text-plan-muted",
  "border-copper/40 text-copper",
  "border-plan/35 text-plan",
  "border-copper/40 text-copper",
] as const;

export default function BtpPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink/10">
        <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[360px]">
          <Image
            src="/brand/btp-hero.png"
            alt="Chantier BTP INFOLOG — construction et génie civil"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,32,0.28)_0%,rgba(16,24,32,0.5)_100%)]"
            aria-hidden
          />
          <Container className="relative flex min-h-[240px] items-center justify-center py-16 sm:min-h-[300px] lg:min-h-[360px]">
            <h1 className={cn(type.h1, "text-paper")}>
              {btp.title}
            </h1>
          </Container>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Construction</SectionLabel>
          </div>
          <h2 className={cn(type.h2, "mt-4 text-ink")}>
            {btp.title}
          </h2>
          <p className={cn(type.body, "mt-6 text-left text-ink/80 sm:text-center")}>
            {btp.intro}
          </p>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-2/40 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Métiers</SectionLabel>
            </div>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {btp.savoirFaire.title}
            </h2>
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {btp.savoirFaire.items.map((item) => (
              <li key={item.title}>
                <article className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden border border-ink/15 sm:min-h-[380px]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,32,0.35)_0%,rgba(16,24,32,0.78)_100%)]"
                    aria-hidden
                  />
                  <div className="relative z-10 px-5 pb-6 pt-16 sm:px-6 sm:pb-7">
                    <h3 className={cn(type.label, "tracking-[0.14em] text-paper")}>
                      {item.title}
                    </h3>
                    <ul className={cn(type.bodyCard, "mt-4 space-y-1.5 text-paper/90")}>
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <span
                            className="mt-2.5 h-1 w-1 shrink-0 bg-copper"
                            aria-hidden
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Forces</SectionLabel>
            </div>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {btp.atouts.title}
            </h2>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {btp.atouts.items.map((item, index) => (
              <li
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <span
                  className={`grid h-11 w-11 place-items-center border ${atoutAccent[index] ?? atoutAccent[0]}`}
                  aria-hidden
                >
                  <Check className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h3 className={cn(type.h3, "mt-4 uppercase tracking-wide text-ink")}>
                  {item.title}
                </h3>
                {"points" in item && item.points ? (
                  <ul className={cn(type.bodyCard, "mt-3 space-y-1.5 text-mute")}>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
                {"description" in item && item.description ? (
                  <p className={cn(type.bodyCard, "mt-3 text-mute")}>
                    {item.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-2/40 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Réalisations</SectionLabel>
            </div>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {btp.gallery.title}
            </h2>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {btp.gallery.images.map((image) => (
              <li key={image.src}>
                <figure className="relative aspect-[4/3] overflow-hidden border border-ink/12 bg-paper">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
