"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { securite } from "@/data/securite";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function SecuriteApproche() {
  const [activeId, setActiveId] = useState<string>(securite.volets[0].id);
  const active = securite.volets.find((volet) => volet.id === activeId) ?? securite.volets[0];

  return (
    <section className="relative border-b border-ink/10 bg-paper-2/50 py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Container className="relative">
        <p className={cn(type.label, "text-copper")}>
          {securite.approcheLabel}
        </p>
        <h2 className={cn(type.h2, "mt-3 text-ink")}>
          {securite.approcheTitle}
        </h2>

        <div className="mt-8 border border-ink/12 bg-paper shadow-[0_18px_40px_-28px_rgba(16,24,32,0.25)]">
          <div
            role="tablist"
            aria-label="Volets de sécurité"
            className="grid border-b border-ink/12 sm:grid-cols-2"
          >
            {securite.volets.map((volet) => {
              const selected = volet.id === active.id;
              return (
                <button
                  key={volet.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`tab-${volet.id}`}
                  aria-controls={`panel-${volet.id}`}
                  onClick={() => setActiveId(volet.id)}
                  className={cn(
                    "px-5 py-4 text-left text-sm font-medium leading-snug transition-colors sm:px-6 sm:text-[15px] sm:leading-6",
                    selected
                      ? "bg-ink text-paper"
                      : "bg-paper text-ink/55 hover:bg-paper-2 hover:text-ink",
                  )}
                >
                  {volet.title}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
          >
            <p className={cn(type.body, "max-w-4xl text-ink/75")}>
              {active.body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
