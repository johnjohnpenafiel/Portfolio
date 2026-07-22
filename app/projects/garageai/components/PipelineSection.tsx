"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import GarageSection from "./GarageSection";
import { pipelineIntro, pipelineSteps } from "../data/garageaiData";
import type { PipelineStep } from "../data/garageaiData";

const StepRow = ({ step, isLast }: { step: PipelineStep; isLast: boolean }) => {
  const rowRef = useRef<HTMLLIElement>(null);
  const hasBeenVisible = useIsVisible(rowRef);

  return (
    <li ref={rowRef} className="relative grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-x-4 md:gap-x-8">
      {/* Rail */}
      <div className="flex flex-col items-center">
        <span
          className={`font-mono text-sm md:text-base tabular-nums border px-2 py-1 transition-colors duration-700 ${
            hasBeenVisible
              ? "border-[#e85002] text-[#e85002]"
              : "border-gray-300 dark:border-neutral-700 text-neutral-400 dark:text-neutral-600"
          }`}
        >
          {step.number}
        </span>
        {!isLast && (
          <span className="relative w-px flex-1 mt-2 mb-2 bg-gray-200/80 dark:bg-neutral-800/80 overflow-hidden">
            <span
              className={`absolute inset-x-0 top-0 bg-[#e85002] transition-[height] duration-1000 ease-out ${
                hasBeenVisible ? "h-full" : "h-0"
              }`}
            />
          </span>
        )}
      </div>

      {/* Content */}
      <div
        className={`pb-12 md:pb-16 transition-all duration-700 ease-out ${
          hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
          <h3 className="[font-family:var(--font-archivo)] text-xl md:text-2xl font-bold text-stone-900 dark:text-neutral-100 tracking-tight">
            {step.title}
          </h3>
          <span className="font-mono text-xm uppercase tracking-wider text-[#e85002]">
            {step.agent}
          </span>
        </div>
        <p className="text-sm font-light text-gray-600 dark:text-neutral-300 leading-relaxed max-w-[620px]">
          {step.body}
        </p>
        {step.footnote && (
          <p className="font-mono text-xm text-neutral-500/80 dark:text-neutral-400/70 tracking-wide mt-3">
            [ {step.footnote} ]
          </p>
        )}
      </div>
    </li>
  );
};

const PipelineSection = () => {
  return (
    <GarageSection
      eyebrow="The Press Run"
      headline="Six steps, no bylines"
      intro={pipelineIntro}
    >
      <ol>
        {pipelineSteps.map((step, i) => (
          <StepRow
            key={step.number}
            step={step}
            isLast={i === pipelineSteps.length - 1}
          />
        ))}
      </ol>
    </GarageSection>
  );
};

export default PipelineSection;
