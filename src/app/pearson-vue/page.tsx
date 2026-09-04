import { PearsonVueHero } from "@/components/pearson-vue/PearsonVueHero";
import { PearsonVueIntro } from "@/components/pearson-vue/PearsonVueIntro";
import { PearsonVueFeatures } from "@/components/pearson-vue/PearsonVueFeatures";
import { PearsonVueElearning } from "@/components/pearson-vue/PearsonVueElearning";
import { PearsonVueCta } from "@/components/pearson-vue/PearsonVueCta";
import { pearsonVue } from "@/data/pearson-vue";

export const metadata = {
  title: "Pearson VUE & E-Learning Center",
  description: pearsonVue.description,
};

export default function PearsonVuePage() {
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
