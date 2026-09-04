"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { PhoneKeyPoints } from "@/data/telephonie/types";

type PhoneKeyPointsSectionProps = {
  productName: string;
  data: PhoneKeyPoints;
};

export function PhoneKeyPointsSection({
  productName,
  data,
}: PhoneKeyPointsSectionProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      el.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [updateScroll, data.slides.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-keypoint-card]");
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="border-b border-ink/10 bg-paper py-14 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-[2.25rem] lg:leading-tight">
            {data.title}
          </h2>
          <p className="mt-5 text-base font-normal leading-8 text-ink/70 sm:text-lg sm:leading-9">
            {data.body}
          </p>
          <h3 className="mt-12 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {data.heading}
          </h3>
        </div>
      </Container>

      <div className="relative mt-10">
        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[4vw] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 sm:px-[8vw] lg:px-[10vw] [&::-webkit-scrollbar]:hidden"
        >
          {data.slides.map((slide) => (
            <li
              key={slide.image}
              data-keypoint-card
              className="w-[min(82vw,420px)] shrink-0 snap-center"
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-paper-2 sm:rounded-3xl">
                <Image
                  src={slide.image}
                  alt={`${productName} — ${slide.caption}`}
                  fill
                  sizes="(max-width: 768px) 82vw, 420px"
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-4 text-center text-sm leading-6 text-ink/80 sm:text-base sm:leading-7">
                {slide.caption}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Image précédente"
            className="grid h-10 w-10 place-items-center border border-ink/15 text-ink transition-colors hover:border-ink/40 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Image suivante"
            className="grid h-10 w-10 place-items-center border border-ink/15 text-ink transition-colors hover:border-ink/40 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
