import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { MotionImage } from "@/components/ui/MotionImage";
import { Reveal } from "@/components/ui/Reveal";
import { GALLERY_IMAGES } from "@/lib/constants";

export function GallerySection() {
  const [featureImage, ...supportingImages] = GALLERY_IMAGES;

  return (
    <Section id="gallery" spacing="spacious" className="overflow-hidden">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Gallery
            </p>
            <Heading as="h2" size="xl" className="mt-5 max-w-3xl">
              A visual language of quiet polish and natural beauty.
            </Heading>
          </Reveal>
          <Reveal delay={0.08} className="max-w-md">
            <p className="text-lg leading-9 text-muted-foreground">
              Editorial details, calm interiors, and beauty rituals designed to feel
              composed from arrival to finish.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="group/gallery relative min-h-[360px] overflow-hidden bg-muted sm:min-h-[520px]">
            <MotionImage
              wrapperClassName="absolute inset-0 interactive-image"
              src={featureImage.src}
              alt={featureImage.alt}
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 ease-out group-hover/gallery:bg-primary/24" />
            <div className="absolute bottom-5 left-5 rounded-sm border border-white/20 bg-primary/70 px-4 py-2 opacity-100 transition-opacity duration-500 ease-out sm:bottom-6 sm:left-6 sm:px-5 sm:py-3 md:opacity-0 md:group-hover/gallery:opacity-100">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {featureImage.label}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {supportingImages.map((image, index) => (
              <Reveal
                key={image.src}
                delay={(index + 1) * 0.06}
                className="group/gallery relative min-h-[220px] overflow-hidden bg-muted sm:min-h-[250px]"
              >
                <MotionImage
                  wrapperClassName="absolute inset-0 interactive-image"
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 ease-out group-hover/gallery:bg-primary/24" />
                <div className="absolute bottom-4 left-4 rounded-sm border border-white/20 bg-primary/70 px-4 py-2 opacity-100 transition-opacity duration-500 ease-out md:bottom-5 md:left-5 md:opacity-0 md:group-hover/gallery:opacity-100">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    {image.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
