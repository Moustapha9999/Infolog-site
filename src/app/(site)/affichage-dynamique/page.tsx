import { AffichageDynamiqueHero } from "@/components/affichage-dynamique/AffichageDynamiqueHero";
import { AffichageDynamiqueDuo } from "@/components/affichage-dynamique/AffichageDynamiqueDuo";
import { AffichageDynamiqueIptv } from "@/components/affichage-dynamique/AffichageDynamiqueIptv";
import { getAffichageDynamique } from "@/data/affichage-dynamique";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const affichageDynamique = getAffichageDynamique(locale);
  return buildLocaleMetadata({
    locale,
    title: affichageDynamique.title,
    description: affichageDynamique.description,
    path: "/affichage-dynamique",
  });
}

export default async function AffichageDynamiquePage() {
  return (
    <>
      <AffichageDynamiqueHero />
      <AffichageDynamiqueDuo />
      <AffichageDynamiqueIptv />
    </>
  );
}
