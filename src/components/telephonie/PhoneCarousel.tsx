"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import type { PhoneProduct } from "@/data/telephonie/types";
import { categoryLabel } from "@/data/telephonie/constants";
import { formatPhoneMemory } from "@/data/telephonie/memory";

export function PhoneCarousel({ phones }: { phones: PhoneProduct[] }) {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const left = el.scrollLeft;
    setCanPrev(left > 8);
    setCanNext(left < max - 8);
    setProgress(max > 0 ? left / max : 0);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, phones.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-phone-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.7;
    el.scrollBy({
      left: direction * amount,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    }
  };

  return (
    <div className="mt-12" onKeyDown={onKeyDown}>
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-paper-2/90 to-transparent sm:w-12"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-paper-2/90 to-transparent sm:w-12"
          aria-hidden
        />

        <ul
          ref={trackRef}
          tabIndex={0}
          aria-label="Catalogue Galaxy — faire défiler horizontalement"
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plan [&::-webkit-scrollbar]:hidden"
        >
          {phones.map((phone) => (
            <li
              key={phone.id}
              data-phone-card
              className="w-[min(78vw,280px)] shrink-0 snap-start sm:w-[260px] lg:w-[280px]"
            >
              <Link
                href={`/telephonie/${phone.id}`}
                className="group flex h-full flex-col border border-ink/10 bg-paper transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-plan/40 hover:shadow-[0_18px_40px_rgba(16,24,32,0.1)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F3F5F7]">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(16,24,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.04) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                    aria-hidden
                  />
                  <span className="absolute left-3 top-3 z-10 border border-ink/10 bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-plan backdrop-blur-sm">
                    {phone.isNew ? "Nouveau" : categoryLabel[phone.category]}
                  </span>
                  {phone.image ? (
                    <Image
                      src={phone.image}
                      alt={phone.imageAlt}
                      fill
                      sizes="280px"
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.05] sm:p-8"
                    />
                  ) : (
                    <div className="grid h-full place-items-center px-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
                        Visuel à venir
                      </span>
                    </div>
                  )}
                  <div
                    className="pointer-events-none absolute inset-x-6 bottom-4 h-8 bg-[radial-gradient(ellipse_at_center,rgba(16,24,32,0.14)_0%,transparent_70%)] opacity-70"
                    aria-hidden
                  />
                </div>

                <div className="flex flex-1 flex-col border-t border-ink/10 px-4 py-4 text-left">
                  <h3 className="text-base font-medium tracking-tight text-ink">
                    {phone.name}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-mute">
                    Fiche d&apos;information sur le produit
                  </p>
                  <p className="mt-2 font-mono text-[11px] tracking-wide text-ink/70">
                    {formatPhoneMemory(phone)}
                  </p>
                  {phone.priceLabel ? (
                    <p className="mt-1 font-mono text-[12px] text-ink">
                      {phone.compareLabel ? (
                        <span className="mr-2 text-mute line-through">
                          {phone.compareLabel}
                        </span>
                      ) : null}
                      {phone.priceLabel}
                    </p>
                  ) : null}
                  <span className="mt-4 inline-flex w-fit items-center gap-2 border-b border-copper pb-0.5 text-sm font-medium text-copper transition-colors group-hover:border-ink group-hover:text-ink">
                    Découvrir
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center gap-4 sm:gap-6">
        <div
          className="relative h-[2px] flex-1 overflow-hidden bg-ink/10"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          aria-label="Progression du carrousel"
        >
          <div
            className="absolute inset-y-0 h-full w-[22%] bg-ink transition-[left] duration-300 ease-out"
            style={{ left: `${progress * 78}%` }}
          />
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Défiler vers la gauche"
            className="grid h-11 w-11 place-items-center border border-ink/20 bg-paper text-ink transition-colors hover:border-plan hover:text-plan disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Défiler vers la droite"
            className="grid h-11 w-11 place-items-center border border-ink/20 bg-paper text-ink transition-colors hover:border-plan hover:text-plan disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
}
