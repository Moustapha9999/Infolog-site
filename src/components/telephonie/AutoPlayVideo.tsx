"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

type AutoPlayVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  /** Accessible label for the media */
  label: string;
};

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function AutoPlayVideo({
  src,
  poster,
  className,
  label,
}: AutoPlayVideoProps) {
  const reduceMotion = useReducedMotion();
  const isClient = useIsClient();

  // Avoid SSR/client mismatch: only apply reduced-motion after hydrate.
  const reduce = isClient && Boolean(reduceMotion);

  if (reduce) {
    if (!poster) return null;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={poster} alt={label} className={className} />
    );
  }

  return (
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
