import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { PhoneFeatureHighlight } from "@/data/telephonie/types";

type PhoneFeatureHighlightSectionProps = {
  productName: string;
  data: PhoneFeatureHighlight;
};

export function PhoneFeatureHighlightSection({
  productName,
  data,
}: PhoneFeatureHighlightSectionProps) {
  return (
    <section className="border-b border-ink/10 bg-paper py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl lg:text-[2.15rem] lg:leading-tight">
              {data.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/75 sm:text-lg sm:leading-9">
              {data.body}
            </p>
            {data.footnote ? (
              <p className="mt-4 font-mono text-[11px] leading-5 text-mute">
                {data.footnote}
              </p>
            ) : null}
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
            <Image
              src={data.image}
              alt={`${productName} — ${data.title}`}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
