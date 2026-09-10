import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { getSiteCopy } from "@/data/site-copy";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function Mission() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const copy = getSiteCopy(locale);

  return (
    <section className="border-y border-ink/10 bg-ink text-paper">
      <Container
        wide
        className="grid items-end gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20"
      >
        <header className="border-s-2 border-paper ps-5 sm:ps-6 lg:col-span-5">
          <SectionLabel tone="dark">{dictionary.home.missionLabel}</SectionLabel>
          <h2 className={cn(type.h2, "mt-4 text-paper")}>
            {dictionary.home.missionTitle}
          </h2>
        </header>
        <p
          className={cn(
            type.body,
            "max-w-3xl text-pretty text-start text-paper/75 lg:col-span-7 lg:max-w-none",
          )}
        >
          {copy.mission}
        </p>
      </Container>
    </section>
  );
}
