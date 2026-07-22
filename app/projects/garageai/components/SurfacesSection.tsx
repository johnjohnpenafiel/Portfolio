"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useIsVisible } from "@/hooks/useIsVisible";
import GarageSection from "./GarageSection";
import {
  surfacesIntro,
  stageFigures,
  cockpitIntro,
  queueRows,
} from "../data/garageaiData";

const EvalBadge = ({ label, score }: { label: string; score: number }) => (
  <span
    className={`font-mono text-[0.65rem] tracking-wider px-1.5 py-0.5 border ${
      score >= 2
        ? "border-[#00c47d]/60 text-[#00c47d]"
        : "border-[#ff9a40]/60 text-[#ff9a40]"
    }`}
  >
    {label}:{score}
  </span>
);

const SurfacesSection = () => {
  const figuresRef = useRef<HTMLDivElement>(null);
  const cockpitRef = useRef<HTMLDivElement>(null);
  const figuresVisible = useIsVisible(figuresRef);
  const cockpitVisible = useIsVisible(cockpitRef);

  return (
    <GarageSection
      eyebrow="The Two Surfaces"
      headline="The Stage and the Cockpit"
      intro={surfacesIntro}
    >
      {/* The Stage — framed figures */}
      <div ref={figuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {stageFigures.map((fig, i) => (
          <figure
            key={fig.figure}
            className={`border border-gray-200/80 dark:border-neutral-800/80 transition-all duration-700 ease-out ${
              figuresVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <figcaption className="flex items-baseline gap-3 px-4 py-2.5 border-b border-gray-200/80 dark:border-neutral-800/80">
              <span className="font-mono text-xm uppercase tracking-wider text-[#e85002] shrink-0">
                {fig.figure}
              </span>
              <span className="font-mono text-xm text-neutral-500 dark:text-neutral-400 truncate">
                {fig.caption}
              </span>
            </figcaption>
            <Image
              src={fig.src}
              alt={fig.alt}
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </figure>
        ))}
      </div>

      {/* The Cockpit — a rendered slice of the review queue */}
      <div ref={cockpitRef} className="mt-16 md:mt-20">
        <p className="text-base font-light text-gray-600 dark:text-neutral-300 max-w-[680px] leading-relaxed mb-8">
          {cockpitIntro}
        </p>

        <div
          className={`bg-[#0a0a0a] border border-neutral-800 max-w-[860px] transition-all duration-700 ease-out ${
            cockpitVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Panel header */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 border-b border-neutral-800">
            <span className="flex items-center gap-2 font-mono text-xm uppercase tracking-widest text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#00c47d] animate-pulse" />
              Review queue
            </span>
            <span className="font-mono text-xm uppercase tracking-widest text-neutral-500">
              Mode:{" "}
              <span className="text-[#e85002]">Approve only</span> / Auto
            </span>
          </div>

          {/* Queue rows */}
          {queueRows.map((row) => (
            <div
              key={row.title}
              className="px-5 py-4 border-b border-neutral-800/70"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                <span className="font-mono text-xm text-neutral-500 tabular-nums shrink-0">
                  {row.date}
                </span>
                <span className="text-sm text-neutral-200 font-light">
                  {row.title}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 pl-0 md:pl-[5.5rem]">
                <EvalBadge label="POV" score={row.pov} />
                <EvalBadge label="FMT" score={row.format} />
                <EvalBadge label="GND" score={row.grounding} />
                <span
                  className={`font-mono text-[0.65rem] tracking-wider px-1.5 py-0.5 ${
                    row.passed
                      ? "bg-[#00c47d]/15 text-[#00c47d]"
                      : "bg-[#e03434]/15 text-[#e03434]"
                  }`}
                >
                  {row.passed ? "PASS" : "FLAG"}
                </span>
              </div>
            </div>
          ))}

          {/* Operator controls */}
          <div className="flex flex-wrap gap-3 px-5 py-4">
            <span className="font-mono text-xm uppercase tracking-widest px-4 py-2 border border-[#00c47d]/60 text-[#00c47d]">
              Accept
            </span>
            <span className="font-mono text-xm uppercase tracking-widest px-4 py-2 border border-[#e03434]/60 text-[#e03434]">
              Reject
            </span>
            <span className="font-mono text-xm uppercase tracking-widest px-4 py-2 border border-neutral-600 text-neutral-400">
              Regenerate ↺
            </span>
          </div>
        </div>

        <p className="font-mono text-xm text-neutral-500/80 dark:text-neutral-400/70 tracking-wide mt-4">
          [ every draft arrives pre-graded by the editor — the judge&apos;s scores
          are stored on the post, permanently ]
        </p>
      </div>
    </GarageSection>
  );
};

export default SurfacesSection;
