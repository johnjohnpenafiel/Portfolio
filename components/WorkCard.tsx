import React from "react";

interface Props {
  title: string;
  description: string;
  stack: string[];
  image: string;
}

const WorkCard = ({ title, description, stack, image }: Props) => {
  const techStacks = ["React.js", "Typescript", "Material UI"];
  return (
    <div className="flex flex-col w-full md:max-w-[1100px] md:max-h-[400px] h-auto md:flex-row md:h-auto mb-5 || shadow-sm rounded-lg bg-transparent border border-gray-100 overflow-hidden">
      {/* Card Description */}
      <div className="flex flex-col p-5 mx-3 md:justify-center order-3 md:w-1/2 md:order-1">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-sm md:text-md font-semibold text-gray-600">
          {description}
        </p>
        <ul className="inline-flex mt-4 text-sm md:text-lg">
          {stack.map((s, index) => (
            <li key={index} className="font-semibold">
              {s}
              {index < stack.length - 1 && <span className="mx-2">•</span>}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="bg-black text-white rounded p-2">See more</button>
        </div>
      </div>
      {/* Card Image */}
      <div className="flex md:w-1/2 md:h-full md:shrink-1 order-2">
        <img
          src={image}
          alt="Project Picture"
          className="object-contain sm:object-contain h-auto w-full"
        />
      </div>
    </div>
  );
};

export default WorkCard;
