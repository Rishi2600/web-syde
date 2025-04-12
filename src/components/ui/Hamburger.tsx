'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function Hamburger({ isOpen, toggle }: HamburgerProps) {
  return (
    <button
      onClick={toggle}
      className="relative w-8 h-8 flex flex-col justify-center items-center group z-50"
      aria-label="Toggle menu"
    >
      <motion.span
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute w-6 h-[2px] bg-accent rounded origin-center"
      />
      <motion.span
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 8,
          opacity: isOpen ? 1 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute w-6 h-[2px] bg-accent rounded origin-center"
      />
    </button>
  );
}
