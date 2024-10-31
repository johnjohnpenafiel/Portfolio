import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col border-b">
      <div className="flex flex-col h-3/4 text-center justify-end">
        <h5 className="sm:text-xl text-gray-400 font-kodchasan">
          Software Engineer
        </h5>
        <h1 className="lg:text-title sm:text-5xl text-4xl text-black-title mb-36">
          John Penafiel
        </h1>
      </div>
      <div className="flex items-top pt-10 text-lg font-normal text-gray-500">
        <div className="flex ml-[75.11%] w-px border-l border-gray-400 h-6 mr-4"></div>
        <div className="flex flex-col text-gray-600">
          <p>I solve, I create.</p>
          <div className="flex">
            <a href="#about" className="underline hover:text-gray-900">
              More about me
            </a>
            <div className="px-2">→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
