"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import GarageSection from "./GarageSection";
import { cadenceIntro, cadenceColumns } from "../data/garageaiData";

const CadenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);

  return (
    <GarageSection
      eyebrow="The Cadence"
      headline="Three mornings, three shapes"
      intro={cadenceIntro}
    >
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-gray-200/80 dark:md:divide-neutral-800/50"
      >
        {cadenceColumns.map((col, i) => (
          <div
            key={col.day}
            className={`py-8 md:py-2 md:px-8 first:md:pl-0 last:md:pr-0 border-b border-gray-200/80 dark:border-neutral-800/50 md:border-b-0 transition-all duration-700 ease-out ${
              hasBeenVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 180}ms` }}
          >
            <p className="text-xm font-semibold text-neutral-500 dark:text-neutral-400/90 mb-4">
              {col.day} — 08:00
            </p>
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
              {col.format}
            </h3>
            <p className="text-xm text-neutral-500 dark:text-neutral-400/90 mb-5">
              {col.budget}
            </p>
            <p className="text-sm font-light text-gray-600 dark:text-neutral-300 leading-relaxed">
              {col.body}
            </p>
          </div>
        ))}
      </div>
    </GarageSection>
  );
};

export default CadenceSection;
