import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" h-screen flex flex-col border-b border-gray-200/80 dark:border-neutral-900/50 overflow-hidden">
      {/* Beam Effect Container */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Left Beam */}
        <div className="absolute inset-y-0 left-[25%] md:left-[28.5%] w-px -z-10">
          <div className="absolute top-0 left-0 w-full h-0 border-r border-dashed border-[rgb(210,210,210)] dark:border-[rgb(49,49,49)] animate-beam shadow-[0_0_2px_rgba(250,250,250,1),0_0_4px_rgba(245,245,245,1)] dark:shadow-[0_0_4px_rgba(30,30,30,1)] [animation-delay:0.7s]"></div>
        </div>
        {/* Middle Beam */}
        <div className="absolute inset-y-0 left-[50%] w-px -z-10">
          <div className="absolute top-0 left-0 w-full h-0 border-r border-dashed border-[rgb(210,210,210)] dark:border-[rgb(49,49,49)] animate-beam shadow-[0_0_2px_rgba(250,250,250,1),0_0_4px_rgba(245,245,245,1)] dark:shadow-[0_0_4px_rgba(30,30,30,1)] [animation-delay:0.2s]"></div>
        </div>
        {/* Right Beam */}
        <div className="absolute inset-y-0 left-[75%] md:left-[71.5%] w-px -z-10">
          <div className="absolute top-0 left-0 w-full h-0 border-r border-dashed border-[rgb(210,210,210)] dark:border-[rgb(49,49,49)] animate-beam shadow-[0_0_2px_rgba(250,250,250,1),0_0_4px_rgba(245,245,245,1)] dark:shadow-[0_0_4px_rgba(30,30,30,1)] [animation-delay:0.4s]"></div>
        </div>
      </div>

      {/* Existing Hero Content */}

      <div className="flex flex-col h-3/4 text-center justify-end">
        <h5 className="sm:text-xl text-gray-400 font-kodchasan">
          Software Engineer
        </h5>
        <h1 className="lg:text-title sm:text-5xl text-4xl text-neutral-900 dark:text-neutral-200 mb-36">
          John Penafiel
        </h1>
      </div>
      <div className="lg:flex hidden items-top pt-10 text-lg font-normal text-gray-500">
        <div className="flex ml-[75.12%] w-px border-l border-gray-400 h-6 mr-4"></div>
        <div className="flex flex-col text-gray-700 dark:text-neutral-200 text-base">
          <p>I solve, I create.</p>
          <div className="flex group">
            <Link
              href="/about"
              className="underline group-hover:text-gray-900 dark:group-hover:text-neutral-400"
            >
              More about me
            </Link>
            <div className="px-1 group-hover:text-gray-900 dark:group-hover:text-neutral-400 group-hover:scale-105">
              →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
