"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import GarageSection from "./GarageSection";
import { ledgerIntro, ledgerEntries } from "../data/garageaiData";

const LedgerSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);

  return (
    <GarageSection
      eyebrow="The Decision Ledger"
      headline="Kept like sources: dated, on the record"
      intro={ledgerIntro}
    >
      <div ref={sectionRef} className="flex flex-col gap-0">
        {ledgerEntries.map((entry, i) => (
          <div
            key={entry.title}
            className={`grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-8 gap-y-2 py-7 border-b border-gray-200/80 dark:border-neutral-800/50 transition-all duration-700 ease-out ${
              hasBeenVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="text-xm text-neutral-500 dark:text-neutral-400/90 tabular-nums pt-1">
              {entry.date}
              {entry.tag && (
                <span className="block w-fit mt-2 px-2 py-0.5 text-[0.65rem] rounded-full border border-gray-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
                  {entry.tag}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                {entry.title}
              </h3>
              <p className="text-sm font-light text-gray-600 dark:text-neutral-300 leading-relaxed max-w-[640px]">
                {entry.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </GarageSection>
  );
};

export default LedgerSection;
