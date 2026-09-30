# Healthify

A modern, responsive landing page for a fresh, chef-prepared healthy meal delivery service based in Dubai.

## Live Demo

- Live URL: https://healthify-web.vercel.app
- GitHub Repository: https://github.com/<your-username>/healthify-web

## Screenshot

![Healthify landing page](docs/screenshot.png)

## Overview

Healthify is a high-performance, responsive landing page recreated from a supplied design specification for a premium healthy meal delivery brand operating across Dubai, United Arab Emirates. Built as a comprehensive frontend technical assessment, the application showcases modular UI architecture, cross-platform component design using React Native for Web, strict TypeScript typing, pixel-accurate design token fidelity, and modern web accessibility practices.

## Features

- 12 comprehensive landing page sections:
  - Sticky Navigation Header with live section scroll-spy indicator and mobile dropdown
  - Full-Bleed Hero section with dual-action CTAs and value proposition badges
  - Social Proof Stats banner with key business milestones
  - Brand Story and About Us section with layered visual media
  - Services Showcase featuring custom meal delivery options and hover states
  - Core Advantages grid detailing farm-fresh sourcing, chef curation, and sustainability
  - Growth and Subscription Plans with pricing cards and highlighted popular tiers
  - 3-Step Process section outlining ordering, customization, and daily doorstep delivery
  - Customer Testimonials with star ratings and regional client reviews
  - Interactive FAQ accordion supporting single-open expansion and full keyboard navigation
  - High-impact Call-to-Action banner driving conversion
  - Comprehensive 4-column Footer with contact details, quick links, and social channels
- Floating WhatsApp quick-contact button with direct international messaging integration
- Full responsive adaptation across mobile (320px-414px), tablet (768px-820px), and desktop (1024px-1920px) screens
- Single-page smooth scroll navigation with 64px sticky header compensation
- Comprehensive accessibility support including semantic ARIA attributes, landmarks, and keyboard focus states
- Strict TypeScript implementation with 100% type safety and zero any types

## Tech Stack

- Framework: Expo (SDK 52/53, Metro bundler for web)
- UI Library: React Native for Web (React 19)
- Styling: NativeWind v4 (Tailwind CSS v3)
- Language: TypeScript 5.8 (Strict Mode enabled)
- Icons: Lucide React Native, React Native SVG
- Fonts: Expo Font (@expo-google-fonts for DM Serif Display, Inter, Caveat, and Aref Ruqaa)
- Media: Expo Image with responsive object-fit fallbacks
- Deployment: Vercel Static Hosting with automated cache optimization

## Why Expo and React Native for Web

The technical assessment required building the interface using React Native for Web to demonstrate cross-platform frontend architecture. Expo was selected as the application framework because it simplifies web bundling, font loading, asset optimization, and production static exports while maintaining seamless compatibility with native React Native components.

## Project Structure

