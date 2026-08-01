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
  <span className="text-[0.65rem] px-2 py-0.5 rounded-full border border-gray-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
    {label}: {score}
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
      <div
        ref={figuresRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {stageFigures.map((fig, i) => (
          <figure
            key={fig.figure}
            className={`rounded-2xl overflow-hidden border border-gray-200/80 dark:border-neutral-800/50 bg-neutral-200/10 dark:bg-[#1B1212]/25 transition-all duration-700 ease-out ${
              figuresVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <figcaption className="flex items-baseline gap-3 px-4 py-2.5 border-b border-gray-200/80 dark:border-neutral-800/50">
              <span className="text-xm font-semibold text-neutral-600 dark:text-neutral-300 shrink-0">
                {fig.figure}
              </span>
              <span className="text-xm text-neutral-500 dark:text-neutral-400/90 truncate">
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
          className={`rounded-2xl border border-gray-200/80 dark:border-neutral-800/50 bg-neutral-200/10 dark:bg-[#1B1212]/25 max-w-[860px] transition-all duration-700 ease-out ${
            cockpitVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Panel header */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 border-b border-gray-200/80 dark:border-neutral-800/50">
            <span className="flex items-center gap-2 text-xm text-neutral-500 dark:text-neutral-400/90">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Review queue
            </span>
            <span className="text-xm text-neutral-500 dark:text-neutral-400/90">
              Mode:{" "}
              <span className="font-semibold text-neutral-700 dark:text-neutral-200">
                Approve only
              </span>{" "}
              / Auto
            </span>
          </div>

          {/* Queue rows */}
          {queueRows.map((row) => (
            <div
              key={row.title}
              className="px-5 py-4 border-b border-gray-200/80 dark:border-neutral-800/50"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                <span className="text-xm text-neutral-500 dark:text-neutral-400/90 tabular-nums shrink-0">
                  {row.date}
                </span>
                <span className="text-sm font-light text-gray-600 dark:text-neutral-200">
                  {row.title}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 pl-0 md:pl-[5.5rem]">
                <EvalBadge label="POV" score={row.pov} />
                <EvalBadge label="FMT" score={row.format} />
                <EvalBadge label="GND" score={row.grounding} />
                <span
                  className={`text-[0.65rem] px-2 py-0.5 rounded-full ${
                    row.passed
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-red-500/10 text-red-500 dark:text-red-400"
                  }`}
                >
                  {row.passed ? "Pass" : "Flag"}
                </span>
              </div>
            </div>
          ))}

          {/* Operator controls */}
          <div className="flex flex-wrap gap-3 px-5 py-4">
            <span className="text-sm px-5 py-1.5 border border-neutral-500 rounded-3xl text-neutral-700 dark:text-neutral-200">
              Accept
            </span>
            <span className="text-sm px-5 py-1.5 border border-neutral-500 rounded-3xl text-neutral-700 dark:text-neutral-200">
              Reject
            </span>
            <span className="text-sm px-5 py-1.5 border border-neutral-500 rounded-3xl text-neutral-700 dark:text-neutral-200">
              Regenerate ↺
            </span>
          </div>
        </div>

        <p className="text-xm text-neutral-500 dark:text-neutral-400/90 mt-4">
          Every draft arrives pre-graded by the editor — the judge&apos;s scores
          are stored on the post, permanently.
        </p>
      </div>
    </GarageSection>
  );
};

export default SurfacesSection;
