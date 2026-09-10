import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/Button";
import { AutoPlayVideo } from "@/components/telephonie/AutoPlayVideo";
import { DataCenterAtouts } from "@/components/data-center/DataCenterAtouts";
import { DataCenterSolution } from "@/components/data-center/DataCenterSolution";
import { dataCenterMedia, getDataCenter } from "@/data/data-center";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getLocale();
  const dataCenter = getDataCenter(locale);
  return buildLocaleMetadata({
    locale,
    title: dataCenter.title,
    description: dataCenter.description,
    path: "/data-center",
  });
}

export default async function DataCenterPage() {
  const locale = await getLocale();
  const dataCenter = getDataCenter(locale);
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink/10">
        <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[420px]">
          <Image
            src={dataCenterMedia.heroPoster}
            alt="Allée de baies serveurs dans un data center"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,32,0.4)_0%,rgba(16,24,32,0.62)_100%)]"
            aria-hidden
          />
          <Container className="relative flex min-h-[260px] items-center justify-center py-16 sm:min-h-[340px] lg:min-h-[420px]">
            <h1 className={cn(type.h1, "text-paper")}>
              {dataCenter.title}
            </h1>
          </Container>
        </div>
      </section>

      <Container className="py-16 lg:py-20">
        <SectionLabel>Services informatiques</SectionLabel>
        <h2 className={cn(type.h2, "mt-4 max-w-3xl text-ink")}>
          {dataCenter.title}
        </h2>
        <div className={cn(type.body, "mt-6 space-y-4 text-ink/80")}>
          {dataCenter.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/contact">Nous contacter</Button>
        </div>
      </Container>

      <DataCenterAtouts />

      <DataCenterSolution />

      <section className="border-b border-ink/10 bg-paper py-16 sm:py-20">
        <Container>
          <div className="relative aspect-video overflow-hidden border border-ink/10 bg-ink shadow-[0_18px_40px_rgba(16,24,32,0.1)]">
            <AutoPlayVideo
              src={dataCenterMedia.galleryVideo}
              poster={dataCenterMedia.galleryPoster}
              label="Visite data center"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/10 bg-paper-2/50 py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>{dataCenter.partnersTitle}</SectionLabel>
            </div>
            <p className={cn(type.body, "mt-3 text-mute")}>
              Technologies et constructeurs avec lesquels nous travaillons.
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {dataCenter.partners.map((partner) => (
              <li
                key={partner.name}
                className="flex h-44 items-center justify-center border border-ink/10 bg-paper px-5 py-8 sm:h-48"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-24 w-auto max-w-[95%] object-contain sm:h-28"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
