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
        {ledgerEntries.map((entry, i) => {
          const isIncident = entry.tag === "INCIDENT";
          return (
            <div
              key={entry.title}
              className={`grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-8 gap-y-2 py-7 border-b border-gray-200/80 dark:border-neutral-800/50 transition-all duration-700 ease-out ${
                isIncident
                  ? "border-l-2 border-l-[#e85002] pl-5 md:pl-6 bg-[#e85002]/[0.04]"
                  : ""
              } ${
                hasBeenVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="font-mono text-xm text-neutral-500 dark:text-neutral-400 tabular-nums pt-1">
                {entry.date}
                {entry.tag && (
                  <span
                    className={`block w-fit mt-2 px-1.5 py-0.5 text-[0.65rem] tracking-wider border ${
                      isIncident
                        ? "border-[#e85002]/70 text-[#e85002]"
                        : "border-neutral-400 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {entry.tag}
                  </span>
                )}
              </div>
              <div>
                <h3 className="[font-family:var(--font-archivo)] text-lg font-semibold text-stone-900 dark:text-neutral-100 tracking-tight mb-2">
                  {entry.title}
                </h3>
                <p className="text-sm font-light text-gray-600 dark:text-neutral-300 leading-relaxed max-w-[640px]">
                  {entry.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </GarageSection>
  );
};

export default LedgerSection;
