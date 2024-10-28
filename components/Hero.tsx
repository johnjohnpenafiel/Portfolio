import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-63px)] flex items-center justify-center text-center">
      <div className="absolute top-[63px] bottom-0 left-[50%] w-[1px] border-l border-dotted border-gray-300 z-0"></div>
      <div className="relative z-10">
        <h5 className="text-lg text-gray-400 font-mono mb-4">
          Software Engineer
        </h5>
        <h1 className="text-xl text-black-title">John Penafiel</h1>
      </div>
    </div>
  );
};

export default Hero;
