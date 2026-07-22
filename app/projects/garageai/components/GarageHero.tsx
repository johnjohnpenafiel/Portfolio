"use client";

import React, { useEffect, useState } from "react";
import {
  heroMeta,
  heroTitle,
  heroSubtitle,
  heroStats,
  heroLinks,
  tickerHeadlines,
} from "../data/garageaiData";

const GarageHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const reveal = `transition-all duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

  return (
    <section className="pt-28 md:pt-36 pb-0">
      {/* Meta row */}
      <div
        className={`flex flex-wrap justify-between gap-2 font-mono text-xm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 pb-3 ${reveal}`}
      >
        <span>{heroMeta}</span>
        <span className="hidden sm:inline">Mon · Thu · Fri — 08:00</span>
      </div>

      {/* Boxed wordmark, like the paper's own masthead */}
      <div
        className={`border-y border-stone-900/80 dark:border-neutral-200/70 py-4 md:py-6 ${reveal}`}
        style={{ transitionDelay: "100ms" }}
      >
        <h1 className="[font-family:var(--font-archivo)] font-black uppercase text-[#e85002] leading-[0.95] tracking-tight text-[9.8vw] lg:text-[7.2rem] whitespace-nowrap">
          {heroTitle}
        </h1>
      </div>

      {/* Sub-meta row under the box */}
      <div
        className={`flex flex-wrap justify-between gap-2 font-mono text-xm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 pt-3 mb-12 md:mb-16 ${reveal}`}
        style={{ transitionDelay: "150ms" }}
      >
        <span>An AI publication that writes itself</span>
        <span className="hidden md:inline">thegarageai.com</span>
      </div>

      <div
        className={reveal}
        style={{ transitionDelay: "250ms" }}
      >
        <p className="text-md font-light text-gray-600 dark:text-neutral-200 max-w-[640px] leading-relaxed mb-12">
          {heroSubtitle}
        </p>

        {/* Stats strip */}
        <div className="flex flex-wrap border border-gray-200/80 dark:border-neutral-800/80 divide-x divide-gray-200/80 dark:divide-neutral-800/80 mb-12 max-w-fit">
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-5 py-3">
              <span className="block font-mono text-xl md:text-2xl text-stone-900 dark:text-neutral-100 tabular-nums">
                {stat.value}
              </span>
              <span className="block font-mono text-xm uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs — square, mono, editorial */}
        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href={heroLinks.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xm uppercase tracking-widest px-6 py-3 border border-stone-900 dark:border-neutral-200 text-stone-900 dark:text-neutral-100 hover:bg-[#e85002] hover:border-[#e85002] hover:text-white dark:hover:text-white transition-colors duration-200"
          >
            Read the paper &#8599;
          </a>
          <a
            href={heroLinks.source}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xm uppercase tracking-widest px-6 py-3 border border-neutral-400 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:bg-[#e85002] hover:border-[#e85002] hover:text-white dark:hover:text-white transition-colors duration-200"
          >
            Open the machine &#8599;
          </a>
        </div>
      </div>

      {/* Headline ticker — real dispatches, written by the machine */}
      <div
        className={`-mx-8 md:-mx-16 bg-[#0a0a0a] border-y border-neutral-800 overflow-hidden ${reveal}`}
        style={{ transitionDelay: "350ms" }}
      >
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused] py-3">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 font-mono text-xm uppercase tracking-widest text-[#e85002]"
            >
              {tickerHeadlines.map((headline) => (
                <span key={headline} className="flex items-center">
                  <span className="px-6">{headline}</span>
                  <span className="text-neutral-600">—</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="font-mono text-xm text-neutral-500/70 dark:text-neutral-400/60 tracking-wide mt-3 mb-14 md:mb-20">
        ↑ live headlines. every one researched, written, and illustrated by the
        pipeline.
      </p>
    </section>
  );
};

export default GarageHero;
