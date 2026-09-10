import { TransformationItHero } from "@/components/transformation-it/TransformationItHero";
import { TransformationItIntro } from "@/components/transformation-it/TransformationItIntro";
import { TransformationItAxes } from "@/components/transformation-it/TransformationItAxes";
import { TransformationItCta } from "@/components/transformation-it/TransformationItCta";
import { getTransformationIt } from "@/data/transformation-it";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const transformationIt = getTransformationIt(locale);
  return buildLocaleMetadata({
    locale,
    title: transformationIt.title,
    description: transformationIt.description,
    path: "/transformation-it",
  });
}

export default async function TransformationItPage() {
  return (
    <>
      <TransformationItHero />
      <TransformationItIntro />
      <TransformationItAxes />
      <TransformationItCta />
    </>
  );
}
