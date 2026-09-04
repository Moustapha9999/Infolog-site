"use client";

import { useState } from "react";
import Image from "next/image";
import { AutoPlayVideo } from "@/components/telephonie/AutoPlayVideo";

type PhoneMediaGalleryProps = {
  name: string;
  images: string[];
  videos: string[];
};

export function PhoneMediaGallery({
  name,
  images,
  videos,
}: PhoneMediaGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const mainImage = images[activeImage] ?? images[0];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] overflow-hidden border border-ink/10 bg-[#F3F5F7]">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,24,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        {mainImage ? (
          <Image
            src={mainImage}
            alt={`${name} — vue ${activeImage + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-contain p-6 sm:p-10"
          />
        ) : (
          <div className="grid h-full place-items-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
              Visuel à venir
            </span>
          </div>
        )}
      </div>

      {images.length > 1 ? (
        <ul className="grid grid-cols-4 gap-2 sm:grid-cols-5">
          {images.map((src, index) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Voir la photo ${index + 1}`}
                aria-pressed={activeImage === index}
                className={`relative aspect-square w-full overflow-hidden border bg-[#F3F5F7] transition-colors ${
                  activeImage === index
                    ? "border-copper"
                    : "border-ink/10 hover:border-plan/40"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-contain p-1.5"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {videos.length > 0 ? (
        <div className="space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-plan">
            Vidéo
          </p>
          {videos.map((src, index) => (
            <div
              key={src}
              className="relative aspect-video overflow-hidden border border-ink/10 bg-ink"
            >
              <AutoPlayVideo
                src={src}
                poster={mainImage}
                label={`Vidéo ${name}${videos.length > 1 ? ` ${index + 1}` : ""}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
