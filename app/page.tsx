import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { EditorialImageBreak } from "@/components/editorial/EditorialImageBreak";
import { Footer } from "@/components/footer/Footer";
import { GallerySection } from "@/components/gallery/GallerySection";
import { HeroSection } from "@/components/hero/HeroSection";
import { Navbar } from "@/components/navbar/Navbar";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { EDITORIAL_MOMENTS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EditorialImageBreak moment={EDITORIAL_MOMENTS[0]} />
        <ServicesSection />
        <EditorialImageBreak moment={EDITORIAL_MOMENTS[1]} align="right" />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
