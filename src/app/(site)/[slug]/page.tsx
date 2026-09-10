import { notFound } from "next/navigation";
import { PoleLanding } from "@/components/poles/PoleLanding";
import { poles } from "@/data/poles";
import { getLocale } from "@/lib/i18n/get-locale";
import { getLocalizedPoles } from "@/lib/i18n/localized-poles";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return poles.map((pole) => ({ slug: pole.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const pole = getLocalizedPoles(locale).find((item) => item.slug === slug);
  if (!pole) return {};
  return buildLocaleMetadata({
    locale,
    title: pole.name,
    description: pole.description,
    path: `/${slug}`,
  });
}

export default async function PolePage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const pole = getLocalizedPoles(locale).find((item) => item.slug === slug);
  if (!pole) notFound();
  return <PoleLanding pole={pole} />;
}
