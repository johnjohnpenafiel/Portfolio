"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { heroContent, heroStats, heroTechStack } from "../data/sirenbaseData";

const CountUp = ({
  end,
  duration = 1200,
  decimals = 0,
  start,
}: {
  end: number;
  duration?: number;
  decimals?: number;
  start: boolean;
}) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>();

  const animate = useCallback(() => {
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(eased * end);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    if (start) animate();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [start, animate]);

  return <>{value.toFixed(decimals)}</>;
};

const SirenbaseHero = () => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const videoSrc =
    resolvedTheme === "dark"
      ? "/video/sirenbase-vertical-dark.mp4"
      : "/video/sirenbase-vertical-light.mp4";

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`min-h-screen flex flex-col justify-center pt-[8vh] relative transition-opacity duration-500 -mx-8 md:-mx-16 px-8 md:px-16 bg-lightBackground dark:bg-black ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Phone mockup — absolute on lg+, stacked below on mobile */}
      <div className="hidden lg:flex justify-center absolute left-[60%] right-16 top-1/2 -translate-y-1/2 pointer-events-none">
        {mounted && (
          <video
            key={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={(e) =>
              e.currentTarget.classList.replace("opacity-0", "opacity-100")
            }
            className="w-[400px] h-auto rounded-[2rem] object-contain opacity-0 transition-opacity duration-700"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="lg:max-w-[60%] lg:mt-[6vh]">
        {/* Label */}
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400/90 tracking-wide mb-3">
          {heroContent.label}
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-title font-semibold text-stone-900 dark:text-neutral-200 tracking-tighter leading-[1.05] mb-5">
          {heroContent.title}
        </h1>

        {/* Subtitle */}
        <p className="text-md font-light text-gray-600 dark:text-neutral-200 max-w-[680px] leading-relaxed mb-10">
          {heroContent.subtitle}
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-8 md:gap-8 mb-10">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col min-w-[3.5rem]">
              <span className="text-4xl font-semibold font-zcool text-stone-900 dark:text-neutral-200 tracking-tight leading-tight tabular-nums">
                <CountUp
                  end={parseFloat(stat.value)}
                  decimals={stat.value.includes(".") ? 1 : 0}
                  start={visible}
                />
              </span>
              <span className="text-xm text-neutral-500 dark:text-neutral-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
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
        </div>

        {/* Tech stack */}
        <p className="mt-8 text-xm text-neutral-500/70 dark:text-neutral-400/70 tracking-wide">
          {heroTechStack}
        </p>
      </div>

      {/* Phone mockup — stacked on mobile only */}
      <div className="lg:hidden flex justify-center mt-12">
        {mounted && (
          <video
            key={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={(e) =>
              e.currentTarget.classList.replace("opacity-0", "opacity-100")
            }
            className="w-[320px] h-auto rounded-[2rem] object-contain opacity-0 transition-opacity duration-700"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  );
};

export default SirenbaseHero;
