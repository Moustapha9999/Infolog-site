"use client";

import { AutoPlayVideo } from "@/components/telephonie/AutoPlayVideo";
import { electromenagerMedia } from "@/data/electromenager";

export function ElectromenagerHeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 lg:left-[16%]">
        <AutoPlayVideo
          src={electromenagerMedia.heroVideo}
          poster={electromenagerMedia.heroPoster}
          label="Présentation électroménager Samsung"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center lg:object-[58%_center]"
        />
      </div>

      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,#101820_0%,rgba(16,24,32,0.92)_28%,rgba(16,24,32,0.55)_52%,rgba(16,24,32,0.18)_78%,rgba(16,24,32,0.28)_100%)]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,32,0.28)_0%,transparent_22%,transparent_78%,rgba(16,24,32,0.45)_100%)]"
      />

      <span className="absolute left-5 top-6 h-8 w-8 border-l border-t border-paper/25 sm:left-8" />
      <span className="absolute right-5 top-6 h-8 w-8 border-r border-t border-paper/20 sm:right-8" />
      <span className="absolute bottom-6 left-5 h-8 w-8 border-b border-l border-paper/25 sm:left-8" />
      <span className="absolute bottom-6 right-5 h-8 w-8 border-b border-r border-paper/20 sm:right-8" />
      <span className="absolute left-[16%] top-0 hidden h-full w-px bg-paper/10 lg:block" />
    </div>
  );
}
