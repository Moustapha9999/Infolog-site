import { CentreAppelHero } from "@/components/centre-appel/CentreAppelHero";
import { CentreAppelIntro } from "@/components/centre-appel/CentreAppelIntro";
import { CentreAppelAtouts } from "@/components/centre-appel/CentreAppelAtouts";
import { CentreAppelRefs } from "@/components/centre-appel/CentreAppelRefs";
import { getCentreAppel } from "@/data/centre-appel";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const centreAppel = getCentreAppel(locale);
  return buildLocaleMetadata({
    locale,
    title: centreAppel.title,
    description: centreAppel.description,
    path: "/centre-appel",
  });
}

export default async function CentreAppelPage() {
  return (
    <>
      <CentreAppelHero />
      <CentreAppelIntro />
      <CentreAppelAtouts />
      <CentreAppelRefs />
    </>
  );
}
