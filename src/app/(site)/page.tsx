import { ActivitiesVideo } from "@/components/home/ActivitiesVideo";
import { Engagements } from "@/components/home/Engagements";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HomeBanners } from "@/components/home/HomeBanners";
import { Intro } from "@/components/home/Intro";
import { Mission } from "@/components/home/Mission";
import { PolesGrid } from "@/components/home/PolesGrid";
import { Stats } from "@/components/home/Stats";
import { getStats } from "@/data/stats";
import { getHomeHeroSlides } from "@/lib/cms/banners";
import { getPageSections, sectionValue } from "@/lib/cms/pages";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function HomePage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const [sections, slides] = await Promise.all([
    getPageSections("home", locale),
    getHomeHeroSlides(),
  ]);

  return (
    <>
      <HomeBanners />
      <Hero
        title={sectionValue(
          sections,
          "hero.title",
          dictionary.home.heroTitleFallback,
        )}
        lead={sections.get("hero.lead")}
        slides={slides}
        welcomeMs={sections.get("hero.welcome_ms")}
        intervalMs={sections.get("hero.slide_ms")}
      />
      <Intro title={sections.get("intro.title")} lead={sections.get("intro.lead")} />
      <Stats items={getStats(locale)} label={dictionary.home.statsLabel} />
      <PolesGrid />
      <Mission />
      <Engagements />
      <ActivitiesVideo />
      <FinalCTA />
    </>
  );
}
