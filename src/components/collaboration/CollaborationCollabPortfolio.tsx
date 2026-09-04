"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeftRight,
  BarChart3,
  Building2,
  Handshake,
  Headphones,
  MonitorPlay,
  Tag,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { collaboration } from "@/data/collaboration";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

const icons: Record<
  (typeof collaboration.collabPortfolio.items)[number]["icon"],
  LucideIcon
> = {
  handshake: Handshake,
  headset: Headphones,
  building: Building2,
  chart: BarChart3,
  tag: Tag,
  display: MonitorPlay,
};

export function CollaborationCollabPortfolio() {
  const reduce = useReducedMotion();
  const { collabPortfolio } = collaboration;
  const [activeId, setActiveId] = useState<string>(
    collabPortfolio.items[0]?.id ?? "",
  );

  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Container className="relative max-w-7xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <p className={cn(type.label, "text-copper")}>
              Collaboration
            </p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>
              {collabPortfolio.title}
            </h2>
          </div>
          <Button href="/contact" className="shrink-0 self-start sm:self-auto">
            Nous contacter
          </Button>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {collabPortfolio.items.map((item) => {
            const Icon = icons[item.icon] ?? ArrowLeftRight;
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <motion.button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => {
                    if (!reduce) setActiveId(item.id);
                  }}
                  className={cn(
                    "group relative flex h-full w-full flex-col overflow-hidden border bg-paper p-5 text-left transition-[border-color,box-shadow] duration-300 sm:p-6",
                    isActive
                      ? "border-plan shadow-[6px_12px_0_0_color-mix(in_srgb,var(--plan)_14%,transparent)]"
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
                      "grid h-12 w-12 place-items-center border transition-colors duration-300",
                      isActive
                        ? "border-copper bg-copper text-paper"
                        : "border-copper/40 text-copper group-hover:border-copper",
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>

                  <h3 className={cn(type.h3, "mt-5 text-ink")}>
                    {item.title}
                  </h3>
                  {"description" in item && item.description ? (
                    <p
                      className={cn(
                        type.bodyCard,
                        "mt-2 transition-colors duration-300",
                        isActive ? "text-ink/75" : "text-mute",
                      )}
                    >
                      {item.description}
                    </p>
                  ) : null}
                </motion.button>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
