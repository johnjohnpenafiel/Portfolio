"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useIsVisible } from "@/hooks/useIsVisible";
import SectionWrapper from "./SectionWrapper";
import { aiNarrative, aiFileTree, FileTreeNode } from "../data/sirenbaseData";

const CHARS_PER_FRAME = 5;
const FRAME_INTERVAL = 16;

const TreeNode = ({
  node,
  isLast,
  prefix,
}: {
  node: FileTreeNode;
  isLast: boolean;
  prefix: string;
}) => {
  const connector = isLast ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ";
  const childPrefix = prefix + (isLast ? "    " : "\u2502   ");
  const isFolder = !!node.children;

  return (
    <>
      <div className="flex whitespace-nowrap">
        <span className="text-neutral-300 dark:text-neutral-600 select-none">
          {prefix}
          {connector}
        </span>
        <span
          className={
            isFolder
              ? "text-stone-800 dark:text-neutral-200 font-semibold"
              : "text-neutral-500 dark:text-neutral-400"
          }
        >
          {node.name}
        </span>
        {node.description && (
          <span className="text-neutral-400 dark:text-neutral-500 ml-2">
            &mdash; {node.description}
          </span>
        )}
      </div>
      {node.children?.map((child, i) => (
        <TreeNode
          key={child.name}
          node={child}
          isLast={i === node.children!.length - 1}
          prefix={childPrefix}
        />
      ))}
    </>
  );
};

const BuiltWithAISection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const fullText = aiNarrative.join("\n\n");

  useEffect(() => {
    if (hasBeenVisible && !started) {
      setStarted(true);
    }
  }, [hasBeenVisible, started]);

  useEffect(() => {
    if (!started || charIndex >= fullText.length) return;
    const timer = setTimeout(() => {
      setCharIndex((prev) => Math.min(prev + CHARS_PER_FRAME, fullText.length));
    }, FRAME_INTERVAL);
    return () => clearTimeout(timer);
  }, [started, charIndex, fullText]);

  const visibleText = fullText.slice(0, charIndex);
  const paragraphs = visibleText.split("\n\n");
  const isDone = charIndex >= fullText.length;

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
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          <div className="lg:flex-1">
            <p className="text-xm font-semibold text-neutral-500/70 dark:text-neutral-400/70 tracking-widest mb-4">
              Methodology
            </p>
            <h2 className="flex items-center gap-3 text-3xl font-semibold text-stone-900 dark:text-neutral-200 tracking-tight leading-tight mb-6">
              Built with AI
              <Image
                src="/images/sirenbase/claude-icon.svg"
                alt="Claude AI"
                width={28}
                height={28}
                className="dark:invert opacity-60"
              />
            </h2>

            {/* Narrative text — typewriter effect */}
            <div className="max-w-[720px]">
              {paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-base font-light text-gray-600 dark:text-neutral-50 leading-relaxed ${
                    i < paragraphs.length - 1 ? "mb-6" : ""
                  }`}
                >
                  {paragraph}
                  {!isDone && i === paragraphs.length - 1 && (
                    <span className="inline-block w-[2px] h-[1em] bg-neutral-400 dark:bg-neutral-500 ml-0.5 align-middle animate-pulse" />
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* File tree */}
          <div className="mt-10 lg:mt-0 lg:flex-1 lg:max-w-[480px]">
            <div className="px-6 py-5 border border-gray-200/80 dark:border-neutral-800/50 rounded-xl bg-neutral-100/50 dark:bg-[#1B1212]/15 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="text-stone-800 dark:text-neutral-200 font-semibold mb-1">
                Sirenbase/
              </div>
              {aiFileTree.map((node, i) => (
                <TreeNode
                  key={node.name}
                  node={node}
                  isLast={i === aiFileTree.length - 1}
                  prefix=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BuiltWithAISection;
