# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a personal portfolio website built with Next.js 15 (App Router), React 19-rc, TypeScript, and Tailwind CSS. It's a static site with no backend.

### Key Directories

- **app/**: Next.js App Router pages and layouts
  - `layout.tsx`: Root layout with Navbar, Footer, SpotifyPlayer, and decorative grid lines
  - `providers.tsx`: Theme provider using next-themes
  - `projects/[projectId]/`: Dynamic project detail pages
- **components/**: Shared UI components (Hero, Navbar, Footer, ThemeSwitch, SpotifyPlayer)
- **hooks/**: Custom React hooks for intersection observer animations
- **data/**: Static TypeScript data files for projects, about content, and resume

### Routing

- `/` - Home page with Hero and ProjectSection
- `/about` - About page with AboutCard components
- `/projects/[projectId]` - Dynamic project detail pages

### Data Architecture

All portfolio content is static and stored in `/data` as typed TypeScript files:
- `projectCardData.tsx`: Home page project cards
- `projectPageData.tsx`: Detailed project information for detail pages
- `aboutData.tsx`: About section content
- `resumeData.tsx`: Resume link

### Styling

- Tailwind CSS with class-based dark mode (`darkMode: "class"`)
- Custom colors and fonts defined in `tailwind.config.ts`
- Custom "beam" animation for Hero section
- Path alias: `@/*` points to project root

### Animation Patterns

- Custom hooks `useInView` and `useIsVisible` for scroll-triggered animations via IntersectionObserver
- Staggered fade-in effects using setTimeout delays
- Beam animations with CSS keyframes and staggered delays
- ImageCarousel with 10-second auto-rotation

### Component Notes

- All interactive components use `"use client"` directive
- Next/Image used for optimized image loading
- Navbar collapses to hamburger menu on mobile
- SpotifyPlayer is fixed bottom-right with toggle visibility
