"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { PhoneColor } from "@/data/telephonie/types";

type PhoneBuyDrawerProps = {
  open: boolean;
  onClose: () => void;
  name: string;
  ram: string[];
  storage: string[];
  colors: PhoneColor[];
};

export function PhoneBuyDrawer({
  open,
  onClose,
  name,
  ram,
  storage,
  colors,
}: PhoneBuyDrawerProps) {
  const [selectedRam, setSelectedRam] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex justify-end">
      {/* backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* panel */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300 sm:max-w-[420px]">
        {/* header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <h2 className="text-lg font-semibold text-ink">Configurer</h2>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 py-6 pb-8">
          {/* Modèle */}
          <section>
            <h3 className="text-sm font-semibold text-ink/80">Modèle</h3>
            <div className="mt-3 rounded-xl border-2 border-[#1D4E89] bg-[#F7F9FC] p-4">
              <p className="text-base font-semibold text-ink">{name}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/65">
                <span>Galaxy AI</span>
                <span className="text-[#7EB6FF]" aria-hidden>
                  ✦
                </span>
              </p>
            </div>
          </section>

          {/* RAM */}
          {ram.length > 0 ? (
            <section className="mt-8">
              <h3 className="text-sm font-semibold text-ink/80">RAM</h3>
              <p className="mt-1 text-xs text-ink/45">Mémoire vive</p>
              <div className="mt-3 flex flex-col gap-2.5">
                {ram.map((option, i) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedRam(i)}
                    className={`flex items-center justify-between rounded-xl border-2 px-4 py-3.5 text-left transition-colors ${
                      i === selectedRam
                        ? "border-[#1D4E89] bg-[#F7F9FC]"
                        : "border-ink/12 bg-white hover:border-ink/25"
                    }`}
                  >
                    <span className="text-sm font-medium text-ink">{option}</span>
                  </button>
                ))}
              </div>
            </section>
          ) : null}

          {/* Stockage */}
          {storage.length > 0 ? (
            <section className="mt-8">
              <h3 className="text-sm font-semibold text-ink/80">Stockage</h3>
              <p className="mt-1 text-xs text-ink/45">Mémoire interne</p>
              <div className="mt-3 flex flex-col gap-2.5">
                {storage.map((option, i) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedStorage(i)}
                    className={`flex items-center justify-between rounded-xl border-2 px-4 py-3.5 text-left transition-colors ${
                      i === selectedStorage
                        ? "border-[#1D4E89] bg-[#F7F9FC]"
                        : "border-ink/12 bg-white hover:border-ink/25"
                    }`}
                  >
                    <span className="text-sm font-medium text-ink">{option}</span>
                  </button>
                ))}
              </div>
            </section>
          ) : null}

          {/* Couleur */}
          {colors.length > 0 ? (
            <section className="mt-8">
              <h3 className="text-sm font-semibold text-ink/80">Couleur</h3>
              {colors[selectedColor] ? (
                <div className="mt-3 flex items-center gap-3 rounded-xl bg-[#F7F9FC] p-3">
                  <span
                    className="block h-10 w-10 shrink-0 rounded-full border border-ink/10"
                    style={{ backgroundColor: colors[selectedColor].hex }}
                  />
                  <p className="text-sm font-medium text-ink">
                    {colors[selectedColor].name}
                  </p>
                </div>
              ) : null}
              <div className="mt-4 flex flex-wrap items-start justify-center gap-5 sm:justify-start">
                {colors.map((color, i) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(i)}
                    className="flex flex-col items-center gap-1.5"
                    aria-label={color.name}
                  >
                    <span
                      className={`block h-9 w-9 rounded-full border-2 transition-all ${
                        i === selectedColor
                          ? "border-[#1D4E89] ring-2 ring-[#1D4E89]/25"
                          : "border-ink/15 hover:border-ink/35"
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[11px] text-ink/60">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        {/* sticky footer */}
        <div className="border-t border-ink/10 px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full bg-[#1D4E89] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#163D6B]"
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}
