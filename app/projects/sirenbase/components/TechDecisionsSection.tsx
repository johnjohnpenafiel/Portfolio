"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import SectionWrapper from "./SectionWrapper";
import {
  techDecisionsIntro,
  techDecisions,
  techStackBadges,
} from "../data/sirenbaseData";

const TechDecisionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);

  return (
    <SectionWrapper variant="solid">
      <div ref={sectionRef}>
        <p className="text-xm font-semibold text-neutral-500/70 dark:text-neutral-400/70 tracking-widest mb-4">
          Technical Decisions
        </p>
        <h2 className="text-3xl font-semibold text-stone-900 dark:text-neutral-200 tracking-tight leading-tight mb-6">
          Architecture shaped by constraints
        </h2>
        <p className="text-base font-light text-gray-600 dark:text-neutral-50 max-w-[680px] leading-relaxed mb-12">
          {techDecisionsIntro}
        </p>

        <div className="flex flex-col gap-10">
          {techDecisions.map((decision, i) => (
            <div
              key={decision.title}
              className={`p-8 border border-gray-200/80 dark:border-neutral-900/80 rounded-xl bg-neutral-100/50 dark:bg-[#1B1212]/15 transition-all duration-700 ease-out ${
                hasBeenVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="font-mono text-base font-semibold text-stone-800 dark:text-neutral-200 tracking-tight mb-4">
                {decision.title}
              </h3>
              <p className="text-sm font-light text-gray-600 dark:text-neutral-50 leading-relaxed [&>code]:font-mono [&>code]:text-neutral-500 dark:[&>code]:text-neutral-400 [&>code]:text-xm">
                {decision.body}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mt-10">
          {techStackBadges.map((badge) => (
            <span
              key={badge}
              className="text-xm text-neutral-500 dark:text-neutral-400 border border-gray-200/80 dark:border-neutral-900/80 rounded-full px-3 py-1 bg-neutral-200/10 dark:bg-[#1B1212]/25"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TechDecisionsSection;
