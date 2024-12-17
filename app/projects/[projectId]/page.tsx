"use client";

import React from "react";

import { useParams } from "next/navigation";
import Image from "next/image";

import { projects } from "@/data";

const Projects = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  return (
    <div className="h-screen -mt-[64px] ml-5 bg-[#f9fafb]">
      <div className="mx-10 pt-24">
        {/* Parallax Testing */}

        <div>
          <iframe
            src="http://localhost:5173/preview?data=%7B%22layers%22%3A%5B%7B%22uid%22%3A1734408505476%2C%22name%22%3A%22Layer%201%22%2C%22height%22%3A500%2C%22width%22%3A500%2C%22color%22%3A%22darkgray%22%2C%22depth%22%3A50%2C%22x%22%3A0%2C%22y%22%3A0%7D%2C%7B%22uid%22%3A1734408652339%2C%22name%22%3A%22Layer%202%22%2C%22height%22%3A300%2C%22width%22%3A300%2C%22color%22%3A%22darkred%22%2C%22depth%22%3A150%2C%22x%22%3A100%2C%22y%22%3A30%7D%2C%7B%22uid%22%3A1734408801203%2C%22name%22%3A%22Layer%203%22%2C%22height%22%3A100%2C%22width%22%3A200%2C%22color%22%3A%22black%22%2C%22depth%22%3A90%2C%22x%22%3A35%2C%22y%22%3A350%7D%2C%7B%22uid%22%3A1734408857809%2C%22name%22%3A%22Layer%204%22%2C%22height%22%3A100%2C%22width%22%3A200%2C%22color%22%3A%22gray%22%2C%22depth%22%3A90%2C%22x%22%3A270%2C%22y%22%3A350%7D%2C%7B%22uid%22%3A1734408986503%2C%22name%22%3A%22Layer%205%22%2C%22height%22%3A20%2C%22width%22%3A400%2C%22color%22%3A%22darkgreen%22%2C%22depth%22%3A130%2C%22x%22%3A53%2C%22y%22%3A385%7D%5D%2C%22canvasSize%22%3A%7B%22width%22%3A600%2C%22height%22%3A600%7D%7D"
            width="600"
            height="600"
          ></iframe>
        </div>

        {/* Parallax Testing */}

        {/* <div className="text-4xl font-bold">{project?.title}</div>
        <ul className="inline-flex my-2 || text-sm">
          {project?.stack.map((s, index) => (
            <li key={index} className="text-stone-700 font-semibold ">
              {s}
              {index < project.stack.length - 1 && (
                <span className="mx-2">•</span>
              )}
            </li>
          ))}
        </ul>
        <div className="h-[515px] w-[816px] border-4">
          <Image
            src="/images/JackSpot.png"
            height={510}
            width={816}
            alt="pic"
          />
        </div>
        <div className="w-1/2 mt-4">{project?.description}</div> */}
      </div>
    </div>
  );
};

export default Projects;
