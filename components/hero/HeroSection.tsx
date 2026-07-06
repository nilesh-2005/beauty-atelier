"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { HERO_CONTENT } from "@/lib/constants";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.35], ["0%", "8%"]);
  const initial = prefersReducedMotion ? false : { opacity: 0, y: 24 };
  const animate = prefersReducedMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-primary px-5 pb-12 pt-28 text-white sm:px-8 sm:pb-14 sm:pt-32 lg:px-12 lg:pb-20"
      aria-label="Beauty Atelier introduction"
    >
      <motion.div
        className="absolute inset-0 -z-20"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.08 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ y: prefersReducedMotion ? undefined : imageY }}
      >
        <Image
          src={HERO_CONTENT.image.src}
          alt={HERO_CONTENT.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-primary/45" />
      <div className="absolute inset-x-5 bottom-5 top-24 -z-10 border border-white/15 sm:inset-x-8 sm:bottom-6 lg:inset-x-12" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.42fr)] lg:items-end">
        <div className="max-w-4xl">
          <motion.p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/82"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {HERO_CONTENT.eyebrow}
          </motion.p>
          <motion.h1
            className="font-heading text-[clamp(3.45rem,18vw,11rem)] font-medium leading-[0.86] tracking-normal text-white sm:leading-[0.82]"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
            }}
          >
            {HERO_CONTENT.title.split(" ").map((word) => (
              <motion.span
                key={word}
                className="block"
                variants={{
                  hidden: prefersReducedMotion ? {} : { opacity: 0, y: 34 },
                  show: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.a
              href={HERO_CONTENT.primaryCta.href}
              className="premium-button inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:bg-white/88 sm:w-auto"
              initial={initial}
              animate={animate}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.28 }}
            >
              {HERO_CONTENT.primaryCta.label}
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </motion.a>
            <motion.a
              href={HERO_CONTENT.secondaryCta.href}
              className="premium-button inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/55 px-7 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:border-white hover:bg-white hover:text-primary sm:w-auto"
              initial={initial}
              animate={animate}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.36 }}
            >
              {HERO_CONTENT.secondaryCta.label}
            </motion.a>
          </motion.div>
        </div>

        <motion.aside
          className="max-w-sm border-t border-white/25 pt-6 text-white/86 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
        >
          <p className="font-heading text-3xl leading-tight text-white sm:text-4xl">
            {HERO_CONTENT.highlight}
          </p>
          <p className="mt-4 text-base leading-8 text-white/76">
            {HERO_CONTENT.description}
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
