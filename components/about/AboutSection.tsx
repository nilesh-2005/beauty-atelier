import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Heading } from "@/components/ui/Heading";
import { MotionImage } from "@/components/ui/MotionImage";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_CONTENT, TAGLINE } from "@/lib/constants";

export function AboutSection() {
  return (
    <Section id="about" spacing="spacious" className="overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal className="relative">
            <MotionImage
              wrapperClassName="relative aspect-[4/5] bg-muted interactive-image"
              src={ABOUT_CONTENT.image.src}
              alt={ABOUT_CONTENT.image.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute -bottom-8 right-6 hidden w-44 border border-border bg-card p-5 sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Since
              </p>
              <p className="mt-2 font-heading text-5xl leading-none text-primary">
                <AnimatedNumber value={57} />
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Years of beauty care in Jaipur
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {ABOUT_CONTENT.eyebrow}
            </p>
            <Heading as="h2" size="xl" className="mt-5 max-w-3xl">
              {ABOUT_CONTENT.title}
            </Heading>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-muted-foreground">
              {ABOUT_CONTENT.description}
            </p>
            <div className="mt-10 grid gap-6 border-y border-border py-8 sm:grid-cols-2">
              {ABOUT_CONTENT.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-5xl leading-none text-primary">
                    {stat.label === "Years of excellence" ? (
                      <AnimatedNumber value={57} />
                    ) : (
                      <AnimatedNumber value={4.8} decimals={1} />
                    )}
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-xl font-heading text-3xl leading-tight text-primary">
              {TAGLINE}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
