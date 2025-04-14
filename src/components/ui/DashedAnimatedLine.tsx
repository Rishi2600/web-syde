// components/SpikeAnimatedLine.tsx
import React from "react";

const DashedAnimatedLine = () => {
  return (
    <span className="block relative mb-8 w-full h-3 mt-1">
      <svg
        className="w-full h-full -mt-2 stroke-secondary group-hover:animate-draw-line"
        viewBox="0 0 101 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8C26.8976 4.05438 86.7639 -1.37464 129.225 2.54023C164.255 5.73599 177.798 9.45655 204.712 9.45655C228.991 9.45655 270.457 2.54023 302.092 2.54023C333.727 2.54023 372.244 5.73599 404 9.45655"
          stroke="secondary"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default DashedAnimatedLine;