import { ActivitiesVideo } from "@/components/home/ActivitiesVideo";
import { Engagements } from "@/components/home/Engagements";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Mission } from "@/components/home/Mission";
import { PolesGrid } from "@/components/home/PolesGrid";
import { Stats } from "@/components/home/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Stats />
      <PolesGrid />
      <Mission />
      <Engagements />
      <ActivitiesVideo />
      <FinalCTA />
    </>
  );
}
