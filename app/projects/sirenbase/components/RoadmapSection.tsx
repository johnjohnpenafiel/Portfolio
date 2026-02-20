"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import SectionWrapper from "./SectionWrapper";
import { roadmapItems } from "../data/sirenbaseData";

const RoadmapSection = () => {
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
          Looking Forward
        </p>
        <h2 className="text-3xl font-semibold text-stone-900 dark:text-neutral-200 tracking-tight leading-tight mb-6">
          What I&apos;d build next
        </h2>

        <div className="flex flex-col gap-8">
          {roadmapItems.map((item) => (
            <div
              key={item.title}
              className="pl-6 border-l border-gray-200/80 dark:border-neutral-900/80"
            >
              <h3 className="text-base font-semibold text-stone-800 dark:text-neutral-200 mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-light text-gray-600 dark:text-neutral-50 leading-relaxed max-w-[680px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RoadmapSection;
