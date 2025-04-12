'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-2xl font-bold tracking-tight text-accent">
        Web<span className="text-secondary">Syde</span>
      </Link>
    </motion.div>
  );
}