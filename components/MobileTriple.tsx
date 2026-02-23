import React from "react";

import Image from "next/image";

interface MobileTripleProps {
  images: string[];
  className?: string;
}

const MobileTriple = ({ images, className = "" }: MobileTripleProps) => {
  return (
    <div className="flex gap-3 w-full">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          width={270}
          height={480}
          alt="Mobile screenshot"
          className={`flex-1 min-w-0 h-auto rounded-lg ${className}`}
        />
      ))}
    </div>
  );
};

export default MobileTriple;
