# Gaurav Chavan — Portfolio

A dark-themed, motion-driven portfolio site for Gaurav Chavan (Designer, Social Media Manager & Marketer), built with React + TypeScript + Tailwind CSS + Framer Motion.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## What to customize before publishing

- **Hero portrait** (`src/components/HeroSection.tsx`): replace the placeholder "GC" gradient panel with your own photo.
- **Marquee tiles / project panels**: currently styled gradient placeholders with labels — swap in real screenshots of your work (`src/components/MarqueeSection.tsx`, `src/components/ProjectsSection.tsx`).
- **Contact email**: update the `mailto:` link in `src/components/ContactSection.tsx`.
- **Copy**: About text, service descriptions, and project names are in `AboutSection.tsx`, `ServicesSection.tsx`, and `ProjectsSection.tsx` — tweak to match your exact experience.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS
- Framer Motion (scroll-driven reveals, sticky-stacking project cards, magnetic hover)
- Lucide React (icon set, available if you want to add icons)
