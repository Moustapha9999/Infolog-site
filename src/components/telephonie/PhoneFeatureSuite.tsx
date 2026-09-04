import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { PhoneFeatureSuite } from "@/data/telephonie/types";

type PhoneFeatureSuiteSectionProps = {
  productName: string;
  data: PhoneFeatureSuite;
};

export function PhoneFeatureSuiteSection({
  productName,
  data,
}: PhoneFeatureSuiteSectionProps) {
  return (
    <section className="border-b border-ink/10 bg-paper py-14 sm:py-20">
      <Container className="space-y-14 sm:space-y-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl lg:text-[2.05rem] lg:leading-tight">
              {data.lead.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/75 sm:text-[17px] sm:leading-8">
              {data.lead.body}
            </p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-md">
            <Image
              src={data.lead.image}
              alt={`${productName} — ${data.lead.title}`}
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-contain object-center"
            />
          </div>
        </div>

        {data.cards.length > 0 ? (
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {data.cards.map((card) => (
              <article key={card.title} className="flex flex-col">
                <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl bg-[#D6E8F5] sm:rounded-3xl">
                  <Image
                    src={card.image}
                    alt={`${productName} — ${card.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-contain object-center p-3 sm:p-4"
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-ink/75 sm:leading-8">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
