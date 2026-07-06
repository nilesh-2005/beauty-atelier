"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MotionDividerProps = {
  delay?: number;
};

type MotionListItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionDivider({ delay = 0 }: MotionDividerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="absolute bottom-0 left-0 h-px w-full origin-left bg-border"
      initial={prefersReducedMotion ? false : { scaleX: 0 }}
      whileInView={prefersReducedMotion ? undefined : { scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    />
  );
}

export function MotionListItem({
  children,
  className,
  delay = 0,
}: MotionListItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.li>
  );
}
