import { ArrowRight, MapPin } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { MotionImage } from "@/components/ui/MotionImage";
import { Reveal } from "@/components/ui/Reveal";
import { ADDRESS, CONTACT_CONTENT, OPENING_HOURS } from "@/lib/constants";

export function ContactSection() {
  return (
    <Section id="contact" spacing="spacious">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden border border-border bg-card lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-6 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                {CONTACT_CONTENT.eyebrow}
              </p>
              <Heading as="h2" size="xl" className="mt-5 max-w-2xl">
                {CONTACT_CONTENT.title}
              </Heading>
              <p className="mt-7 max-w-xl text-lg leading-9 text-muted-foreground">
                {CONTACT_CONTENT.description}
              </p>
              <a
                href={CONTACT_CONTENT.cta.href}
                className="premium-button mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary/85 sm:w-auto"
              >
                {CONTACT_CONTENT.cta.label}
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>

            <aside className="grid bg-background lg:grid-rows-[1fr_auto]">
              <MotionImage
                wrapperClassName="relative min-h-[360px] bg-muted lg:min-h-0 interactive-image"
                src={CONTACT_CONTENT.image.src}
                alt={CONTACT_CONTENT.image.alt}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="p-6 sm:p-12">
                <div className="flex size-12 items-center justify-center rounded-sm border border-border bg-card text-gold">
                  <MapPin aria-hidden="true" className="size-5" />
                </div>
                <h3 className="mt-8 font-heading text-4xl leading-tight text-primary">
                  Jaipur, Rajasthan
                </h3>
                <Reveal delay={0.04} y={14}>
                  <address className="mt-6 columns-1 not-italic sm:columns-2 lg:columns-1">
                    {ADDRESS.lines.map((line) => (
                      <span key={line} className="block text-base leading-8 text-muted-foreground">
                        {line}
                      </span>
                    ))}
                  </address>
                </Reveal>
                <Reveal delay={0.08} y={14}>
                  <div className="mt-10 border-t border-border pt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Opening Hours
                    </p>
                    <p className="mt-3 text-lg text-muted-foreground">
                      {OPENING_HOURS.status} from {OPENING_HOURS.opensAt}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.12} y={14}>
                  <iframe
                    title="Beauty Atelier location map"
                    src="https://www.google.com/maps?q=Beauty%20Atelier%2024%20Vistar%20Rd%20Near%20Seeta%20Devi%20Hospital%20Jaipur%20Rajasthan%20302019&output=embed"
                    className="mt-10 h-56 w-full border border-border sm:h-64"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Reveal>
              </div>
            </aside>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
