import { EnergieHero } from "@/components/energie/EnergieHero";
import { EnergieIntro } from "@/components/energie/EnergieIntro";
import {
  EnergieAxes,
  EnergieApproach,
} from "@/components/energie/EnergieAxes";
import { energie } from "@/data/energie";

export const metadata = {
  title: "Énergie",
  description: energie.description,
};

export default function EnergiePage() {
  return (
    <>
      <EnergieHero />
      <EnergieIntro />
      <EnergieAxes />
      <EnergieApproach />
    </>
  );
}
