# Beauty Atelier Website Setup

Before writing ANY code, read and follow these files:

- docs/Design.md
- docs/Brand.md
- docs/Content.md
- docs/Rules.md
- docs/Todo.md

These documents are the source of truth. If there is any conflict between your generated code and these documents, always follow the documentation.

---

## Goal

We are building a premium luxury salon website called **Beauty Atelier**.

This is NOT a SaaS website.

This is NOT a dashboard.

This is NOT a startup landing page.

This is NOT an AI-generated template.

The design should feel handcrafted, elegant, premium, spacious, editorial and timeless.

Primary inspiration:

https://serenityhairblaxland.com.au/

Take inspiration only from:

- typography
- spacing
- layout hierarchy
- premium feeling

Do NOT copy the website.

---

# Current Status

The project has already been created using:

- Next.js 15
- App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- ESLint

Documentation already exists inside the docs folder.

---

# Your Task

Do NOT create the homepage.

Do NOT create the hero section.

Do NOT create the navbar.

Instead, build the project foundation.

---

## 1. Clean the project

Remove all default Next.js demo code.

Replace app/page.tsx with a minimal placeholder page.

Keep only a simple "Coming Soon" page for now.

---

## 2. Configure Fonts

Use next/font/google.

Fonts:

Heading:
Cormorant Garamond

Body:
Inter

Set them globally inside app/layout.tsx.

---

## 3. Create Global Theme

Configure globals.css.

Create a premium design system.

Use CSS variables where appropriate.

Background:

#F8F6F2

Primary:

#111111

Muted:

#777777

Border:

#E8E4DD

Gold Accent:

#B89A5E

Create good typography defaults.

Enable smooth scrolling.

Improve text rendering.

Create beautiful text selection.

Create a premium scrollbar.

---

## 4. Create Folder Structure

Inside components create:

components/

layout/
ui/
navbar/
hero/
about/
services/
gallery/
reviews/
contact/
footer/

---

## 5. Create Base Components

Inside components/layout create:

Container.tsx

Section.tsx

PageWrapper.tsx

Inside components/ui create:

Heading.tsx

SectionTitle.tsx

PrimaryButton.tsx

Each component should:

- be reusable
- fully typed
- accessible
- responsive
- follow Design.md

---

## 6. Setup Utility Files

Inside lib create:

constants.ts

Store:

Salon Name

Tagline

Rating

Experience

Navigation

Address

Opening Hours

Social Links

cn.ts

If not already existing, configure the Tailwind class merge helper.

---

## 7. Prepare Assets

Create:

public/images/

hero/

gallery/

branding/

services/

team/

No placeholder images yet.

---

## 8. Project Quality

Everything must be:

- clean
- scalable
- reusable
- strongly typed
- responsive
- production ready

Avoid duplicated code.

Avoid inline styles.

Prefer reusable abstractions.

---

## 9. Do NOT

Do NOT create:

Navbar

Hero

Footer

About

Services

Gallery

Reviews

Contact

Booking

Animations

Those will be implemented later.

---

## 10. Deliverables

After completing the setup:

- explain every change
- show the new folder structure
- explain why each component exists
- ensure there are no lint errors
- ensure the project builds successfully

Do not move to the next phase automatically.

Wait for approval before creating any visual sections.