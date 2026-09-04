"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Settings2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { collaboration } from "@/data/collaboration";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

const icons = {
  strategique: Shield,
  operationnel: Settings2,
} as const;

export function CollaborationSecurite() {
  const reduce = useReducedMotion();
  const { networkSecurity } = collaboration;
  const [activeId, setActiveId] = useState<string>(
    networkSecurity.axes[0]?.id ?? "",
  );

  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Diagonal copper / plan panels — adapted from original orange geometry */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] lg:block"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-copper"
          style={{ clipPath: "polygon(48% 0, 100% 0, 100% 55%, 28% 100%)" }}
        />
        <div
          className="absolute inset-0 bg-plan"
          style={{ clipPath: "polygon(62% 40%, 100% 15%, 100% 100%, 18% 100%)" }}
        />
        <span className="absolute right-8 top-8 h-7 w-7 border-r border-t border-paper/30" />
        <span className="absolute bottom-8 right-8 h-7 w-7 border-b border-r border-paper/20" />
      </div>

      <Container className="relative max-w-7xl py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:items-start">
          <div>
            <h2 className={cn(type.h2, "text-ink")}>
              {networkSecurity.title}
            </h2>
            <p className={cn(type.lead, "mt-5 font-medium text-ink")}>
              {networkSecurity.lead}
            </p>
            <p className={cn(type.body, "mt-4 text-ink/75")}>
              {networkSecurity.body}
            </p>
            <p className={cn(type.body, "mt-8 text-ink/80")}>
              {networkSecurity.axesIntro}
            </p>
            <div className="mt-8">
              <Button href="/securite" variant="outline">
                Voir l&apos;offre Sécurité
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {networkSecurity.axes.map((axis) => {
              const Icon = icons[axis.id as keyof typeof icons] ?? Shield;
              const isActive = activeId === axis.id;
              return (
                <motion.button
                  key={axis.id}
                  type="button"
                  onClick={() => setActiveId(axis.id)}
                  onMouseEnter={() => {
                    if (!reduce) setActiveId(axis.id);
                  }}
                  className={cn(
                    "group relative flex h-full flex-col border bg-paper p-5 text-left transition-[border-color,transform,box-shadow] duration-300 sm:p-6",
                    isActive
                      ? "-translate-y-0.5 border-plan shadow-[6px_12px_0_0_color-mix(in_srgb,var(--plan)_14%,transparent)]"
                      : "border-ink/12 hover:border-plan/40",
                  )}
                  animate={reduce ? undefined : { y: isActive ? -2 : 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-full w-1 transition-colors",
                      isActive ? "bg-copper" : "bg-transparent",
                    )}
                    aria-hidden
                  />
                  <span
                    className={cn(
                      "grid h-11 w-11 place-items-center border transition-colors duration-300",
                      isActive
                        ? "border-copper bg-copper text-paper"
                        : "border-copper/40 text-copper",
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-plan">
                    {axis.label}
                  </p>
                  <h3 className={cn(type.h3, "mt-2 text-ink")}>
                    {axis.title}
                  </h3>
                  <p className={cn(type.bodyCard, "mt-2 text-mute")}>{axis.body}</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
