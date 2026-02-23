import React from "react";

interface CornerFrameProps {
  children: React.ReactNode;
  className?: string;
}

const cornerBase =
  "absolute w-[10%] h-[10%] border-dashed border-neutral-300 dark:border-neutral-600 pointer-events-none";

const CornerFrame = ({ children, className = "" }: CornerFrameProps) => {
  return (
    <div className={`relative p-4 ${className}`}>
      {/* Top-left corner */}
      <div className={`${cornerBase} top-0 left-0 border-t border-l`} />
      {/* Top-right corner */}
      <div className={`${cornerBase} top-0 right-0 border-t border-r`} />
      {/* Bottom-left corner */}
      <div className={`${cornerBase} bottom-0 left-0 border-b border-l`} />
      {/* Bottom-right corner */}
      <div className={`${cornerBase} bottom-0 right-0 border-b border-r`} />
      {children}
    </div>
  );
};

export default CornerFrame;
