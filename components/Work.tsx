import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  const workCards = [1, 2, 3];
  return (
    <div className="h-fit flex flex-col bg-white">
      <div className="flex flex-col items-center mt-16">
        {workCards.map((workcard) => (
          <WorkCard key={workcard} />
        ))}
      </div>
    </div>
  );
};

export default Work;
