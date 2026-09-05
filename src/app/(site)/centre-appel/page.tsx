import { CentreAppelHero } from "@/components/centre-appel/CentreAppelHero";
import { CentreAppelIntro } from "@/components/centre-appel/CentreAppelIntro";
import { CentreAppelAtouts } from "@/components/centre-appel/CentreAppelAtouts";
import { CentreAppelRefs } from "@/components/centre-appel/CentreAppelRefs";
import { centreAppel } from "@/data/centre-appel";

export const metadata = {
  title: "Centre d'appel",
  description: centreAppel.description,
};

export default function CentreAppelPage() {
  return (
    <>
      <CentreAppelHero />
      <CentreAppelIntro />
      <CentreAppelAtouts />
      <CentreAppelRefs />
    </>
  );
}
