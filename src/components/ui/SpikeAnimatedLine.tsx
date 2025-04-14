// components/SpikeAnimatedLine.tsx
import React from "react";


const SpikeAnimatedLine = () => {
  return (
    <span className="block relative mb-8 opacity-20 w-full h-3 mt-1 group-hover:animate-spike-line">
      <img
        src="/underline-1.bd2f1d52.svg"
        alt="Spike Underline"
        className="relative -mt-2 w-full left-0  h-3 stroke-secondary animate-none group-hover:animate-draw-line"
      />
    </span>
  );
};

export default SpikeAnimatedLine;
