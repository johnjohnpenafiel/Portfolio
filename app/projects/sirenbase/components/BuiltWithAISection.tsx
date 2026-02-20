"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import SectionWrapper from "./SectionWrapper";
import { aiNarrative, aiArtifact } from "../data/sirenbaseData";

const BuiltWithAISection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);

  return (
    <SectionWrapper variant="solid">
      <div
        ref={sectionRef}
        className={`transition-all duration-700 ease-out ${
          hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xm font-semibold text-neutral-500/70 dark:text-neutral-400/70 tracking-widest mb-4">
          Methodology
        </p>
        <h2 className="text-3xl font-semibold text-stone-900 dark:text-neutral-200 tracking-tight leading-tight mb-6">
          Built with AI
        </h2>

        <div className="max-w-[720px]">
          {aiNarrative.map((paragraph, i) => (
            <p
              key={i}
              className={`text-base font-light text-gray-600 dark:text-neutral-50 leading-relaxed ${
                i < aiNarrative.length - 1 ? "mb-6" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* CLAUDE.md artifact */}
        <div className="mt-8 px-8 py-6 border border-gray-200/80 dark:border-neutral-900/80 rounded-xl bg-neutral-100/50 dark:bg-[#1B1212]/15 font-mono text-sm text-neutral-500 dark:text-neutral-400/80 leading-relaxed max-w-[720px]">
          <strong className="text-stone-800 dark:text-neutral-200 font-semibold">
            {aiArtifact.name}
          </strong>{" "}
          — {aiArtifact.description}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BuiltWithAISection;
