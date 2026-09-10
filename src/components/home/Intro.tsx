import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function Intro({
  title,
  lead,
}: {
  title?: string;
  lead?: string;
}) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const copy = dictionary.home;

  return (
    <section className="border-b border-ink/10 bg-paper py-20">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionLabel>{copy.introLabel}</SectionLabel>
          <h2 className={cn(type.h2, "mt-4 max-w-md text-ink")}>
            {title ?? copy.introTitleFallback}
          </h2>
          <p
            className={cn(
              type.body,
              "mt-5 max-w-sm border-s-2 border-copper ps-4 font-medium text-ink",
            )}
          >
            {copy.introExperience}
          </p>
        </div>
        <div className="border-s-2 border-plan ps-6 sm:ps-8">
          <p className={cn(type.lead, "text-ink text-start")}>
            {lead ?? copy.introLeadFallback}
          </p>
          <p className={cn(type.lead, "mt-5 text-ink text-start")}>
            {copy.introLead2Before}{" "}
            <strong className="font-semibold">{copy.introLead2Strong}</strong>.
          </p>
          <p className={cn(type.lead, "mt-5 text-ink text-start")}>
            {copy.introLead3Before}{" "}
            <strong className="font-semibold">{copy.introLead3Strong}</strong>
          </p>
          <div className="mt-8">
            <Button href="/qui-sommes-nous" variant="dark">
              {copy.introCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
