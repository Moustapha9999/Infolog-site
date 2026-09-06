import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { PoleSommaire } from "@/components/poles/PoleSommaire";
import { activityPageHref, type Activity, type Pole } from "@/data/poles";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

function PoleWide({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-12 xl:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
}

function extraLinks(slug: string) {
  if (slug !== "virtualisation") return [];
  return [
    { href: "/virtualisation-serveurs", label: "Virtualisation de serveurs" },
    {
      href: "/virtualisation-postes",
      label: "Virtualisation de postes et d'applications",
    },
  ];
}

function ActivityLinks({
  activity,
}: {
  activity: Activity;
}) {
  const extras = extraLinks(activity.slug);
  const href = extras.length ? null : activityPageHref(activity.slug);
  if (!href && extras.length === 0) return null;

  if (extras.length) {
    return (
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {extras.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-2 bg-copper px-4 py-2.5 text-sm text-paper hover:bg-[#a34f27]"
          >
            {link.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Link
      href={href!}
      className="mt-8 inline-flex items-center gap-2 text-sm text-copper hover:underline"
    >
      Voir la fiche
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

function SplitActivity({
  activity,
  index,
}: {
  activity: Activity;
  index: number;
}) {
  return (
    <article
      id={activity.slug}
      className={cn(
        "scroll-mt-40 border-t border-ink/10",
        index % 2 === 0 ? "bg-paper" : "bg-paper-2",
      )}
    >
      <PoleWide className="grid gap-8 py-16 lg:grid-cols-12 lg:items-start lg:gap-16 lg:py-20">
        <header className="lg:col-span-4">
          <h2 className={cn(type.h2, "text-ink")}>{activity.name}</h2>
        </header>
        <div className="lg:col-span-8">
          <div className={cn(type.body, "max-w-4xl space-y-5 text-ink/80")}>
            {activity.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ActivityLinks activity={activity} />
        </div>
      </PoleWide>
    </article>
  );
}

export function PoleLanding({ pole }: { pole: Pole }) {
  return (
    <>
      <section className="border-b border-ink/10 bg-paper-2">
        <PoleWide className="grid items-start gap-10 py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="border-l-2 border-plan pl-5 sm:pl-6 lg:col-span-7">
            <SectionLabel>Pôle</SectionLabel>
            <h1 className="mt-3 max-w-xl text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {pole.name}
            </h1>
            <p className={cn(type.body, "mt-4 max-w-xl text-mute")}>
              {pole.description}
            </p>
          </div>
          <div className="lg:col-span-5">
            <PoleSommaire
              items={pole.activities.map(({ slug, name }) => ({ slug, name }))}
            />
          </div>
        </PoleWide>
      </section>

      {pole.activities.map((activity, index) => (
        <SplitActivity
          key={activity.slug}
          activity={activity}
          index={index}
        />
      ))}

      <section className="border-t border-ink/10 bg-paper-2">
        <PoleWide className="flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-end lg:py-20">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <p className={cn(type.h2, "mt-4 max-w-xl text-ink")}>
              Un projet en {pole.shortName} ?
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href={`/contact?subject=${encodeURIComponent(pole.name)}`}
              variant="primary"
            >
              Nous contacter
            </Button>
            <Button href="/#poles" variant="outline">
              Voir les autres pôles
            </Button>
          </div>
        </PoleWide>
      </section>
    </>
  );
}
