import { partners } from "@/data/partners";
import { Container } from "@/components/ui/Container";

export function Partners() {
  const row = [...partners, ...partners];

  return (
    <section className="overflow-hidden border-y border-ink/10 bg-paper-2 py-14">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
          05 — Partenaires cités
        </p>
        <p className="mt-2 max-w-2xl text-sm text-mute">
          Marques mentionnées sur le site actuel. Les logos officiels seront
          intégrés dès qu&apos;INFOLOG les aura fournis.
        </p>
      </Container>
      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-paper-2 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-paper-2 to-transparent" />
        <div className="partners-track flex w-max gap-0">
          {row.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="border-y border-r border-ink/10 px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-ink/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
