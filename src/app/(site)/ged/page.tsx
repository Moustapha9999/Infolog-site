import { GedHero } from "@/components/ged/GedHero";
import { GedCompare } from "@/components/ged/GedCompare";
import { GedFeatures } from "@/components/ged/GedFeatures";
import { GedCta } from "@/components/ged/GedCta";
import { getGed } from "@/data/ged";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const ged = getGed(locale);
  return buildLocaleMetadata({
    locale,
    title: ged.shortTitle,
    description: ged.description,
    path: "/ged",
  });
}

export default async function GedPage() {
  return (
    <>
      <GedHero />
      <GedCompare />
      <GedFeatures />
      <GedCta />
    </>
  );
}
