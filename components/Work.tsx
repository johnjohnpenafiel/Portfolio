import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  const workCards = [1, 2, 3];
  return (
    <div className="h-fit flex flex-col bg-white">
      <div className="flex mt-10 ml-20 font-bold text-2xl text-gray-400">
        Work
      </div>
      <div className="flex flex-col items-center">
        {workCards.map((workcard) => (
          <WorkCard key={workcard} />
        ))}
      </div>
    </div>
  );
};

export default Work;
