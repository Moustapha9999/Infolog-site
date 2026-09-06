import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { site } from "@/data/site";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function Mission() {
  return (
    <section className="border-y border-ink/10 bg-ink text-paper">
      <Container
        wide
        className="grid items-end gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20"
      >
        <header className="border-l-2 border-paper pl-5 sm:pl-6 lg:col-span-5">
          <SectionLabel tone="dark">Mission</SectionLabel>
          <h2 className={cn(type.h2, "mt-4 text-paper")}>Notre Mission</h2>
        </header>
        <p
          className={cn(
            type.body,
            "max-w-3xl text-pretty text-paper/75 lg:col-span-7 lg:max-w-none",
          )}
        >
          {site.mission}
        </p>
      </Container>
    </section>
  );
}
