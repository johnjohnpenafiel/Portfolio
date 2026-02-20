"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import SectionWrapper from "./SectionWrapper";
import {
  impactIntro,
  impactBlocks,
  impactSummary,
} from "../data/sirenbaseData";

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);

  return (
    <SectionWrapper variant="transparent" borderOpen>
      <div ref={sectionRef}>
        <p className="text-xm font-semibold text-neutral-500/70 dark:text-neutral-400/70 tracking-widest mb-4">
          Impact
        </p>
        <h2 className="text-3xl font-semibold text-stone-900 dark:text-neutral-200 tracking-tight leading-tight mb-6">
          What changes on the floor
        </h2>
        <p className="text-base font-light text-gray-600 dark:text-neutral-50 max-w-[680px] leading-relaxed mb-12">
          {impactIntro}
        </p>

        <div className="flex flex-col gap-14">
          {impactBlocks.map((block, i) => (
            <div
              key={block.title}
              className={`border border-gray-200/80 dark:border-neutral-800/50 rounded-xl overflow-hidden bg-neutral-100/50 dark:bg-[#1B1212]/15 transition-all duration-700 ease-out ${
                hasBeenVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Block header */}
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 px-8 pt-6 pb-3">
                <h3 className="text-lg font-semibold text-stone-800 dark:text-neutral-200">
                  {block.title}
                </h3>
                {block.metric && (
                  <span className="text-2xl font-semibold text-stone-800 dark:text-neutral-200 tracking-tight whitespace-nowrap">
                    {block.metric}
                  </span>
                )}
              </div>

              {/* Before / After columns */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="px-8 pt-6 pb-8 border-b md:border-b-0">
                  <p className="text-xm font-semibold text-neutral-500/60 dark:text-neutral-400/60 tracking-widest mb-3">
                    Before
                  </p>
                  <p className="text-sm font-light text-gray-600 dark:text-neutral-50 leading-relaxed">
                    {block.before}
                  </p>
                </div>
                <div className="px-8 pt-6 pb-8 md:border-l border-gray-200/80 dark:border-neutral-800/50">
                  <p className="text-xm font-semibold text-neutral-500/60 dark:text-neutral-400/60 tracking-widest mb-3">
                    After
                  </p>
                  <p className="text-sm font-light text-gray-600 dark:text-neutral-50 leading-relaxed">
                    {block.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          className={`mt-12 p-8 border border-gray-200/80 dark:border-neutral-800/50 rounded-xl bg-neutral-100/50 dark:bg-[#1B1212]/15 transition-all duration-700 ease-out ${
            hasBeenVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-base font-light text-gray-600 dark:text-neutral-50 max-w-[780px] leading-relaxed">
            {impactSummary}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ImpactSection;
