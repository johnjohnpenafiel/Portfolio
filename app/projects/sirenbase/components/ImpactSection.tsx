"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import SectionWrapper from "./SectionWrapper";
import { impactIntro, impactTools } from "../data/sirenbaseData";

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);
  const [showAfter, setShowAfter] = useState(false);
  const [hasAutoToggled, setHasAutoToggled] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Auto-toggle from Before → After ~2s after section becomes visible
  useEffect(() => {
    if (hasBeenVisible && !hasAutoToggled) {
      const timer = setTimeout(() => {
        setAnimating(true);
        setTimeout(() => {
          setShowAfter(true);
          setAnimating(false);
        }, 300);
        setHasAutoToggled(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasBeenVisible, hasAutoToggled]);

  const handleToggle = useCallback(
    (after: boolean) => {
      if (after === showAfter) return;
      setAnimating(true);
      setTimeout(() => {
        setShowAfter(after);
        setAnimating(false);
      }, 150);
    },
    [showAfter]
  );

  return (
    <SectionWrapper variant="transparent" borderOpen>
      <div ref={sectionRef}>
        <p className="text-xm font-semibold text-neutral-500/70 dark:text-neutral-400/70 tracking-widest mb-4">
          Impact
        </p>
        <h2 className="text-3xl font-semibold text-stone-900 dark:text-neutral-200 tracking-tight leading-tight mb-6">
          What changes on the floor
        </h2>
        <p className="text-base font-light text-gray-600 dark:text-neutral-50 max-w-[680px] leading-relaxed mb-10">
          {impactIntro}
        </p>

        {/* Before / After pill toggle */}
        <div className="mb-12">
          <div className="rounded-full border border-neutral-300 dark:border-neutral-700 inline-flex">
            <button
              onClick={() => handleToggle(false)}
              className={`w-20 py-1.5 text-sm text-center rounded-full transition-all duration-200 ${
                !showAfter
                  ? "bg-stone-800 dark:bg-neutral-200 text-white dark:text-black font-medium"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => handleToggle(true)}
              className={`w-20 py-1.5 text-sm text-center rounded-full transition-all duration-200 ${
                showAfter
                  ? "bg-stone-800 dark:bg-neutral-200 text-white dark:text-black font-medium"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              After
            </button>
          </div>
        </div>

        {/* Tool blocks with stats */}
        <div className="flex flex-col gap-12">
          {impactTools.map((tool, i) => (
            <div
              key={tool.title}
              className={`border border-gray-200/80 dark:border-neutral-800/50 rounded-xl bg-neutral-100/50 dark:bg-[#1B1212]/15 p-8 transition-all duration-700 ease-out ${
                hasBeenVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-lg font-semibold text-stone-800 dark:text-neutral-200">
                  {tool.title}
                </h3>
                <div className={`text-right transition-opacity duration-300 ${showAfter && !animating ? "opacity-100" : "opacity-0"}`}>
                  <span className="text-2xl md:text-3xl font-semibold font-mono text-stone-800 dark:text-neutral-200 tracking-tight">
                    {tool.improvement}
                  </span>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    more efficient
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {tool.stats.map((stat, j) => (
                  <div key={j} className="min-w-[140px]">
                    <div
                      className={`text-2xl md:text-3xl font-semibold font-mono text-stone-900 dark:text-neutral-100 tracking-tight transition-opacity duration-300 ${
                        animating ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {showAfter ? stat.after : stat.before}
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ImpactSection;
