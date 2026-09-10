"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { ElectromenagerFamiliesContent } from "@/data/electromenager";
import { cn } from "@/lib/utils";

export function ElectromenagerFamilies({
  content,
}: {
  content: ElectromenagerFamiliesContent;
}) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>(
    content.families[0]?.id ?? "",
  );

  return (
    <section
      id="familles"
      className="scroll-mt-24 border-b border-ink/10 bg-paper py-16 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel>{content.rangesLabel ?? "Gammes"}</SectionLabel>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {content.familiesTitle}
          </h2>
          <p className="mt-3 text-sm text-mute sm:text-base">
            {content.familiesLead}
          </p>
        </div>

        <div
          className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-3"
          role="tablist"
          aria-label={content.familiesAria}
        >
          {content.families.map((family) => {
            const isActive = active === family.id;
            return (
              <motion.button
                key={family.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`family-panel-${family.id}`}
                id={`family-tab-${family.id}`}
                onClick={() => setActive(family.id)}
                onMouseEnter={() => {
                  if (!reduce) setActive(family.id);
                }}
                onFocus={() => setActive(family.id)}
                className={cn(
                  "relative flex min-h-[300px] flex-col bg-paper p-6 text-left outline-none transition-colors sm:min-h-[360px] sm:p-7",
                  isActive ? "z-10 bg-paper-2" : "hover:bg-paper-2/60",
                )}
                animate={
                  reduce
                    ? undefined
                    : {
                        y: isActive ? -2 : 0,
                      }
                }
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              >
                <span
                  className={cn(
                    "absolute left-0 top-0 h-full w-[2px] transition-colors",
                    isActive ? "bg-copper" : "bg-transparent",
                  )}
                  aria-hidden
                />

                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-plan">
                  {content.familyLabel}
                </p>
                <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  {family.label}
                </h3>

                <ul
                  id={`family-panel-${family.id}`}
                  role="tabpanel"
                  aria-labelledby={`family-tab-${family.id}`}
                  className={cn(
                    "mt-6 space-y-2.5 text-sm leading-6 sm:mt-8 sm:text-[15px] sm:leading-7",
                    isActive ? "text-ink/85" : "text-ink/65",
                  )}
                >
                  {family.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        className={cn(
                          "mt-2.5 h-1 w-1 shrink-0",
                          isActive ? "bg-copper" : "bg-ink/30",
                        )}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
