import { PearsonVueHero } from "@/components/pearson-vue/PearsonVueHero";
import { PearsonVueIntro } from "@/components/pearson-vue/PearsonVueIntro";
import { PearsonVueFeatures } from "@/components/pearson-vue/PearsonVueFeatures";
import { PearsonVueElearning } from "@/components/pearson-vue/PearsonVueElearning";
import { PearsonVueCta } from "@/components/pearson-vue/PearsonVueCta";
import { getPearsonVue } from "@/data/pearson-vue";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const pearsonVue = getPearsonVue(locale);
  return buildLocaleMetadata({
    locale,
    title: pearsonVue.title,
    description: pearsonVue.description,
    path: "/pearson-vue",
  });
}

export default async function PearsonVuePage() {
  return (
    <>
      <PearsonVueHero />
      <PearsonVueIntro />
      <PearsonVueFeatures />
      <PearsonVueElearning />
      <PearsonVueCta />
    </>
  );
}
