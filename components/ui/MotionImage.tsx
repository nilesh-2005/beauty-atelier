"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/cn";

type MotionImageProps = ImageProps & {
  wrapperClassName?: string;
  hover?: boolean;
  delay?: number;
};

export function MotionImage({
  wrapperClassName,
  className,
  alt,
  hover = true,
  delay = 0,
  ...props
}: MotionImageProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("group/image overflow-hidden", wrapperClassName)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      <Image
        {...props}
        alt={alt}
        className={cn(
          className,
          hover &&
            "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover/image:scale-[1.03]"
        )}
      />
    </motion.div>
  );
}
