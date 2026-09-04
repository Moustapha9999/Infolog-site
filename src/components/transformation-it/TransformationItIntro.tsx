import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { transformationIt as content } from "@/data/transformation-it";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function TransformationItIntro() {
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
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
          <div>
            <p className={cn(type.label, "text-copper")}>{content.introLabel}</p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>{content.introTitle}</h2>
            {content.intro.map((block, index) => (
              <p key={index} className={cn(type.lead, "mt-5 text-ink/80")}>
                {block.before}{" "}
                <span className="font-medium text-plan">{block.highlight}</span>
                {block.after}
              </p>
            ))}
          </div>

          <div className="relative aspect-[16/10] overflow-hidden border border-ink/15 bg-ink sm:aspect-[4/3]">
            <Image
              src={content.visualImage}
              alt="Digital Transform"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
            <span
              className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-copper"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-plan"
              aria-hidden
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
