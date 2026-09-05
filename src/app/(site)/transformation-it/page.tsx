import { TransformationItHero } from "@/components/transformation-it/TransformationItHero";
import { TransformationItIntro } from "@/components/transformation-it/TransformationItIntro";
import { TransformationItAxes } from "@/components/transformation-it/TransformationItAxes";
import { TransformationItCta } from "@/components/transformation-it/TransformationItCta";
import { transformationIt } from "@/data/transformation-it";

export const metadata = {
  title: "Transformation IT",
  description: transformationIt.description,
};

export default function TransformationItPage() {
  return (
    <>
      <TransformationItHero />
      <TransformationItIntro />
      <TransformationItAxes />
      <TransformationItCta />
    </>
  );
}
