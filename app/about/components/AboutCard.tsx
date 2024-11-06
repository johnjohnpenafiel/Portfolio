import React from "react";
import { FiPlus } from "react-icons/fi";

interface Props {
  handleClick: (id: number) => void;
  isOpen: boolean;
  id: number;
  category: string;
  content: string;
}

const AboutCard = ({ handleClick, isOpen, id, category, content }: Props) => {
  return (
    <div className="flex flex-col mx-10">
      <div className="flex justify-between py-4 || bg-white border-b">
        <h3 className="px-2 || text-lg font-medium">{category}</h3>
        <button
          onClick={() => handleClick(id)}
          className={`text-2xl text-gray-400 origin-center transition-transform duration-300 
                ${isOpen && "rotate-45"}`}
        >
          <FiPlus />
        </button>
      </div>
      <div
        className={`-mt-1 || transition-transform origin-top duration-500 ease-in-out bg-white border-b 
          ${
            isOpen
              ? "scale-y-100 pointer-events-auto"
              : "scale-y-0 delay-100 pointer-events-none"
          }`}
      >
        <p
          className={`bg-white px-2 pb-3 text-gray-700 font-light transition-opacity ease-in-out 
                ${
                  isOpen
                    ? "opacity-100 delay-300 duration-500"
                    : "opacity-0 duration-200"
                }`}
        >
          {isOpen ? content : ""}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
