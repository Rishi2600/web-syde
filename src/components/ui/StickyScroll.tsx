"use client";

import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";



// TODO: visit again and make it perfect 
type ScrollItem = {
  title: string;
  description: string;
  category: string;
  image: string;
  mentor: string;
};

type StickyScrollProps = {
  items: ScrollItem[];
  buttonText?: string;
  onButtonClick?: () => void;
};

const StickyScroll: React.FC<StickyScrollProps> = ({
  items,
  buttonText = "View More",
  onButtonClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = container.scrollHeight - viewportHeight;

      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - container.offsetTop) / scrollableHeight)
      );

      const newIndex = Math.min(
        items.length - 1,
        Math.floor(progress * items.length)
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: `${items.length * 100}vh` }}>
      {/* Sticky Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-primary overflow-hidden">

        <div className="flex flex-col container md:flex-row py-12 w-full items-center">

          {/* Left Content */}
          <div className="flex-1 flex-col relative h-[300px] justify-center text-secondary overflow-hidden">
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out w-full ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-10 pointer-events-none"
                }`}
              >
                <div className="text-lg mb-5 font-normal leading-6">{item.category}</div>
                <div className="text-4xl font-medium mb-5 leading-normal">{item.title}</div>
                <p className="text-lg -mt-4 mb-5 opacity-50 transition-all ease-in-out duration-300 hover:text-accent hover:opacity-100">{item.description}</p>
                <div className="py-6">
                  <Button variant="outline">
                    {buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image with Clip Reveal */}
          <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden">
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeIndex === index ? "opacity-100 z-10 pointer-events-auto" 
                                        : "opacity-0 z-0 pointer-events-none"
                }`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  clipPath:
                    activeIndex === index
                      ? "circle(100% at 50% 50%)"
                      : "circle(0% at 50% 50%)",
                  transition: "clip-path 1s ease, opacity 0.7s",
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
