"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const CLIENT_PTS: [number, number][] = [
  [35, 50],
  [35, 150],
  [205, 50],
  [205, 150],
];

export function VirtualisationPostesHeroIcon() {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = svg.querySelector("#vdi-lines");
    const core = svg.querySelector("#vdi-core") as SVGGeometryElement | null;
    const clients = svg.querySelector("#vdi-clients");
    if (!lines || !core || !clients) return;

    lines.replaceChildren();
    clients.replaceChildren();

    const addClient = (x: number, y: number, opacity: string) => {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("opacity", opacity);
      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect",
      );
      rect.setAttribute("x", String(x - 16));
      rect.setAttribute("y", String(y - 12));
      rect.setAttribute("width", "32");
      rect.setAttribute("height", "22");
      rect.setAttribute("rx", "2");
      rect.setAttribute("fill", "none");
      rect.setAttribute("stroke", "#F3F5F7");
      rect.setAttribute("stroke-width", "1.4");
      const stand = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      stand.setAttribute("x1", String(x));
      stand.setAttribute("y1", String(y + 10));
      stand.setAttribute("x2", String(x));
      stand.setAttribute("y2", String(y + 16));
      stand.setAttribute("stroke", "#F3F5F7");
      stand.setAttribute("stroke-width", "1.4");
      g.appendChild(rect);
      g.appendChild(stand);
      clients.appendChild(g);
      return g;
    };

    if (reduce) {
      CLIENT_PTS.forEach(([x, y]) => {
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line",
        );
        line.setAttribute("x1", "120");
        line.setAttribute("y1", "100");
        line.setAttribute("x2", String(x));
        line.setAttribute("y2", String(y));
        line.setAttribute("stroke", "#4A6E97");
        line.setAttribute("stroke-width", "1.2");
        line.setAttribute("opacity", "0.6");
        lines.appendChild(line);
        addClient(x, y, "0.9");
      });
      core.style.strokeDasharray = "none";
      core.style.strokeDashoffset = "0";
      return;
    }

    const timers: number[] = [];

    const coreLen =
      typeof core.getTotalLength === "function" ? core.getTotalLength() : 180;
    core.style.strokeDasharray = String(coreLen);
    core.style.strokeDashoffset = String(coreLen);
    core.style.transition = "stroke-dashoffset 0.8s ease 0.1s";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        core.style.strokeDashoffset = "0";
      });
    });

    CLIENT_PTS.forEach(([x, y], i) => {
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      line.setAttribute("x1", "120");
      line.setAttribute("y1", "100");
      line.setAttribute("x2", String(x));
      line.setAttribute("y2", String(y));
      line.setAttribute("stroke", "#4A6E97");
      line.setAttribute("stroke-width", "1.2");
      line.setAttribute("opacity", "0.6");
      const len = Math.hypot(x - 120, y - 100);
      line.style.strokeDasharray = String(len);
      line.style.strokeDashoffset = String(len);
      line.style.transition = `stroke-dashoffset 0.7s ease ${i * 0.1}s`;
      lines.appendChild(line);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          line.style.strokeDashoffset = "0";
        });
      });

      const g = addClient(x, y, "0");
      timers.push(
        window.setTimeout(() => {
          g.style.transition = "opacity 0.5s ease";
          g.setAttribute("opacity", "0.9");
        }, 950 + i * 120),
      );
    });

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [reduce]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 240 200"
      className="h-full w-full"
      aria-hidden
    >
      <g id="vdi-lines" fill="none" />
      <rect
        id="vdi-core"
        x="95"
        y="80"
        width="50"
        height="40"
        rx="3"
        fill="none"
        stroke="#D97A45"
        strokeWidth="2.2"
      />
      <g id="vdi-clients" />
    </svg>
  );
}
