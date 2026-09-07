import { HeroSlider } from "@/components/home/HeroSlider";
import {
  HOME_HERO_INTERVAL_MS,
  HOME_HERO_WELCOME_MS,
  parseHeroMs,
  type HomeHeroSlide,
} from "@/data/home-hero-slides";
import { site } from "@/data/site";

export function Hero({
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
  return (
    <HeroSlider
      title={
        title ??
        "Partenaire technologique des entreprises en Mauritanie et en Afrique"
      }
      lead={lead ?? site.mission}
      slides={slides}
      welcomeMs={parseHeroMs(welcomeMs, HOME_HERO_WELCOME_MS)}
      intervalMs={parseHeroMs(intervalMs, HOME_HERO_INTERVAL_MS)}
    />
  );
}
