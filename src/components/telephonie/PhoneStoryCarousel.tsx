"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
} from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";

export type StorySlide = {
  src: string;
  caption?: string;
};

type PhoneStoryCarouselProps = {
  slides: StorySlide[];
  productName: string;
  /** Titre fixe — ne défile pas avec les vidéos */
  heading?: string;
};

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function PhoneStoryCarousel({
  slides,
  productName,
  heading,
}: PhoneStoryCarouselProps) {
  const reduceMotion = useReducedMotion();
  const mounted = useIsClient();
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const goTo = useCallback(
    (next: number) => {
      const bounded = (next + slides.length) % slides.length;
      setIndex(bounded);
      setProgress(0);
    },
    [slides.length],
  );

  const singleSlide = slides.length <= 1;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;
      setProgress(video.currentTime / video.duration);
    };
    const onEnded = () => {
      if (singleSlide) {
        setProgress(0);
        return;
      }
      goTo(index + 1);
    };

    video.addEventListener("timeupdate", onTime);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("ended", onEnded);
    };
  }, [goTo, index, singleSlide]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !mounted) return;
    if (reduceMotion || paused) {
      video.pause();
      return;
    }
    void video.play().catch(() => undefined);
  }, [index, mounted, paused, reduceMotion, slides]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(`[data-story-index="${index}"]`);
    if (!card) return;
    const left = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({
      left,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [index, reduceMotion]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  if (slides.length === 0) return null;

  const activeCaption = slides[index]?.caption;

  return (
    <section className="overflow-hidden border-b border-ink/10 bg-black py-12 sm:py-16">
      <div className="relative w-full" onKeyDown={onKeyDown}>
        {(heading || activeCaption) && (
          <div className="mx-auto mb-8 max-w-[1100px] px-[4vw] text-center sm:mb-10 sm:px-[8vw] lg:px-[10vw]">
            {heading ? (
              <h2 className="text-2xl font-medium tracking-tight text-[#4A9EFF] sm:text-3xl lg:text-[2.35rem]">
                {heading}
              </h2>
            ) : null}
            {activeCaption ? (
              <p
                key={index}
                className="mx-auto mt-4 max-w-3xl text-xl leading-snug text-white/85 sm:text-2xl lg:text-[1.75rem] lg:leading-snug"
              >
                {activeCaption}
              </p>
            ) : null}
          </div>
        )}

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-[4vw] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 sm:px-[8vw] lg:px-[10vw] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => {
            const isActive = i === index;
            return (
              <div
                key={slide.src}
                data-story-index={i}
                role="group"
                aria-label={`${productName} — story ${i + 1}`}
                className={`relative aspect-[16/9] w-[min(92vw,1100px)] shrink-0 snap-center overflow-hidden rounded-2xl transition-[opacity,transform] duration-500 sm:rounded-3xl ${
                  isActive
                    ? "z-10 scale-100 opacity-100"
                    : "scale-[0.98] opacity-35"
                }`}
              >
                <button
                  type="button"
                  className="absolute inset-0 z-10"
                  onClick={() => goTo(i)}
                  aria-label={`Afficher la story ${i + 1}`}
                  aria-current={isActive}
                />
                {isActive ? (
                  <>
                    <div className="pointer-events-none absolute inset-x-4 top-3 z-20 flex gap-1.5 sm:inset-x-5 sm:top-4">
                      {slides.map((_, seg) => (
                        <div
                          key={seg}
                          className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25"
                        >
                          <div
                            className="h-full rounded-full bg-white transition-[width] duration-100 ease-linear"
                            style={{
                              width:
                                seg < index
                                  ? "100%"
                                  : seg === index
                                    ? `${Math.max(progress * 100, 2)}%`
                                    : "0%",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <video
                      ref={videoRef}
                      key={slide.src}
                      src={slide.src}
                      className="absolute inset-0 h-full w-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      loop={singleSlide}
                    />
                  </>
                ) : (
                  <video
                    src={slide.src}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 px-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Story précédente"
            className="grid h-10 w-10 place-items-center border border-white/20 text-white transition-colors hover:border-white/50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-2"
            role="tablist"
            aria-label="Navigation des stories"
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all ${
                  i === index
                    ? "h-2 w-6 bg-white"
                    : "h-2 w-2 bg-white/35 hover:bg-white/60"
                }`}
                aria-label={`Aller à la story ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Story suivante"
            className="grid h-10 w-10 place-items-center border border-white/20 text-white transition-colors hover:border-white/50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? "Lecture" : "Pause"}
            className="ml-1 grid h-10 w-10 place-items-center border border-white/20 text-white transition-colors hover:border-white/50"
          >
            {paused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
