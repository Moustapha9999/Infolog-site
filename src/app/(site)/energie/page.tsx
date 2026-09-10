import { EnergieHero } from "@/components/energie/EnergieHero";
import { EnergieIntro } from "@/components/energie/EnergieIntro";
import {
  EnergieAxes,
  EnergieApproach,
} from "@/components/energie/EnergieAxes";
import { getEnergie } from "@/data/energie";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const energie = getEnergie(locale);
  return buildLocaleMetadata({
    locale,
    title: energie.title,
    description: energie.description,
    path: "/energie",
  });
}

export default async function EnergiePage() {
  return (
    <>
      <EnergieHero />
      <EnergieIntro />
      <EnergieAxes />
      <EnergieApproach />
    </>
  );
}
