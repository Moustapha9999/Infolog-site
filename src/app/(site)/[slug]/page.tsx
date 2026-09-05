import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { poles } from "@/data/poles";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

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

  return (
    <>
      <section className="border-b border-ink/10 bg-paper-2 py-16">
        <Container>
          <h1 className={cn(type.h1, "max-w-3xl text-ink")}>
            {pole.name}
          </h1>
          <p className={cn(type.body, "mt-6 max-w-2xl text-mute")}>
            {pole.description}
          </p>
        </Container>
      </section>
      <Container className="space-y-6 py-16">
        {pole.activities.map((activity) => (
          <TechnicalFrame
            key={activity.slug}
            as="article"
            className="scroll-mt-40 p-6 sm:p-8"
          >
            <div id={activity.slug} className="scroll-mt-40">
              <p className={cn(type.label, "text-plan")}>
                Activité
              </p>
              <h2 className={cn(type.h2, "mt-3 text-ink")}>{activity.name}</h2>
              {activity.body.map((paragraph) => (
                <p key={paragraph} className={cn(type.body, "mt-4 text-mute")}>
                  {paragraph}
                </p>
              ))}
            </div>
          </TechnicalFrame>
        ))}
        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          <Button href="/contact" variant="dark">
            Un projet en {pole.shortName} ?
          </Button>
          <Button href="/#poles" variant="outline">
            Voir les autres pôles
          </Button>
        </div>
      </Container>
    </>
  );
}
