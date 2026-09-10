"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { TelephonieServiceTab } from "@/data/telephonie/service-tabs";
import { cn } from "@/lib/utils";

export function TelephonieServiceTabs({
  tabs,
  label,
  title,
  servicesLabel,
  servicesTitle,
  servicesLead,
  servicesAria,
  savPresentation,
}: {
  tabs: TelephonieServiceTab[];
  /** Optional short aliases for servicesLabel / servicesTitle */
  label?: string;
  title?: string;
  servicesLabel?: string;
  servicesTitle?: string;
  servicesLead?: string;
  servicesAria?: string;
  savPresentation?: string;
}) {
  const resolvedLabel = servicesLabel ?? label ?? "Services";
  const resolvedTitle =
    servicesTitle ?? title ?? "Ce que INFOLOG met à votre disposition";
  const [activeId, setActiveId] = useState<string>(tabs[0]?.id ?? "");
  const [subId, setSubId] = useState<string | null>(null);

  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  const subActive =
    subId && active?.subTabs
      ? active.subTabs.find((tab) => tab.id === subId)
      : null;

  const panel = subActive ?? active;
  if (!active || !panel) return null;

  function selectTab(tab: TelephonieServiceTab) {
    setActiveId(tab.id);
    setSubId(null);
  }

  return (
    <section className="border-b border-ink/10 bg-paper-2/50 py-14 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionLabel>{resolvedLabel}</SectionLabel>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {resolvedTitle}
          </h2>
          {servicesLead ? (
            <p className="mt-3 text-sm text-mute sm:text-base">{servicesLead}</p>
          ) : null}
        </div>

        <div className="mt-10 overflow-hidden border border-ink/10 bg-paper">
          <div
            role="tablist"
            aria-label={servicesAria ?? resolvedLabel}
            className="flex flex-col border-b border-ink/10 sm:flex-row sm:flex-wrap"
          >
            {tabs.map((tab) => {
              const selected = tab.id === activeId && !subId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectTab(tab)}
                  className={cn(
                    "flex-1 border-b border-ink/10 px-4 py-4 text-left font-mono text-[11px] uppercase tracking-[0.12em] transition-colors sm:border-b-0 sm:border-r sm:last:border-r-0",
                    selected
                      ? "bg-copper text-paper"
                      : "bg-ink text-paper/85 hover:bg-[#1a2733] hover:text-paper",
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {active.subTabs && active.subTabs.length > 0 ? (
            <div className="flex flex-wrap gap-px border-b border-ink/10 bg-ink/10">
              <button
                type="button"
                onClick={() => setSubId(null)}
                className={cn(
                  "px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors",
                  !subId
                    ? "bg-plan text-paper"
                    : "bg-paper text-mute hover:text-ink",
                )}
              >
                {savPresentation ?? "Présentation SAV"}
              </button>
              {active.subTabs.map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSubId(sub.id)}
                  className={cn(
                    "px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors",
                    subId === sub.id
                      ? "bg-copper text-paper"
                      : "bg-paper text-mute hover:text-ink",
                  )}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          ) : null}

          <div
            role="tabpanel"
            className="relative px-5 py-8 sm:px-8 sm:py-10"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(16,24,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.04) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden
            />

            <div className="relative">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
                {panel.title}
              </p>
              {panel.lead ? (
                <p className="mt-4 max-w-3xl text-base leading-7 text-ink/75">
                  {panel.lead}
                </p>
              ) : null}

              {panel.items.length > 0 ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {panel.items.map((item) => (
                    <li
                      key={item.title}
                      className="flex gap-3 border border-ink/10 bg-paper-2/40 px-4 py-4"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-copper/15 text-copper">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span>
                        <span className="block text-sm font-medium leading-6 text-ink">
                          {item.title}
                        </span>
                        {item.description ? (
                          <span className="mt-1 block text-sm leading-6 text-mute">
                            {item.description}
                          </span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
