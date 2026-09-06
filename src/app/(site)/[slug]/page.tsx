import { notFound } from "next/navigation";
import { PoleLanding } from "@/components/poles/PoleLanding";
import { poles } from "@/data/poles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return poles.map((pole) => ({ slug: pole.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const pole = poles.find((item) => item.slug === slug);
  if (!pole) return {};
  return {
    title: pole.name,
    description: pole.description,
  };
}

export default async function PolePage({ params }: Props) {
  const { slug } = await params;
  const pole = poles.find((item) => item.slug === slug);
  if (!pole) notFound();
  return <PoleLanding pole={pole} />;
}
