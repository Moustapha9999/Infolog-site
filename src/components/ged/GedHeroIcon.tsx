"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function GedHeroIcon() {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = svg.querySelector("#doc-lines");
    const folder = svg.querySelector("#doc-folder") as SVGGeometryElement | null;
    const tab = svg.querySelector("#doc-tab") as SVGGeometryElement | null;
    const files = svg.querySelector("#doc-files");
    if (!lines || !folder || !tab || !files) return;

    lines.replaceChildren();
    files.replaceChildren();

    const pts: [number, number][] = [
      [30, 30],
      [210, 30],
      [30, 170],
      [210, 170],
    ];

    if (reduce) {
      pts.forEach(([x, y]) => {
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line",
        );
        line.setAttribute("x1", "120");
        line.setAttribute("y1", "115");
        line.setAttribute("x2", String(x));
        line.setAttribute("y2", String(y));
        line.setAttribute("stroke", "#4A6E97");
        line.setAttribute("stroke-width", "1.2");
        line.setAttribute("opacity", "0.6");
        lines.appendChild(line);
      });

      folder.style.strokeDasharray = "none";
      folder.style.strokeDashoffset = "0";
      tab.style.strokeDasharray = "none";
      tab.style.strokeDashoffset = "0";

      (
        [
          [75, 90],
          [95, 90],
          [115, 90],
        ] as [number, number][]
      ).forEach(([x, y]) => {
        const r = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect",
        );
        r.setAttribute("x", String(x));
        r.setAttribute("y", String(y));
        r.setAttribute("width", "40");
        r.setAttribute("height", "50");
        r.setAttribute("rx", "2");
        r.setAttribute("fill", "none");
        r.setAttribute("stroke", "#F3F5F7");
        r.setAttribute("stroke-width", "1.4");
        r.setAttribute("opacity", "0.85");
        files.appendChild(r);
      });
      return;
    }

    const timers: number[] = [];

    pts.forEach(([x, y], i) => {
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      line.setAttribute("x1", "120");
      line.setAttribute("y1", "115");
      line.setAttribute("x2", String(x));
      line.setAttribute("y2", String(y));
      line.setAttribute("stroke", "#4A6E97");
      line.setAttribute("stroke-width", "1.2");
      line.setAttribute("opacity", "0.6");
      const len = Math.hypot(x - 120, y - 115);
      line.style.strokeDasharray = String(len);
      line.style.strokeDashoffset = String(len);
      line.style.transition = `stroke-dashoffset 0.7s ease ${i * 0.1}s`;
      lines.appendChild(line);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          line.style.strokeDashoffset = "0";
        });
      });
    });

    [folder, tab].forEach((el, i) => {
      const len = el.getTotalLength();
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len);
      el.style.transition = `stroke-dashoffset 0.9s ease ${0.3 + i * 0.2}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.strokeDashoffset = "0";
        });
      });
    });

    (
      [
        [75, 90],
        [95, 90],
        [115, 90],
      ] as [number, number][]
    ).forEach(([x, y], i) => {
      const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      r.setAttribute("x", String(x));
      r.setAttribute("y", String(y));
      r.setAttribute("width", "40");
      r.setAttribute("height", "50");
      r.setAttribute("rx", "2");
      r.setAttribute("fill", "none");
      r.setAttribute("stroke", "#F3F5F7");
      r.setAttribute("stroke-width", "1.4");
      r.setAttribute("opacity", "0");
      files.appendChild(r);
      timers.push(
        window.setTimeout(() => {
          r.style.transition = "opacity 0.5s ease";
          r.setAttribute("opacity", "0.85");
        }, 900 + i * 140),
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
      <g id="doc-lines" fill="none" />
      <rect
        id="doc-folder"
        x="55"
        y="70"
        width="130"
        height="90"
        rx="3"
        fill="none"
        stroke="#D97A45"
        strokeWidth="2.2"
      />
      <path
        id="doc-tab"
        d="M55 70 L55 55 L95 55 L105 70"
        fill="none"
        stroke="#D97A45"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <g id="doc-files" />
    </svg>
  );
}
