"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Rises into place once when it scrolls into view. Still under reduced motion. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", bounce: 0, duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}
