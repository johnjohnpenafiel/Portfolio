"use client";

import React, { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

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

        <div className="flex flex-col">
          {techDecisions.map((decision, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={decision.title}
                className={`border-b border-gray-200/80 dark:border-neutral-800/50 transition-all duration-700 ease-out ${
                  hasBeenVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full justify-between items-center py-5 px-4"
                >
                  <span className="font-mono text-base font-semibold text-stone-800 dark:text-neutral-200 tracking-tight text-left">
                    {decision.title}
                  </span>
                  <span
                    className={`text-gray-400 dark:text-neutral-200 text-xl md:text-2xl transition-transform duration-500 flex-shrink-0 ml-4 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <FiPlus />
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr] delay-75"
                  }`}
                >
                  <div
                    className={`px-4 pr-8 md:pr-14 overflow-hidden transition-all ease-in-out text-sm font-light text-gray-600 dark:text-neutral-50 leading-relaxed [&>code]:font-mono [&>code]:text-neutral-500 dark:[&>code]:text-neutral-400 [&>code]:text-xm ${
                      isOpen
                        ? "opacity-100 delay-200 duration-200"
                        : "opacity-0 duration-300"
                    }`}
                  >
                    {decision.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mt-10">
          {techStackBadges.map((badge) => (
            <span
              key={badge}
              className="text-xm text-neutral-500 dark:text-neutral-400 border border-gray-200/80 dark:border-neutral-800/50 rounded-full px-3 py-1 bg-neutral-200/10 dark:bg-[#1B1212]/25"
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
