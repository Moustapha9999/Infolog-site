import { ActivitiesVideo } from "@/components/home/ActivitiesVideo";
import { Engagements } from "@/components/home/Engagements";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HomeBanners } from "@/components/home/HomeBanners";
import { Intro } from "@/components/home/Intro";
import { Mission } from "@/components/home/Mission";
import { PolesGrid } from "@/components/home/PolesGrid";
import { Stats } from "@/components/home/Stats";
import { getPageSections, sectionValue } from "@/lib/cms/pages";

export default async function HomePage() {
  const sections = await getPageSections("home");
  return (
    <>
      <HomeBanners />
      <Hero
        title={sectionValue(
          sections,
          "hero.title",
          "Partenaire technologique des entreprises en Mauritanie et en Afrique",
        )}
        lead={sections.get("hero.lead")}
      />
      <Intro title={sections.get("intro.title")} lead={sections.get("intro.lead")} />
      <Stats />
      <PolesGrid />
      <Mission />
      <Engagements />
      <ActivitiesVideo />
      <FinalCTA />
    </>
  );
}
