"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { PhoneColor } from "@/data/telephonie/types";

type PhoneColorPickerProps = {
  productName: string;
  colors: PhoneColor[];
};

export function PhoneColorPicker({
  productName,
  colors,
}: PhoneColorPickerProps) {
  const withImages = useMemo(
    () => colors.filter((color) => Boolean(color.image)),
    [colors],
  );
  const initial =
    colors.findIndex((color) => Boolean(color.image)) >= 0
      ? colors.findIndex((color) => Boolean(color.image))
      : 0;
  const [selected, setSelected] = useState(Math.max(0, initial));

  if (colors.length === 0) return null;

  const active = colors[selected] ?? colors[0];
  const imageSrc =
    active?.image ?? withImages[0]?.image ?? colors.find((c) => c.image)?.image;

  return (
    <section className="border-b border-ink/10 bg-paper py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-14">
          <div role="listbox" aria-label={`Coloris ${productName}`}>
            <ul className="space-y-4 sm:space-y-5">
              {colors.map((color, index) => {
                const isActive = index === selected;
                return (
                  <li key={color.name}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onClick={() => setSelected(index)}
                      className={`text-left text-2xl tracking-tight transition-colors sm:text-3xl ${
                        isActive
                          ? "font-semibold text-ink"
                          : "font-normal text-ink/40 hover:text-ink/70"
                      }`}
                    >
                      {color.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative aspect-[6/5] overflow-hidden rounded-2xl bg-[#E8EAED] sm:rounded-3xl">
            {imageSrc ? (
              <Image
                key={imageSrc + active.name}
                src={imageSrc}
                alt={`${productName} — ${active.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-opacity duration-300"
                priority={false}
              />
            ) : (
              <div className="grid h-full place-items-center font-mono text-xs uppercase tracking-[0.14em] text-mute">
                Visuel à venir
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
