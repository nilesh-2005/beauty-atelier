export const SALON_NAME = "Beauty Atelier";

export const TAGLINE = "Luxury Hair • Brows • Beauty";

export const RATING = {
  score: 4.8,
  label: "4.8 / 5",
  reviews: "77+ Reviews",
} as const;

export const EXPERIENCE = {
  years: 57,
  label: "57 Years in Business",
} as const;

export const NAVIGATION = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export const ADDRESS = {
  lines: [
    "Behind Chambal Power House",
    "24, Vistar Rd",
    "Near Seeta Devi Hospital",
    "Brij Colony",
    "Hawa Sadak",
    "Nandpuri Colony",
    "Ramnagar",
    "Jaipur",
    "Rajasthan 302019",
  ],
  city: "Jaipur",
  region: "Rajasthan",
  postalCode: "302019",
} as const;

export const OPENING_HOURS = {
  status: "Open",
  opensAt: "9:30 AM",
} as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "",
  },
] as const;

export const HERO_CONTENT = {
  eyebrow: TAGLINE,
  title: SALON_NAME,
  highlight: "57 Years of Excellence",
  description: "Experience timeless beauty in a salon trusted for generations.",
  primaryCta: {
    label: "Book Appointment",
    href: "#contact",
  },
  secondaryCta: {
    label: "Explore Services",
    href: "#services",
  },
  image: {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2400&q=90",
    alt: "A calm luxury salon interior with styling chairs and natural light",
  },
} as const;

export const ABOUT_CONTENT = {
  eyebrow: "A Jaipur beauty atelier",
  title: "Timeless care, shaped by generations of trust.",
  description:
    "Beauty Atelier has been serving Jaipur for over 57 years with premium beauty, hair, and brow services. Our focus is personalized care, luxury experiences, and timeless elegance.",
  image: {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=85",
    alt: "A stylist carefully finishing a polished hair look",
  },
  stats: [
    { value: EXPERIENCE.years.toString(), label: "Years of excellence" },
    { value: RATING.label, label: RATING.reviews },
  ],
} as const;

export const SERVICES = [
  {
    title: "Hair",
    description: "Styling, spa, colour, and treatments tailored with calm precision.",
    services: ["Hair Styling", "Hair Spa", "Hair Colour", "Hair Treatment"],
  },
  {
    title: "Brows",
    description: "Defined, softened, and shaped for a naturally lifted expression.",
    services: [
      "Eyebrow Threading",
      "Eyebrow Shaping",
      "Brow Lamination",
      "Eyebrow Beautification",
    ],
  },
  {
    title: "Lashes",
    description: "Elegant lift and curl services for refined everyday beauty.",
    services: ["Lash Lift", "Lash Perm"],
  },
  {
    title: "Bridal & Beauty",
    description: "Considered makeup and facial rituals for moments that matter.",
    services: ["Bridal Makeup", "Facials"],
  },
] as const;

export const SERVICES_IMAGE = {
  src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1600&q=85",
  alt: "Elegant salon styling tools prepared for a hair service",
} as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    alt: "A refined beauty salon treatment space with warm lighting",
    label: "Salon Rituals",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85",
    alt: "Luxury makeup and beauty preparation details",
    label: "Beauty Details",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=85",
    alt: "A professional beauty artist applying makeup with care",
    label: "Bridal Beauty",
  },
  {
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85",
    alt: "Elegant hair styling tools arranged for salon service",
    label: "Hair Styling",
  },
] as const;

export const EDITORIAL_MOMENTS = [
  {
    eyebrow: "A quieter kind of luxury",
    title: "Beauty care composed around time, trust, and touch.",
    image: {
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=2400&q=90",
      alt: "A refined salon wash and styling space with soft natural light",
    },
  },
  {
    eyebrow: "The finishing ritual",
    title: "Polished details, natural light, and a calm sense of occasion.",
    image: {
      src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=2400&q=90",
      alt: "A beauty preparation moment with brushes and soft salon textures",
    },
  },
] as const;

export const REVIEWS = [
  {
    quote:
      "The care feels personal, unhurried, and beautifully refined. Beauty Atelier has the quiet confidence of a salon that has earned its reputation over generations.",
    author: "A Jaipur Client",
  },
  {
    quote:
      "Warm service, polished results, and a calm atmosphere. It feels less like an appointment and more like a considered beauty ritual.",
    author: "Regular Guest",
  },
  {
    quote:
      "From brows to hair, every detail is handled with patience and taste. The experience feels premium without ever feeling loud.",
    author: "Beauty Atelier Guest",
  },
] as const;

export const CONTACT_CONTENT = {
  eyebrow: "Visit the atelier",
  title: "Book your luxury salon experience today.",
  description:
    "Step into a calm Jaipur salon dedicated to hair, brows, lashes, bridal beauty, and timeless personal care.",
  cta: {
    label: "Book Appointment",
    href: "#contact",
  },
  image: {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=85",
    alt: "A warm, polished salon interior prepared for clients",
  },
} as const;
