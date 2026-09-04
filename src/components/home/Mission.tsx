import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { site } from "@/data/site";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function Mission() {
  return (
    <section className="relative overflow-hidden border-y border-ink/10">
      <div className="relative w-full leading-none">
        <Image
          src="/brand/mission-banner.jpg"
          alt=""
          width={2048}
          height={584}
          quality={95}
          sizes="100vw"
          priority
          className="block h-auto w-full"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(16,24,32,0.42)_0%,rgba(16,24,32,0.18)_48%,rgba(16,24,32,0.4)_100%)]"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center">
          <Container className="grid w-full items-center gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <SectionLabel tone="dark">Mission</SectionLabel>
              <h2 className={cn(type.h2, "mt-4 border border-paper/35 bg-ink/55 px-5 py-4 text-paper backdrop-blur-sm")}>
                Notre Mission
              </h2>
            </div>
            <p className={cn(type.lead, "max-w-2xl bg-ink/40 px-4 py-3 text-paper backdrop-blur-sm sm:px-5 sm:py-4")}>
              {site.mission}
            </p>
          </Container>
        </div>
      </div>
    </section>
  );
}
