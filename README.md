<div align="center">

# ☀️ Sun-Soaked Living

**A premium solar energy marketing site — warm, editorial, and conversion-focused.**

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## Overview

**Sun-Soaked Living** is a residential solar energy marketing website designed with an editorial, lifestyle-first aesthetic. Instead of industrial jargon and hard-sell tactics, the experience leans into warmth, comfort, and the feeling of energy independence — using rich typography, ambient motion, and a bespoke amber/cream color system.

The project is a **Next.js 16 App Router** application with full TypeScript, server-rendered pages, and isolated client islands for interactivity.

---

## Pages & Features

### `/` — Home
The primary landing page. Includes:
- **Hero** — Full-bleed headline with an animated CTA button featuring a shimmer sweep effect on hover.
- **Hero Image** — Atmospheric photograph with a subtle `hover:rotate` 3D tilt.
- **Benefits Grid** — Four key selling points (Silent Operation, Grid Independence, Property Value, Zero Maintenance) with Lucide icons.
- **Testimonials** — Customer quotes with avatar thumbnails sourced via `i.pravatar.cc`.
- **Marquee Banner** — An infinitely scrolling trust-signal strip driven by a pure CSS `@keyframes marquee` animation.
- **CTA Section** — Final conversion section linking to the savings calculator.

### `/process` — Our Process
A visual timeline of the three-stage installation journey:

| Step | Title | Hook |
|------|-------|------|
| 01 | The Design | Satellite imagery; no one touches your roof. |
| 02 | The Permit | HOAs, utility interconnects — handled for you. |
| 03 | The Install | "White Glove" crew; done before dinner. |

Each step alternates layout (image left / right) on desktop, collapsing to a single column on mobile. A vertical gradient line runs down the centre on `md+` screens.

### `/savings` — Savings Calculator
An interactive financial visualisation page built as a **client island** inside an otherwise server-rendered shell.

- **Bill Slider** — Range input from $50 → $800/month.
- **Sunlight Selector** — Full Sun (85% offset) vs. Partial Shade (70% offset).
- **Annual Savings Output** — Derived in real-time from `bill × 12 × factor`.
- **Contextual Tier Card** — Savings are mapped to a human-relatable milestone (morning lattes → road trips → college savings).
- **Social Proof Cluster** — Avatar stack with a live "X families joined this month" counter.
- **Trust Indicators** — Zero Emissions · Property Value · 25-Year Warranty.

### Quote Modal (Global)
A multi-step, portal-rendered conversion form accessible from any CTA button across the site:

1. **Step 1 — Location** — Address/city input to seed the system design.
2. **Step 2 — Home Details** — Bill range + roof sunlight selectors.
3. **Step 3 — Contact** — Name, email, and phone number.
4. **Confirmation** — Animated success state; advisor follow-up within 24 hours.

Progress is tracked via an animated progress bar. All heavy sub-components (`ModalBackground`, `Header`) are wrapped in `React.memo` to eliminate unnecessary re-renders on field input.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, RSC) |
| UI Library | [React 19](https://react.dev) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config via `@theme`) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | [Newsreader](https://fonts.google.com/specimen/Newsreader) (display) · [Satoshi](https://www.fontshare.com/fonts/satoshi) (body) |
| Package Manager | [pnpm](https://pnpm.io) |
| Linting | ESLint 9 + `eslint-config-next` |

---

## Design System

The visual language is defined entirely via **Tailwind v4's `@theme` block** in `src/app/globals.css`, making every token available as a utility class with zero configuration overhead.

### Color Palette

| Token | Value | Role |
|-------|-------|------|
| `primary` | `#d97706` (Amber 600) | CTAs, highlights, active states |
| `primary-hover` | `#b45309` (Amber 700) | Button hover |
| `primary-light` | `#fef3c7` (Amber 100) | Subtle backgrounds, tags |
| `bg` | `#fffbeb` (Amber 50) | Page background |
| `surface` | `#fef3c7` (Amber 100) | Card / input surfaces |
| `text-main` | `#451a03` (Amber 950) | Body copy |
| `text-muted` | `#92400e` (Amber 700) | Secondary copy |
| `accent` | `#059669` (Emerald 600) | Trust icons, eco indicators |

### Typography

- **Display** (`font-display`) — *Newsreader*, a high-contrast serif loaded via `next/font/google`. Used for all headings, leveraging its italic variant for editorial emphasis.
- **Body** (`font-body`) — *Satoshi*, a geometric sans-serif loaded via the Fontshare CDN. Used for all UI copy.

### Motion

All animations are declared as custom properties in `@theme` and referenced via `animate-*` utilities:

| Utility | Keyframe | Purpose |
|---------|----------|---------|
| `animate-fade-in-up` | `fadeInUp` | Section entrance, staggered with `[animation-delay]` |
| `animate-fade-in` | `fadeIn` | Subtle opacity reveals |
| `animate-scale-in` | `scaleIn` | Card/modal mount |
| `animate-shimmer` | `shimmer` | CTA button hover sweep |
| `animate-marquee` | `marquee` | Infinite trust-signal banner |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind @theme tokens + global styles
│   ├── layout.tsx           # Root layout — fonts, metadata
│   ├── page.tsx             # Home page (server)
│   ├── process/
│   │   └── page.tsx         # Process timeline page (server)
│   └── savings/
│       └── page.tsx         # Savings page shell (server)
│
└── components/
    ├── Navbar.tsx            # Sticky nav with scroll-aware glassmorphism
    ├── Footer.tsx            # Site footer
    ├── QuoteModal.tsx        # Multi-step portal modal (client)
    ├── QuoteModalTrigger.tsx # Context-aware trigger wrapper (client)
    └── SavingsCalculator.tsx # Interactive savings island (client)
```

> **Rendering strategy:** Pages are server components by default. Only the components that require `useState`/`useEffect` are marked `"use client"` — keeping the JS bundle minimal.

---

## Getting Started

### Prerequisites

- Node.js ≥ 20
- pnpm ≥ 9

### Installation

```bash
git clone https://github.com/your-org/sunshine.git
cd sunshine
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The app supports Fast Refresh — edits to any file are reflected instantly.

### Production Build

```bash
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
```

---

## Image Configuration

Remote image domains are whitelisted in `next.config.ts`:

- `images.unsplash.com` — Hero and process photography
- `i.pravatar.cc` — Testimonial avatars
- `lh3.googleusercontent.com` — Reserved for future Google auth avatars

---

## Contributing

1. Fork the repository and create a feature branch: `git checkout -b feat/your-feature`
2. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/).
3. Open a pull request with a clear description of the change.

---

<div align="center">
  <sub>Built with warmth. Powered by sunshine.</sub>
</div>
