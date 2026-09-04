import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PhoneMediaGallery } from "@/components/telephonie/PhoneMediaGallery";
import { PhoneCarousel } from "@/components/telephonie/PhoneCarousel";
import { PhoneCinematicHero } from "@/components/telephonie/PhoneCinematicHero";
import { PhoneStoryCarousel } from "@/components/telephonie/PhoneStoryCarousel";
import { PhoneDesignFeature } from "@/components/telephonie/PhoneDesignFeature";
import { PhonePerformanceSection } from "@/components/telephonie/PhonePerformanceSection";
import { PhoneBatterySection } from "@/components/telephonie/PhoneBatterySection";
import { PhoneColorPicker } from "@/components/telephonie/PhoneColorPicker";
import { PhoneFeatureHighlightSection } from "@/components/telephonie/PhoneFeatureHighlight";
import { PhoneFeatureSuiteSection } from "@/components/telephonie/PhoneFeatureSuite";
import { PhoneKeyPointsSection } from "@/components/telephonie/PhoneKeyPointsSection";
import {
  categoryLabel,
  formatPhoneMemory,
  getPhoneById,
  getPhoneGallery,
  phones,
} from "@/data/telephonie";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return phones.map((phone) => ({ slug: phone.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const phone = getPhoneById(slug);
  if (!phone) return { title: "Produit" };
  return {
    title: phone.name,
    description:
      phone.description ??
      phone.tagline ??
      `${phone.name} — disponible chez INFOLOG. ${phone.variants.join(" · ")}`,
  };
}

export default async function PhoneProductPage({ params }: PageProps) {
  const { slug } = await params;
  const phone = getPhoneById(slug);
  if (!phone) notFound();

  const gallery = getPhoneGallery(phone).filter((src) => src !== phone.hero);
  const storyVideos = (phone.storyVideos ?? []).filter(
    (src) => !src.includes("/video-6."),
  );
  const design = phone.design;
  const designVideo =
    phone.designVideo ??
    (design
      ? `/brand/telephonie/products/${phone.id}/video-6.webm`
      : undefined);
  const related = phones.filter((item) => item.id !== phone.id).slice(0, 8);
  const hasHero = Boolean(phone.hero);

  return (
    <>
      {hasHero ? (
        <PhoneCinematicHero phone={phone} />
      ) : (
        <section className="border-b border-ink/10 bg-paper-2/40 py-4">
          <Container className="flex flex-wrap items-center gap-2 text-sm text-mute">
            <Link href="/telephonie" className="hover:text-plan">
              Téléphonie
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink">{phone.name}</span>
          </Container>
        </section>
      )}

      {phone.media ? (
        <section className="border-b border-ink/10 bg-ink py-16 sm:py-20">
          <Container className="mx-auto max-w-3xl text-center">
            {phone.description ? (
              <p className="text-base leading-8 text-paper/85 sm:text-lg sm:leading-9">
                {phone.description}
              </p>
            ) : null}
            <h2 className="mt-12 text-2xl font-medium tracking-tight text-paper sm:text-3xl">
              {phone.media.title}
            </h2>
            <blockquote className="mt-6 text-base leading-8 text-paper/80 sm:text-lg sm:leading-9">
              <p>« {phone.media.quote} »</p>
              {phone.media.source ? (
                <footer className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-paper/55">
                  {phone.media.source}
                </footer>
              ) : null}
            </blockquote>
          </Container>
        </section>
      ) : phone.description &&
        hasHero &&
        !phone.designIntro &&
        !phone.keyPoints ? (
        <section className="border-b border-ink/10 bg-ink py-16 sm:py-20">
          <Container className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-8 text-paper/85 sm:text-lg sm:leading-9">
              {phone.description}
            </p>
          </Container>
        </section>
      ) : null}

      {phone.keyPoints ? (
        <PhoneKeyPointsSection
          productName={phone.name}
          data={phone.keyPoints}
        />
      ) : null}

      {phone.designIntro ? (
        <section className="border-b border-ink/10 bg-paper py-14 sm:py-16">
          <Container className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl lg:text-[2.1rem]">
              {phone.designIntro.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-ink/75 sm:text-lg sm:leading-9">
              {phone.designIntro.body}
            </p>
          </Container>
        </section>
      ) : null}

      {storyVideos.length > 0 ? (
        <PhoneStoryCarousel
          productName={phone.name}
          heading={phone.storyHeading || undefined}
          slides={storyVideos.map((src, i) => ({
            src,
            caption: phone.storyCaptions?.[i],
          }))}
        />
      ) : null}

      {phone.colors && phone.colors.some((c) => c.image) ? (
        <PhoneColorPicker productName={phone.name} colors={phone.colors} />
      ) : null}

      {phone.featureHighlight ? (
        <PhoneFeatureHighlightSection
          productName={phone.name}
          data={phone.featureHighlight}
        />
      ) : null}

      {phone.featureSuite ? (
        <PhoneFeatureSuiteSection
          productName={phone.name}
          data={phone.featureSuite}
        />
      ) : null}

      {design && designVideo ? (
        <PhoneDesignFeature
          productName={phone.name}
          label={design.label}
          title={design.title}
          videoSrc={designVideo}
        />
      ) : null}

      {phone.performance ? (
        <PhonePerformanceSection
          label={phone.performance.label}
          title={phone.performance.title}
          body={phone.performance.body}
          footnote={phone.performance.footnote}
          stats={phone.performance.stats}
        />
      ) : null}

      {phone.battery ? <PhoneBatterySection data={phone.battery} /> : null}

      <section className="border-b border-ink/10 bg-paper py-12 sm:py-16">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <PhoneMediaGallery
              name={phone.name}
              images={gallery}
              videos={[]}
            />

            <div>
              <SectionLabel>Samsung Galaxy</SectionLabel>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-plan">
                {categoryLabel[phone.category]}
              </p>
              <h2 className="mt-2 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                {hasHero ? "Présentation" : phone.name}
              </h2>
              {phone.tagline ? (
                <p className="mt-3 text-lg text-ink/80">{phone.tagline}</p>
              ) : null}
              {!hasHero ? (
                <p className="mt-3 font-mono text-sm tracking-wide text-mute">
                  {formatPhoneMemory(phone)}
                </p>
              ) : null}

              {phone.description && !phone.media && !hasHero ? (
                <p className="mt-6 text-base leading-7 text-ink/80 sm:text-[17px] sm:leading-8">
                  {phone.description}
                </p>
              ) : null}

              {phone.highlights.length > 0 ? (
                <ul className="mt-8 space-y-3 text-base leading-7 text-ink/80">
                  {phone.highlights.map((item) => (
                    <li key={item.slice(0, 48)} className="flex gap-3">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-copper"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={`/contact?subject=${encodeURIComponent(`Demande de modèle — ${phone.name}`)}`}
                >
                  Demander ce modèle
                </Button>
                <Button href="/telephonie#catalogue" variant="outline">
                  Retour au catalogue
                </Button>
              </div>
            </div>
          </div>

          {(phone.specs.length > 0 ||
            (phone.cameras && phone.cameras.length > 0)) && (
            <div className="mt-14 border-t border-ink/10 pt-12">
              <div className="mx-auto max-w-2xl text-center">
                <div className="flex justify-center">
                  <SectionLabel>Caractéristiques</SectionLabel>
                </div>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  Fiche technique
                </h3>
              </div>

              {phone.specs.length > 0 ? (
                <dl className="mx-auto mt-10 grid max-w-4xl gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
                  {phone.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="bg-paper px-5 py-4 sm:px-6 sm:py-5"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
                        {spec.label}
                      </dt>
                      <dd className="mt-1.5 text-base text-ink">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {phone.cameras && phone.cameras.length > 0 ? (
                <div className="mx-auto mt-8 max-w-4xl border border-ink/10 bg-paper p-5 sm:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
                    Caméra principale
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-6 text-ink/80 sm:text-base">
                    {phone.cameras.map((cam) => (
                      <li key={cam}>{cam}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          )}
        </Container>
      </section>
      <section className="border-b border-ink/10 bg-paper py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Catalogue</SectionLabel>
            </div>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Autres modèles
            </h2>
          </div>
          <PhoneCarousel phones={related} />
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl border border-ink/10 bg-ink px-6 py-12 text-center sm:px-10 sm:py-14">
            <h2 className="text-2xl font-medium tracking-tight text-paper sm:text-3xl">
              Intéressé par le {phone.name} ?
            </h2>
            <p className="mt-3 text-base leading-7 text-paper/70">
              Contactez INFOLOG pour la disponibilité, les configurations et un
              devis.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href={`/contact?subject=${encodeURIComponent(`Intéressé — ${phone.name}`)}`}
              >
                Contact
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
