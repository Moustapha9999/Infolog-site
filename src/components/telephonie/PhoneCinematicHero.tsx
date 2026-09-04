"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { PhoneProduct } from "@/data/telephonie/types";
import { formatPhoneMemory } from "@/data/telephonie/memory";
import { PhoneBuyDrawer } from "@/components/telephonie/PhoneBuyDrawer";

type PhoneCinematicHeroProps = {
  phone: PhoneProduct;
};

export function PhoneCinematicHero({ phone }: PhoneCinematicHeroProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (!phone.hero) return null;

  const isBanner = phone.heroLayout === "banner";
  const watermark =
    phone.name.replace(/^Galaxy\s+/i, "").split(" ").pop()?.toUpperCase() ??
    "ULTRA";

  return (
    <>
      {isBanner ? (
        <section className="relative isolate overflow-hidden bg-[#F5F5F7] text-ink">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element -- fond HQ sans recompression Next */}
            <img
              src={`${phone.hero}?v=2`}
              alt=""
              aria-hidden
              decoding="async"
              fetchPriority="high"
              className="mx-auto block h-auto max-h-[80vh] w-auto max-w-full object-contain"
            />
            <h1 className="sr-only">{phone.name}</h1>
            <Container className="pointer-events-none absolute inset-x-0 top-0 pt-10 text-center sm:pt-14">
              <p className="pointer-events-auto font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                <Link href="/telephonie" className="hover:text-plan">
                  Téléphonie
                </Link>
                <span className="mx-2 opacity-50">/</span>
                {phone.name}
              </p>
            </Container>
          </div>

          <Container className="flex flex-col items-center gap-5 py-8 text-center sm:gap-6 sm:py-10">
            {phone.heroTagline ? (
              <p className="max-w-xl text-base text-ink/80 sm:text-lg">
                {phone.heroTagline}
              </p>
            ) : null}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-ink px-8 py-3 text-sm font-medium text-paper shadow-[0_8px_24px_rgba(16,24,32,0.18)] transition-colors hover:bg-ink/90"
            >
              Acheter
            </button>
          </Container>
        </section>
      ) : (
        <section className="relative isolate min-h-[78vh] overflow-hidden bg-[#4A3A5C] text-paper sm:min-h-[85vh]">
          <Image
            src={phone.hero}
            alt={phone.imageAlt}
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,32,0.35)_0%,rgba(16,24,32,0.15)_40%,rgba(16,24,32,0.55)_100%)]"
            aria-hidden
          />
          <p
            className="pointer-events-none absolute inset-x-0 top-[38%] text-center text-[18vw] font-medium leading-none tracking-tight text-paper/[0.08] blur-[1px] sm:top-[34%] sm:text-[14vw]"
            aria-hidden
          >
            {watermark}
          </p>

          <Container className="relative flex min-h-[78vh] flex-col items-center justify-start pt-16 text-center sm:min-h-[85vh] sm:pt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70">
              <Link href="/telephonie" className="hover:text-paper">
                Téléphonie
              </Link>
              <span className="mx-2 opacity-50">/</span>
              {phone.name}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-medium tracking-tight text-paper sm:text-5xl lg:text-6xl">
              {phone.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-base text-paper/85 sm:text-lg">
              <span>Galaxy AI</span>
              <span className="text-[#7EB6FF]" aria-hidden>
                ✦ ✦
              </span>
            </p>
            {formatPhoneMemory(phone) ? (
              <p className="mt-3 font-mono text-xs tracking-wide text-paper/65">
                {formatPhoneMemory(phone)}
              </p>
            ) : null}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center justify-center rounded-full border border-paper/50 bg-transparent px-8 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
              >
                Acheter
              </button>
            </div>
          </Container>
        </section>
      )}

      <PhoneBuyDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        name={phone.name}
        ram={phone.ram ?? []}
        storage={phone.storage ?? []}
        colors={phone.colors ?? []}
      />
    </>
  );
}
