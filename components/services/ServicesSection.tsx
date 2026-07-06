import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { MotionDivider, MotionListItem } from "@/components/ui/MotionPrimitives";
import { MotionImage } from "@/components/ui/MotionImage";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES, SERVICES_IMAGE } from "@/lib/constants";

export function ServicesSection() {
  return (
    <Section id="services" className="bg-card">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <MotionImage
              wrapperClassName="relative min-h-[360px] bg-muted interactive-image sm:min-h-[460px] lg:min-h-[560px]"
              src={SERVICES_IMAGE.src}
              alt={SERVICES_IMAGE.alt}
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
            <div className="mt-8 border-t border-border pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Services
              </p>
              <Heading as="h2" size="lg" className="mt-5">
                Beauty rituals with a refined, personal touch.
              </Heading>
            </div>
          </Reveal>

          <div className="grid border-t border-border">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06} y={18}>
                <article className="group/service relative grid gap-5 py-7 sm:grid-cols-[0.35fr_0.65fr] sm:gap-6 sm:py-10">
                  <MotionDivider delay={index * 0.05} />
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-4xl leading-none text-primary">
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-2 size-5 text-gold transition-transform duration-300 ease-out group-hover/service:translate-x-1 group-hover/service:-translate-y-1"
                    />
                  </div>
                  <div>
                    <p className="max-w-xl text-base leading-8 text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-2">
                      {service.services.map((item, serviceIndex) => (
                        <MotionListItem
                          key={item}
                          className="border-t border-border/80 pt-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                          delay={index * 0.05 + serviceIndex * 0.04}
                        >
                          {item}
                        </MotionListItem>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
