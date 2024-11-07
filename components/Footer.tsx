import React from "react";

interface Props {
  children: React.ReactNode;
}

const Footer = ({ children }: Props) => {
  return (
    <div>
      {children}
      <div className="flex justify-around h-[250px]">
        <div className="grid-rows-2">
          <div>Projects</div>
          <div>Parallax UI</div>
          <div> Next Game</div>
        </div>
        <div className="grid-rows-2">
          <div>Contact</div>
          <div>Linkedin</div>
          <div>Mail</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
