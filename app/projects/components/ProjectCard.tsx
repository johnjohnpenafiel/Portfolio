import React from "react";
import { Project, ProjectDetail, ProjectLink } from "@/data/projectPageData";

interface Props {
  name: string;
  title: string;
  description: string;
  details: ProjectDetail[];
  links: ProjectLink[];
}

const ProjectCard = ({ name, title, description, details, links }: Props) => {
  return (
    <div className="xl:w-1/2 mx-10 md:ml-16">
      {/* PROJECT NAME */}
      <div className="text-sm lg:text-md font-semibold text-stone-500 dark:text-neutral-400/90">
        {name}
      </div>
      {/* PROJECT TITLE */}
      <div className="text-md md:text-2xl xl:text-3xl font-black text-stone-800 dark:text-neutral-300">
        {title}
      </div>
      {/* PROJECT DESCRIPTION */}
      <div className="mt-4 mb-8 font-light text-sm md:text-base lg:text-md text-pretty dark:text-neutral-200">
        {description}
      </div>
      {/* PROJECT DETAILS */}
      <div className="mt-4 text-pretty">
        {details.map((detail) => (
          <div key={detail.name} className="flex text-xm md:text-sm mb-1">
            <p className="mr-1 font-semibold dark:text-nuetral-100">
              {detail.name}
            </p>
            <p className="dark:text-neutral-100 dark:font-normal">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
      {/* PROJECT LINKS */}
      <div className="flex mt-8">
        {links?.map((link) => (
          <div
            key={link.name}
            className={`mr-5 ${link.url || "cursor-not-allowed"}`}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center text-sm text-stone-500 dark:text-neutral-400 border border-neutral-500 rounded-md md:border-none ${
                link.url && "hover:text-stone-700 dark:hover:text-neutral-200"
              }`}
            >
              <div className="flex m-2">
                {React.createElement(link.icon, {
                  className: "mr-2 text-lg",
                })}
                <p>{link.name}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
