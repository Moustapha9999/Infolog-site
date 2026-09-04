"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { collaboration } from "@/data/collaboration";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function CollaborationPortfolio() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState<string>(
    collaboration.portfolio[0]?.id ?? "",
  );

  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper-2/50 py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Container className="relative max-w-7xl">
        <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div>
            <p className={cn(type.label, "text-copper")}>
              {collaboration.expertiseLabel}
            </p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>
              {collaboration.expertiseTitle}
            </h2>
          </div>
          <p className={cn(type.body, "text-mute lg:pb-1")}>
            {collaboration.expertiseLead}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {collaboration.portfolio.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="min-h-0">
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() =>
                    setActiveId((current) =>
                      current === item.id ? "" : item.id,
                    )
                  }
                  onMouseEnter={() => {
                    if (!reduce) setActiveId(item.id);
                  }}
                  className={cn(
                    "group relative flex h-full w-full flex-col overflow-hidden border bg-paper p-5 text-left transition-[border-color,transform,box-shadow] duration-300 sm:p-6",
                    isActive
                      ? "z-10 -translate-y-0.5 border-plan shadow-[6px_12px_0_0_color-mix(in_srgb,var(--plan)_14%,transparent)]"
                      : "border-ink/12 hover:border-plan/40",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-full w-1 transition-colors duration-300",
                      isActive ? "bg-copper" : "bg-transparent group-hover:bg-copper/50",
                    )}
                    aria-hidden
                  />

                  <div className="flex items-start justify-between gap-3">
                    <h3 className={cn(type.h3, "text-ink")}>
                      {item.title}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-plan transition-transform duration-300",
                        isActive && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </div>

                  <p className={cn(type.bodyCard, "mt-3 text-mute")}>
                    {item.description}
                  </p>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        key="items"
                        initial={
                          reduce ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          reduce
                            ? undefined
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-5 border-t border-ink/10 pt-1">
                          {item.items.map((point) => (
                            <li
                              key={point}
                              className={cn(
                                type.bodyCard,
                                "flex gap-3 border-b border-ink/10 py-3 text-ink/80 last:border-b-0",
                              )}
                            >
                              <ArrowRight
                                className="mt-1 h-3.5 w-3.5 shrink-0 text-copper"
                                aria-hidden
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : (
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-plan/70">
                        Survoler ou cliquer pour détailler
                      </p>
                    )}
                  </AnimatePresence>
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
