"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import GarageSection from "./GarageSection";
import {
  receiptIntro,
  receiptLines,
  receiptTotal,
  techStackLine,
  footerSignoff,
  heroLinks,
} from "../data/garageaiData";

const GarageFooter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);

  return (
    <GarageSection
      eyebrow="Colophon"
      headline="The nine-dollar newsroom"
      intro={receiptIntro}
    >
      <div
        ref={sectionRef}
        className={`transition-all duration-700 ease-out ${
          hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Receipt */}
        <div className="max-w-[520px] rounded-2xl border border-gray-200/80 dark:border-neutral-800/50 bg-neutral-200/10 dark:bg-[#1B1212]/25 px-6 py-5 mb-12 text-sm">
          <p className="text-xm text-neutral-500 dark:text-neutral-400/90 pb-4">
            Monthly operating costs
          </p>
          {receiptLines.map((line) => (
            <div
              key={line.item}
              className="flex items-baseline gap-3 py-2 border-b border-gray-200/80 dark:border-neutral-800/50"
            >
              <span className="text-neutral-800 dark:text-neutral-100 shrink-0">
                {line.item}
              </span>
              <span className="text-xm text-neutral-500 dark:text-neutral-400/90 truncate flex-1">
                {line.detail}
              </span>
              <span className="text-neutral-800 dark:text-neutral-100 tabular-nums shrink-0">
                {line.amount}
              </span>
            </div>
          ))}
          <div className="flex justify-between pt-4 font-semibold text-neutral-800 dark:text-neutral-100">
            <span className="text-xm pt-1">Total</span>
            <span className="tabular-nums">{receiptTotal}</span>
          </div>
        </div>

        {/* Stack */}
        <p className="text-xm text-neutral-500 dark:text-neutral-400/90 max-w-[680px] leading-relaxed mb-14">
          {techStackLine}
        </p>

        {/* Signoff */}
        <p className="text-base font-light text-gray-600 dark:text-neutral-300 max-w-[600px] leading-relaxed mb-10">
          {footerSignoff}
        </p>

        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href={heroLinks.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm border border-neutral-500 rounded-3xl text-neutral-700 dark:text-neutral-200 hover:text-neutral-400 hover:border-neutral-400 transition-colors duration-200"
          >
            Read the paper &#8599;
          </a>
          <a
            href={heroLinks.source}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm border border-neutral-500 rounded-3xl text-neutral-700 dark:text-neutral-200 hover:text-neutral-400 hover:border-neutral-400 transition-colors duration-200"
          >
            Open the machine &#8599;
          </a>
          <a
            href="https://www.linkedin.com/in/john-penafiel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm border border-neutral-500 rounded-3xl text-neutral-700 dark:text-neutral-200 hover:text-neutral-400 hover:border-neutral-400 transition-colors duration-200"
          >
            LinkedIn &#8599;
          </a>
        </div>

        <div className="border-t border-gray-200/80 dark:border-neutral-800/80 pt-6 flex flex-wrap justify-between gap-2">
          <p className="text-xm text-neutral-500 dark:text-neutral-400/90">
            &copy; 2026 John Penafiel
          </p>
          <p className="text-xm text-neutral-500 dark:text-neutral-400/90">
            Six steps, no bylines
          </p>
        </div>
      </div>
    </GarageSection>
  );
};

export default GarageFooter;
