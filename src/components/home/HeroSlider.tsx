"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { NetworkGraph } from "@/components/home/NetworkGraph";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HomeHeroSlide } from "@/data/home-hero-slides";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

const WELCOME = -1;

function isChromeTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest("a, button"));
}

export function HeroSlider({
  title,
  lead,
  slides,
  welcomeMs,
  intervalMs,
}: {
  title: string;
  lead: string;
  slides: HomeHeroSlide[];
  welcomeMs: number;
  intervalMs: number;
}) {
  const reduce = useReducedMotion();
  const dictionary = useDictionary();
  const home = dictionary.home;
  const [index, setIndex] = useState(WELCOME);
  const pointerX = useRef<number | null>(null);

  const count = slides.length;
  const isWelcome = index === WELCOME;
  const slide = (!isWelcome && slides[index]) || slides[0];
  const dwell = isWelcome ? welcomeMs : intervalMs;

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      const total = count + 1;
      const shifted = (((next + 1) % total) + total) % total;
      setIndex(shifted - 1);
    },
    [count],
  );

  useEffect(() => {
    if (count === 0) return;
    const id = window.setTimeout(() => {
      if (document.hidden) return;
      goTo(index + 1);
    }, dwell);
    return () => window.clearTimeout(id);
  }, [count, dwell, goTo, index]);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      setIndex(WELCOME);
    }
    if (event.key === "End") {
      event.preventDefault();
      setIndex(count - 1);
    }
  };

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (isChromeTarget(event.target)) return;
    pointerX.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (pointerX.current == null) return;
    const delta = event.clientX - pointerX.current;
    pointerX.current = null;
    if (isChromeTarget(event.target)) return;
    if (Math.abs(delta) < 56) return;
    goTo(delta > 0 ? index - 1 : index + 1);
  };

  if (!slide) return null;

  const productRight = !isWelcome && slide.imageLayout === "right";

  return (
    <section
      role="region"
      aria-roledescription="carrousel"
      aria-label={home.heroAriaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        pointerX.current = null;
      }}
      className="relative isolate overflow-hidden bg-ink text-paper outline-none"
    >
      <div
        className={cn(
          "absolute inset-0",
          reduce ? "duration-0" : "transition-opacity duration-300 ease-out",
          isWelcome ? "opacity-0" : "opacity-100",
        )}
        aria-hidden={isWelcome}
      >
        {slides.map((item, itemIndex) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0",
              reduce ? "duration-0" : "transition-opacity duration-300 ease-out",
              !isWelcome && itemIndex === index ? "opacity-100" : "opacity-0",
            )}
          >
            <div
              className={cn(
                "absolute",
                item.imageLayout === "right"
                  ? "inset-y-0 end-0 w-[72%] sm:w-[64%] lg:w-[56%]"
                  : "inset-0",
              )}
            >
              <Image
                src={item.image}
                alt=""
                fill
                priority={itemIndex === 0}
                quality={90}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className={
                  item.imageLayout === "right"
                    ? "object-cover object-right"
                    : "object-cover"
                }
                style={{ objectPosition: item.objectPosition ?? "center" }}
              />
            </div>
          </div>
        ))}
        <div
          className={cn(
            "absolute inset-0",
            productRight
              ? "bg-[linear-gradient(90deg,#101820_0%,#101820_28%,rgba(16,24,32,0.82)_38%,rgba(16,24,32,0.28)_52%,transparent_68%)]"
              : "bg-[linear-gradient(90deg,#101820_0%,rgba(16,24,32,0.9)_26%,rgba(16,24,32,0.5)_50%,rgba(16,24,32,0.18)_76%,rgba(16,24,32,0.32)_100%)]",
          )}
        />
        {productRight ? null : (
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,32,0.28)_0%,transparent_28%,transparent_72%,rgba(16,24,32,0.45)_100%)]" />
        )}
      </div>

      <div
        className={cn(
          reduce ? "duration-0" : "transition-opacity duration-300 ease-out",
          isWelcome
            ? "relative opacity-100"
            : "pointer-events-none absolute inset-0 opacity-0",
        )}
        aria-hidden={!isWelcome}
      >
        <Container
          wide
          className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20"
        >
          <div className="flex flex-col justify-center lg:col-span-5">
            <h1 className={cn(type.h2, "max-w-[22ch] text-balance text-paper")}>
              {title}
            </h1>
            <p
              className={cn(
                type.body,
                "mt-5 max-w-[36rem] text-pretty text-paper/75",
              )}
            >
              {lead}
            </p>
            <div className="mt-7">
              <Button href="#poles" variant="primary">
                {home.heroDiscoverSolutions}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative flex items-center lg:col-span-7">
            <div className="relative aspect-[430/270] w-full">
              <NetworkGraph />
              <div className="pointer-events-none absolute start-[7%] top-[11%] font-mono text-[9px] uppercase tracking-[0.28em] text-paper/55">
                {home.heroNetworkLabel}
              </div>
              <div className="pointer-events-none absolute bottom-[11%] start-[7%] font-mono text-[9px] uppercase tracking-[0.22em] text-paper/50">
                {home.heroNetworkDomains}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        className={cn(
          reduce ? "duration-0" : "transition-opacity duration-300 ease-out",
          isWelcome
            ? "pointer-events-none absolute inset-0 opacity-0"
            : "relative opacity-100",
        )}
        aria-hidden={isWelcome}
      >
        <Container
          wide
          className="flex min-h-[22rem] items-center py-16 sm:min-h-[28rem] lg:min-h-[32rem] lg:py-20"
        >
          <div className="max-w-xl lg:max-w-2xl">
            <p
              className={cn(type.h1, "text-balance text-paper")}
              aria-live={isWelcome ? "off" : "polite"}
            >
              {slide.title}
            </p>
            <p
              className={cn(
                type.body,
                "mt-4 max-w-[36rem] text-pretty text-paper/75",
              )}
            >
              {slide.lead}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={slide.href} variant="primary">
                {slide.ctaLabel ?? `${home.heroDiscoverPrefix} ${slide.title}`}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#poles" variant="secondary">
                {home.heroAllSolutions}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
