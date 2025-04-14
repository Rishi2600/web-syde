// components/SpikeAnimatedLine.tsx
import React from "react";


const CurlAnimatedLine = () => {
  return (
    <span className="block relative mb-8 opacity-20 w-full h-3 mt-1 group-hover:animate-spike-line">
      <img
        src="\underline-3.cf6fc523.svg"
        alt="Curl Underline"
        className="relative -mt-2 w-full left-0  h-3 stroke-secondary animate-none group-hover:animate-draw-line"
      />
    </span>
  );
};

export default CurlAnimatedLine;
