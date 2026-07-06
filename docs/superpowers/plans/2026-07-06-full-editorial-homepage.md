# Full Editorial Homepage Implementation Plan

## Quality Bar (Non-Negotiable)

This website is for a luxury salon.

Do NOT generate a generic SaaS landing page or an AI-template layout.

Every section must feel:

- Editorial
- Luxury
- Spacious
- Photography-first
- Timeless
- Boutique
- High-end

The design should prioritize typography, whitespace, and imagery over decorative effects.

When in doubt, remove elements instead of adding more.

## Avoid

- Giant gradient backgrounds
- Glassmorphism
- Neon colors
- Oversized icons
- Floating cards everywhere
- Random animations
- Generic marketing copy
- Cookie-cutter hero layouts
- Repeated border radii everywhere
- Excessive shadows

Images should occupy significant visual space.

Prefer large edge-to-edge photography.

Do not create tiny thumbnails or icon-heavy layouts.

Use elegant cropping and generous whitespace.

Think like a senior product designer from an award-winning digital agency.

Optimize every spacing decision.

Every section should feel intentionally composed.

Do not simply stack sections vertically.




> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-quality Beauty Atelier homepage with a responsive navbar, cinematic hero, editorial supporting sections, image-led gallery, reviews, contact CTA, and footer.

**Architecture:** Keep content in `lib/constants.ts`, keep each homepage section in its matching `components/*` folder, and compose the page in `app/page.tsx`. Client-side behavior is limited to navbar scroll/mobile state and subtle Framer Motion reveals.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, shadcn-compatible UI foundation, Framer Motion, Lucide icons, and `next/image`.

---

### Task 1: Content And Image Model

**Files:**
- Modify: `lib/constants.ts`
- Modify: `next.config.ts`

- [ ] Add structured content for hero, about, services, gallery images, review quotes, and contact CTA.
- [ ] Store image URLs once in constants and allow `images.unsplash.com` in Next image config.
- [ ] Keep existing salon identity constants as the source for repeated brand values.

### Task 2: Navigation And Hero

**Files:**
- Create: `components/navbar/Navbar.tsx`
- Create: `components/hero/HeroSection.tsx`
- Modify: `app/page.tsx`

- [ ] Implement transparent-to-solid navbar with centered desktop links, right CTA, accessible mobile menu, Escape handling, and keyboard-friendly controls.
- [ ] Build a cinematic full-viewport hero.

Requirements:

- Full height (100svh)
- Premium photography
- Editorial typography
- Strong visual hierarchy
- Two elegant CTAs
- Minimal content
- Image should dominate the experience

The hero should immediately communicate luxury without relying on effects. using `next/image`, real content, and restrained Framer Motion fade/fade-up animation.

### Task 3: Editorial Homepage Sections

**Files:**
- Create: `components/about/AboutSection.tsx`
- Create: `components/services/ServicesSection.tsx`
- Create: `components/gallery/GallerySection.tsx`
- Create: `components/reviews/ReviewsSection.tsx`
- Create: `components/contact/ContactSection.tsx`
- Create: `components/footer/Footer.tsx`
- Modify: `app/page.tsx`

- [ ] Build the page sections with semantic HTML, reusable base components, real copy, no lorem ipsum, and no unsupported feature promises.
- [ ] Keep the layout spacious, image-led, editorial, and aligned to the documented palette.
Each section must have its own visual rhythm.

Alternate image/text composition.

Avoid repetitive layouts.

Use asymmetry where appropriate.

Maintain consistent spacing throughout.

Every section should feel intentionally designed rather than generated.

### Task 4: Verification

**Files:**
- Inspect all changed files

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Request the homepage from the dev server or start one if needed and confirm HTTP 200.

## Acceptance Criteria

The homepage is complete only if:

- No section feels generic.
- Typography is consistent.
- Spacing is visually balanced.
- Images are the primary storytelling element.
- Mobile layout feels intentional.
- Lighthouse performance remains high.
- Lint passes.
- Build passes.
- No duplicated code.
- No unnecessary client components.
