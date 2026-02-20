"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import SectionWrapper from "./SectionWrapper";
import { problemIntro, problemCards } from "../data/sirenbaseData";

const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);

  return (
    <SectionWrapper variant="solid">
      <div ref={sectionRef}>
        <p className="text-xm font-semibold text-neutral-500/70 dark:text-neutral-400/70 tracking-widest mb-4">
          The Problem
        </p>
        <h2 className="text-3xl font-semibold text-stone-900 dark:text-neutral-200 tracking-tight leading-tight mb-6">
          Daily friction that adds up
        </h2>
        <p className="text-base font-light text-gray-600 dark:text-neutral-50 max-w-[680px] leading-relaxed mb-12">
          {problemIntro}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {problemCards.map((card, i) => (
            <div
              key={card.title}
              className={`border border-gray-200/80 dark:border-neutral-900/80 rounded-xl p-7 bg-neutral-200/10 dark:bg-[#1B1212]/25 backdrop-blur-[4px] transition-all duration-700 ease-out ${
                hasBeenVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-2xl mb-4 opacity-70">{card.icon}</div>
              <h3 className="text-base font-semibold text-stone-800 dark:text-neutral-200 mb-3">
                {card.title}
              </h3>
              <p className="text-sm font-light text-gray-600 dark:text-neutral-50 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSection;
