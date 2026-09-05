import { GedHero } from "@/components/ged/GedHero";
import { GedCompare } from "@/components/ged/GedCompare";
import { GedFeatures } from "@/components/ged/GedFeatures";
import { GedCta } from "@/components/ged/GedCta";
import { ged } from "@/data/ged";

export const metadata = {
  title: "GED",
  description: ged.description,
};

export default function GedPage() {
  return (
    <>
      <GedHero />
      <GedCompare />
      <GedFeatures />
      <GedCta />
    </>
  );
}
