import Image from "next/image";
import React from "react";

const WorkCard = () => {
  const techStacks = ["React.js", "•", "Typescript", "•", "Material UI"];
  return (
    <div className="flex w-[1100px] h-[400px] rounded-lg  bg-transparent border-[1px] border-gray-200 mb-4">
      <div className="CardInfo w-[550px] h-[400px] flex flex-col">
        <h1 className="mt-[40px] ml-[40px] text-3xl font-bold">Parallax UI</h1>
        <div className="w-[360px] h-[180px]">
          <p className="mt-[20px] ml-[40px] text-md font-semibold">
            ParallaxUI lets users create customizable, multi-layer designs with
            parallax effects, and export the code for seamless integration.
          </p>
        </div>
        <ul className="inline-flex ml-[30px]">
          {techStacks.map((teckStack) => (
            <li className="mx-[10px] font-semibold">{teckStack}</li>
          ))}
        </ul>
      </div>
      <div className="Image flex w-[550px] h-[400px] justify-start items-center">
        <Image
          src="/images/PU1.png"
          width="500"
          height="312"
          alt="pic"
          className="rounded-lg drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default WorkCard;
