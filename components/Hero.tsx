import React from "react";

const Hero = () => {
  return (
    <div className="relative flex h-screen items-center justify-center border-b">
      <div className="relative text-center pb-12">
        <h5 className="sm:text-xl text-gray-400 font-kodchasan">
          Software Engineer
        </h5>
        <h1 className="lg:text-title sm:text-5xl text-4xl transition text-black-title">
          John Penafiel
        </h1>
      </div>
      <div className="absolute flex-col bottom-36 text-lg font-normal text-gray-500 bg-slate-100">
        <div className="flex">
          <div className="border-l border-l-gray-400 w-px h-6 mr-10"></div>
          <p className="">I solve, I create.</p>
        </div>
        <a href="#about" className="underline hover:text-gray-900">
          More about me →
        </a>
      </div>
    </div>
  );
};

export default Hero;
