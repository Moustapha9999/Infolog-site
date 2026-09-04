"use client";

import { AutoPlayVideo } from "@/components/telephonie/AutoPlayVideo";
import { telephonieMedia } from "@/data/telephonie/constants";

export function TelephonieHeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 lg:left-[16%]">
        <AutoPlayVideo
          src={telephonieMedia.heroVideo}
          poster={telephonieMedia.heroPoster}
          label="Présentation Galaxy"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center lg:object-[62%_center]"
        />
      </div>

      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,#101820_0%,rgba(16,24,32,0.92)_28%,rgba(16,24,32,0.55)_52%,rgba(16,24,32,0.18)_78%,rgba(16,24,32,0.28)_100%)]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,32,0.28)_0%,transparent_22%,transparent_78%,rgba(16,24,32,0.45)_100%)]"
      />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,241,244,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(238,241,244,0.18) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <span className="absolute left-5 top-6 h-8 w-8 border-l border-t border-paper/25 sm:left-8" />
      <span className="absolute right-5 top-6 h-8 w-8 border-r border-t border-paper/20 sm:right-8" />
      <span className="absolute bottom-6 left-5 h-8 w-8 border-b border-l border-paper/25 sm:left-8" />
      <span className="absolute bottom-6 right-5 h-8 w-8 border-b border-r border-paper/20 sm:right-8" />
      <span className="absolute left-[16%] top-0 hidden h-full w-px bg-paper/10 lg:block" />
    </div>
  );
}
