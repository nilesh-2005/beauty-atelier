import { MotionImage } from "@/components/ui/MotionImage";

import { Reveal } from "@/components/ui/Reveal";
import { EDITORIAL_MOMENTS } from "@/lib/constants";

type EditorialImageBreakProps = {
  moment: (typeof EDITORIAL_MOMENTS)[number];
  align?: "left" | "right";
};

export function EditorialImageBreak({
  moment,
  align = "left",
}: EditorialImageBreakProps) {
  const textAlignment = align === "right" ? "lg:ml-auto lg:text-right" : "";

  return (
    <section className="relative isolate min-h-[64svh] overflow-hidden bg-primary sm:min-h-[72svh]">
      <MotionImage
        wrapperClassName="absolute inset-0 -z-20 interactive-image"
        src={moment.image.src}
        alt={moment.image.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-primary/42" />
      <div className="mx-auto flex min-h-[64svh] w-full max-w-7xl items-end px-5 py-14 sm:min-h-[72svh] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <Reveal className={`max-w-3xl ${textAlignment}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
            {moment.eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-medium leading-[0.98] text-white sm:text-6xl sm:leading-[0.95] lg:text-7xl">
            {moment.title}
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
