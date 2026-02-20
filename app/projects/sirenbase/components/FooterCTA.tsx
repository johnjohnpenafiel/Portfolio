"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import SectionWrapper from "./SectionWrapper";
import { footerSignoff } from "../data/sirenbaseData";

const FooterCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);

  return (
    <SectionWrapper variant="transparent">
      <div
        ref={sectionRef}
        className={`transition-all duration-700 ease-out ${
          hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-12">
          <p className="text-base font-light text-gray-600 dark:text-neutral-50 max-w-[600px] leading-relaxed mb-8">
            {footerSignoff}
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="https://sirenbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm border border-neutral-500 rounded-full bg-transparent text-neutral-700 dark:text-neutral-200 hover:text-neutral-400 hover:border-neutral-400 transition-all duration-200"
            >
              Live Site <span className="text-xm">&#8599;</span>
            </a>
            <a
              href="https://github.com/johnjohn-carlson/sirenbase"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm border border-neutral-500 rounded-full bg-transparent text-neutral-700 dark:text-neutral-200 hover:text-neutral-400 hover:border-neutral-400 transition-all duration-200"
            >
              Source Code <span className="text-xm">&#8599;</span>
            </a>
            <a
              href="https://www.linkedin.com/in/john-penafiel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm border border-neutral-500 rounded-full bg-transparent text-neutral-700 dark:text-neutral-200 hover:text-neutral-400 hover:border-neutral-400 transition-all duration-200"
            >
              LinkedIn <span className="text-xm">&#8599;</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200/80 dark:border-neutral-800/80 pt-6">
          <p className="text-xm text-neutral-500 dark:text-neutral-400">
            &copy; 2026 John Penafiel
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FooterCTA;
