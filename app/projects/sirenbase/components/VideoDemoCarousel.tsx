"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useIsVisible } from "@/hooks/useIsVisible";
import { VideoDemoCard } from "../data/sirenbaseData";
import VideoModal from "./VideoModal";

interface VideoDemoCarouselProps {
  cards: VideoDemoCard[];
}

const VideoDemoCarousel = ({ cards }: VideoDemoCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(carouselRef);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeVideo, setActiveVideo] = useState<VideoDemoCard | null>(null);

  const SCROLL_AMOUNT = 320;

  const updateScrollButtons = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    updateScrollButtons();

    // Prevent Lenis vertical scroll when user is scrolling horizontally
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.stopPropagation();
      }
    };
    el.addEventListener("wheel", handleWheel);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      el.removeEventListener("wheel", handleWheel);
    };
  }, [updateScrollButtons]);

  const scrollPrev = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <div ref={carouselRef}>
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-proximity scroll-smooth scrollbar-none py-4 -mx-8 md:-mx-16 pl-16 md:pl-32 pr-16 md:pr-32 scroll-pl-16 md:scroll-pl-32"
      >
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`flex-shrink-0 snap-start w-[260px] md:w-[280px] lg:w-[300px] aspect-[390/844] transition-[opacity,translate] duration-1000 ease-out ${
              hasBeenVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 250}ms` }}
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-500 bg-neutral-100 dark:bg-[#1B1212]/60 transition-transform duration-300 ease-in-out hover:scale-[1.02]">
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-gray-800/70 via-gray-700/30 to-transparent dark:from-gray-900/80 dark:via-gray-800/30 dark:to-transparent pointer-events-none z-10" />

            {/* Text overlay at top */}
            <div className="absolute top-0 left-0 right-0 p-5 z-20">
              <span className="inline-block text-xm font-semibold text-white mb-2 bg-black rounded-full px-2 py-0.5 shadow-[0_0_16px_rgba(200,200,200,0.5)]">
                {card.eyebrow}
              </span>
            </div>

            {/* Poster image */}
            <Image
              src={card.posterImage}
              alt={`${card.title} preview`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 260px, (max-width: 1024px) 280px, 300px"
            />

            {/* Play button */}
            {card.videoSrc ? (
              <button
                onClick={() => setActiveVideo(card)}
                className="absolute bottom-4 right-4 z-20 w-11 h-11 rounded-full bg-stone-800/80 dark:bg-neutral-200/90 flex items-center justify-center transition-transform duration-150 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                aria-label={`Play ${card.title} demo video`}
              >
                <Play
                  size={18}
                  className="text-white dark:text-stone-900 ml-0.5"
                  fill="currentColor"
                />
              </button>
            ) : (
              <div
                className="absolute bottom-4 right-4 z-20 w-11 h-11 rounded-full bg-stone-800/40 dark:bg-neutral-200/40 flex items-center justify-center"
                aria-label="Demo coming soon"
              >
                <Play
                  size={18}
                  className="text-white/50 dark:text-stone-900/50 ml-0.5"
                  fill="currentColor"
                />
              </div>
            )}
            </div>
          </div>
        ))}
      </div>

      {/* Arrow navigation */}
      <div className="hidden md:flex items-center justify-end gap-3 mt-6">
        <button
          onClick={scrollPrev}
          disabled={!canScrollLeft}
          className="w-10 h-10 rounded-full border border-neutral-500 bg-transparent flex items-center justify-center transition-all duration-200 hover:border-neutral-400 disabled:opacity-30"
          aria-label="Scroll carousel left"
        >
          <ChevronLeft size={18} className="text-neutral-700 dark:text-neutral-200" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollRight}
          className="w-10 h-10 rounded-full border border-neutral-500 bg-transparent flex items-center justify-center transition-all duration-200 hover:border-neutral-400 disabled:opacity-30"
          aria-label="Scroll carousel right"
        >
          <ChevronRight size={18} className="text-neutral-700 dark:text-neutral-200" />
        </button>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <VideoModal card={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
};

export default VideoDemoCarousel;
