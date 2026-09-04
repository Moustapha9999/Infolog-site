import { AffichageDynamiqueHero } from "@/components/affichage-dynamique/AffichageDynamiqueHero";
import { AffichageDynamiqueDuo } from "@/components/affichage-dynamique/AffichageDynamiqueDuo";
import { AffichageDynamiqueIptv } from "@/components/affichage-dynamique/AffichageDynamiqueIptv";
import { affichageDynamique } from "@/data/affichage-dynamique";

export const metadata = {
  title: "Affichage dynamique",
  description: affichageDynamique.description,
};

export default function AffichageDynamiquePage() {
  return (
    <>
      <AffichageDynamiqueHero />
      <AffichageDynamiqueDuo />
      <AffichageDynamiqueIptv />
    </>
  );
}
