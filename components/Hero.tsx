import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col border-b border-gray-200/80 ">
      <div className="flex flex-col h-3/4 text-center justify-end">
        <h5 className="sm:text-xl text-gray-400 font-kodchasan">
          Software Engineer
        </h5>
        <h1 className="lg:text-title sm:text-5xl text-4xl text-black-title mb-36">
          John Penafiel
        </h1>
      </div>
      <div className="lg:flex hidden items-top pt-10 text-lg font-normal text-gray-500">
        <div className="flex ml-[75.11%] w-px border-l border-gray-400 h-6 mr-4"></div>
        <div className="flex flex-col text-gray-600 text-base">
          <p>I solve, I create.</p>
          <div className="flex group">
            <Link href="/about" className="underline hover:text-gray-900">
              More about me
            </Link>
            <div className="px-1 group-hover:text-gray-900 group-hover:ml-1">
              →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
