"use client";

import { AutoPlayVideo } from "@/components/telephonie/AutoPlayVideo";

type PhoneDesignFeatureProps = {
  label: string;
  title: string;
  videoSrc: string;
  productName: string;
};

export function PhoneDesignFeature({
  label,
  title,
  videoSrc,
  productName,
}: PhoneDesignFeatureProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-[#0a0a0c] py-16 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_58%,rgba(92,42,130,0.55)_0%,rgba(10,10,12,0)_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_50%_40%,rgba(40,20,70,0.35)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="text-[13px] font-semibold uppercase tracking-[0.32em] text-[#4A9EFF] sm:text-sm">
          {label}
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-[1.85rem] font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.15]">
          {title}
        </h2>

        <div className="relative mx-auto mt-12 w-full max-w-[820px] sm:mt-14">
          <AutoPlayVideo
            src={videoSrc}
            label={`${productName} — ${label}`}
            className="mx-auto block h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>
    </section>
  );
}
