import { Container } from "@/components/ui/Container";
import type { PhoneBatterySection as BatteryData } from "@/data/telephonie/types";

export function PhoneBatterySection({ data }: { data: BatteryData }) {
  return (
    <section className="border-b border-ink/10 bg-paper py-14 sm:py-18 lg:py-20">
      <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#4A9EFF]">
            {data.label ?? "BATTERIE"}
          </p>
          <h2 className="mt-4 whitespace-pre-line text-[1.85rem] font-bold leading-tight tracking-tight text-ink sm:text-3xl lg:text-[2.25rem]">
            {data.title}
          </h2>
          <p
            className="mt-5 max-w-lg text-base leading-relaxed text-ink/65"
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          <div>
            <p className="text-sm font-medium text-ink/65">
              {data.capacityLabel ?? "Capacité de la batterie"}
            </p>
            <p className="mt-1 text-[3.5rem] font-bold leading-none tracking-tight text-[#A78BFA] sm:text-[4rem]">
              {data.capacityValue}{" "}
              <span className="text-[1.75rem] font-semibold text-ink/80 sm:text-[2rem]">
                {data.capacityUnit}
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-ink/65">
              {data.playbackLabel ?? "Lecture vidéo"}
            </p>
            {data.playbackPrefix ? (
              <p className="mt-0.5 text-xs text-ink/45">{data.playbackPrefix}</p>
            ) : null}
            <p className="mt-1 text-[3.5rem] font-bold leading-none tracking-tight text-[#A78BFA] sm:text-[4rem]">
              {data.playbackValue}{" "}
              <span className="text-[1.75rem] font-semibold text-ink/80 sm:text-[2rem]">
                {data.playbackUnit}
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
