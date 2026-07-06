"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

export function AnimatedStars() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-8 flex items-center gap-3" aria-label="Five star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.span
          key={index}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.86 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.06 }}
        >
          <Star aria-hidden="true" className="size-4 fill-gold text-gold" />
        </motion.span>
      ))}
    </div>
  );
}
