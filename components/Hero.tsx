import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center border-b">
      <div className="relative pb-20">
        <h5 className="text-xl text-gray-400 font-medium">Software Engineer</h5>
        <h1 className="text-title text-black-title">John Penafiel</h1>
      </div>
      <div className="absolute align-baseline bottom-36 right-40 text-lg font-normal text-gray-500">
        <div className="absolute flex item-center border-l border-l-gray-400 w-px h-5"></div>
        <p className="pl-1">I solve, I create.</p>
        <a href="#about" className="pl-5 underline hover:text-gray-900">
          More about me →
        </a>
      </div>
    </div>
  );
};

export default Hero;
