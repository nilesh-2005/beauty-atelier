import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { AnimatedStars } from "@/components/ui/AnimatedStars";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { REVIEWS } from "@/lib/constants";

export function ReviewsSection() {
  return (
    <Section id="reviews" className="bg-primary text-primary-foreground">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Reviews
            </p>
            <Heading as="h2" size="lg" className="mt-5 text-white">
              Trusted beauty care, carried by generations of clients.
            </Heading>
            <AnimatedStars />
            <p className="mt-5 font-heading text-5xl leading-none text-white">
              <AnimatedNumber value={4.8} decimals={1} /> / 5
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/62">
              <AnimatedNumber value={77} suffix="+ Reviews" />
            </p>
          </Reveal>

          <div className="grid gap-5">
            {REVIEWS.map((review, index) => (
              <Reveal key={review.author} delay={index * 0.07} y={18}>
                <figure className="border-b border-white/15 pb-8">
                  <blockquote className="font-heading text-2xl leading-snug text-white sm:text-4xl sm:leading-tight">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {review.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
