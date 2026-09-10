import { HeroSlider } from "@/components/home/HeroSlider";
import {
  HOME_HERO_INTERVAL_MS,
  HOME_HERO_WELCOME_MS,
  parseHeroMs,
  type HomeHeroSlide,
} from "@/data/home-hero-slides";
import { getSiteCopy } from "@/data/site-copy";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

export async function Hero({
  title,
  lead,
  slides,
  welcomeMs,
  intervalMs,
}: {
  title?: string;
  lead?: string;
  slides: HomeHeroSlide[];
  welcomeMs?: string;
  intervalMs?: string;
}) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const copy = getSiteCopy(locale);

  return (
    <HeroSlider
      title={title ?? dictionary.home.heroTitleFallback}
      lead={lead ?? copy.mission}
      slides={slides}
      welcomeMs={parseHeroMs(welcomeMs, HOME_HERO_WELCOME_MS)}
      intervalMs={parseHeroMs(intervalMs, HOME_HERO_INTERVAL_MS)}
    />
  );
}
