"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { VideoDemoCard } from "../data/sirenbaseData";

interface VideoModalProps {
  card: VideoDemoCard;
  onClose: () => void;
}

const VideoModal = ({ card, onClose }: VideoModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    modalRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

      <div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={`${card.title} demo video`}
        className={`relative z-10 w-full outline-none ${
          card.vertical ? "max-w-md" : "max-w-4xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-7 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xm text-neutral-300 tracking-widest">
                {card.eyebrow}
              </p>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close video"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          <div className={`rounded-2xl ${
            card.vertical ? "max-h-[85vh]" : "aspect-video"
          }`}>
            <video
              src={card.videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full"
              style={{ maxHeight: "85vh" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
