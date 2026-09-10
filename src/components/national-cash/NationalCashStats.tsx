"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/sections/Reveal";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { NationalCashCopy } from "@/data/national-cash";

type CashStat = NationalCashCopy["stats"][number];

function useCount(target: number, active: boolean, reduce: boolean | null) {
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }

    const duration = target > 10_000 ? 1600 : 1100;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduce, target]);

  return value;
}

function formatValue(value: number, grouped?: boolean) {
  if (grouped) return value.toLocaleString("fr-FR");
  return String(value);
}

function StatItem({
  stat,
  active,
}: {
  stat: CashStat;
  active: boolean;
}) {
  const reduce = useReducedMotion();
  const value = useCount(stat.value, active, reduce);
  const grouped = "grouped" in stat && stat.grouped;

  return (
    <article className="relative border border-plan/35 bg-ink/50 p-6 sm:p-7">
      <span className="absolute end-4 top-4 h-1.5 w-1.5 bg-copper" aria-hidden />
      <p
        className={`font-mono leading-none tracking-tight text-paper ${
          grouped
            ? "text-2xl sm:text-3xl lg:text-4xl"
            : "text-6xl sm:text-7xl lg:text-[84px]"
        }`}
      >
        {formatValue(value, grouped)}
        {stat.suffix ? <span className="text-copper">{stat.suffix}</span> : null}
      </p>
      <span className="mt-5 block h-px w-10 bg-copper" aria-hidden />
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/75">
        {stat.label}
      </p>
    </article>
  );
}

export function NationalCashStats({
  stats,
  label,
}: {
  stats: NationalCashCopy["stats"];
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Container wide className="py-16 sm:py-20">
        <SectionLabel tone="dark">{label}</SectionLabel>
        <div
          ref={ref}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <StatItem stat={stat} active={active} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