```
healthify-web/
├── assets/
│   ├── favicon.png
│   ├── icon.png
│   ├── splash-icon.png
│   └── images/
│       ├── About_bowl.jpg
│       ├── About_chef.jpg
│       ├── Avatar_ahmed.jpg
│       ├── Avatar_fatima.jpg
│       ├── Avatar_sara.jpg
│       ├── CTA_bg.jpg
│       ├── Hero_bowl.jpg
│       ├── Plans_promo.jpg
│       ├── Service_custom_plans.jpg
│       ├── Service_protein.jpg
│       ├── Service_ready_meals.jpg
│       └── Service_weights.jpg
├── docs/
│   ├── DESIGN.md
│   ├── FEATURES.md
│   └── screenshot.png
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── AdvantageCard.tsx
│   │   │   ├── PlanCard.tsx
│   │   │   ├── PromoImageCard.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── StatItem.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── layout/
│   │   │   ├── Container.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Section.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Advantages.tsx
│   │   │   ├── CtaBanner.tsx
│   │   │   ├── Faq.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Plans.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Stats.tsx
│   │   │   └── Testimonials.tsx
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── CoverImage.tsx
│   │       ├── Eyebrow.tsx
│   │       ├── IconCircle.tsx
│   │       ├── Rating.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── TextLink.tsx
│   │       └── WhatsAppIcon.tsx
│   ├── constants/
│   │   ├── images.ts
│   │   ├── sectionIds.ts
│   │   └── theme.ts
│   ├── data/
│   │   ├── advantages.ts
│   │   ├── faqs.ts
│   │   ├── footer.ts
│   │   ├── nav.ts
│   │   ├── plans.ts
│   │   ├── services.ts
│   │   ├── stats.ts
│   │   ├── steps.ts
│   │   └── testimonials.ts
│   ├── hooks/
│   │   ├── useBreakpoint.ts
│   │   ├── useReducedMotion.ts
│   │   └── useScrollSpy.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       ├── formatPrice.ts
│       └── scrollToSection.ts
├── App.tsx
├── app.json
├── babel.config.js
├── global.css
├── index.ts
├── metro.config.js
├── nativewind-env.d.ts
├── package.json
├── package-lock.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

## Getting Started

### Prerequisites

- Node.js LTS (v18.x or v20.x recommended)
- npm (v9.x or higher)

### Installation

Clone the repository and install project dependencies:

```cmd
git clone https://github.com/<your-username>/healthify-web.git
cd healthify-web
npm install
```

### Development Server

Start the local Expo web development server:

```cmd
npm run dev
```

Open http://localhost:8081 (or the port indicated in terminal) in your browser.

### Production Build

Generate the optimized production static web export:

```cmd
npm run build
```

The production output will be generated in the `dist` directory.

## Environment Variables

No environment variables are required to run, build, or deploy this project. All assets, fonts, and configurations are bundled statically, and no API keys or backend secrets are committed or required.

## Deployment

The project is configured for one-click deployment on Vercel:

1. Import the repository in the Vercel dashboard.
2. Configure project build settings:
   - Framework Preset: Other
   - Install Command: `npm install`
   - Build Command: `npm run build` (or `npx expo export --platform web`)
   - Output Directory: `dist`
3. Deploy.

The included `vercel.json` automatically configures single-page application (SPA) rewrites to `/index.html` and sets immutable long-term caching headers (`max-age=31536000`) for static assets under `/_expo` and `/assets`.

## Responsive Design and Accessibility

### Breakpoints Tested

- Mobile: 320px, 360px, 390px, 414px (zero horizontal overflow, hamburger navigation drawer)
- Tablet: 768px, 820px (multi-column reflow, adjusted typography)
- Desktop: 1024px, 1280px, 1440px, 1920px (full multi-column grid layouts, container max-width 1200px)

### Accessibility Features

- Semantic landmarks implemented across the DOM (`banner`, `navigation`, `main`, and `contentinfo`).
- Strict single `<h1>` page heading hierarchy with logical `<h2>` and `<h3>` nested order.
- Descriptive `aria-label` attributes on interactive icon buttons, navigation links, and the floating WhatsApp trigger.
- FAQ accordion with `aria-expanded` status attributes and full keyboard navigation (Enter and Space key support).
- Contrast ratio exceeding 4.5:1 for all text against backgrounds (Forest 900 `#14291F`, Forest 800 `#1F3A2B`, and Ink 700 `#3A4A40` on Cream 50 `#FAFAF5` and Sage 100 `#EEF1E4`).
- Support for `prefers-reduced-motion` media preferences.
- Accessible image labels with descriptive alt text on content images and hidden presentation on decorative graphics.

## Image Credits

All photographic assets, meal images, and avatar portraits used throughout this project were generated specifically for this assessment and depict fictional representations and no real people.

## Author

Rayyan Ahmed
- GitHub: https://github.com/<your-username>
- LinkedIn: https://linkedin.com/in/<your-username>