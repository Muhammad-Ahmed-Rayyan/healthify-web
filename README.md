# Healthify — Healthy Meal Plans Landing Page

A modern, responsive landing page for **Healthify**, a premium meal-prep subscription service based in Dubai, UAE. Built with **React Native for Web via Expo** and styled with **NativeWind v4** (Tailwind CSS 3.x).

---

## 🚀 Live Demo & Deployment

- **Live URL**: [https://healthify-web.vercel.app](https://healthify-web.vercel.app) *(Deploy via Vercel)*
- **Repository**: [https://github.com/Muhammad-Ahmed-Rayyan/healthify-web](https://github.com/Muhammad-Ahmed-Rayyan/healthify-web)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React Native for Web](https://necolas.github.io/react-native-web/) via [Expo](https://expo.dev) (SDK 57) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [NativeWind v4](https://www.nativewind.dev/) with [Tailwind CSS 3.x](https://tailwindcss.com/) |
| **Typography** | `@expo-google-fonts` (DM Serif Display, Inter, Caveat, Aref Ruqaa) |
| **Icons** | `lucide-react-native` + `react-native-svg` |
| **Hosting** | [Vercel](https://vercel.com) (Static SPA Export) |

---

## ✨ Features & Sections

The single-page layout implements all 12 sections matching the visual design:

1. **Header (Sticky)**: Responsive navigation with logo (Arabic wordmark "صحتي" + HEALTHIFY), scroll-spy active state, smooth-scroll links, and a mobile slide-down menu.
2. **Hero Section**: Two-tone editorial serif headline ("Healthy Meals, Happier Lives"), value proposition, dual CTAs, benefit badges, hero bowl showcase with handwritten accent ("Good Food Brightens You"), and floating badge.
3. **Stats / Trust Bar**: 4 key metrics with icons (1M+ Meals, 30K+ Customers, 4.8/5 Rating, 550+ Corporate Clients).
4. **About Healthify**: Overlapping food & chef photography, brand story, core commitments, and floating trust badge.
5. **Services**: 4 interactive cards with hover lift (Ready-to-Eat, Custom Plans, Weight Management, High-Protein).
6. **Advantages (Why Choose Us)**: Value pillars (Premium Quality, Health Focused, Convenient Delivery, Flexible Plans).
7. **Growth Plans (Pricing)**: 3 tier plan cards (Essential, Balanced [Most Popular ★], Performance) with feature checklists + 1 tall promo image card ("Invest in a Healthier You").
8. **Our Process (How It Works)**: 3-step walkthrough (Choose Plan → Fresh Preparation → Convenient Delivery) with step badges and desktop arrow dividers.
9. **Customer Stories (Testimonials)**: 3 verified Dubai customer reviews with 5-star ratings and avatars.
10. **FAQ (Accordion)**: Accessible, single-open accordion answering key delivery, customization, and subscription questions.
11. **Final CTA Banner**: High-contrast dark forest overlay banner with primary call-to-action.
12. **Footer & Floating WhatsApp**: 4 structured link columns, social media icons, copyright bar, and a persistent floating WhatsApp contact button (`+971 50 262 6144`).

---

## 📁 Project Structure

```
healthify-web/
├── App.tsx                     # Main application entry (all 12 sections)
├── index.ts                    # Expo root component registration
├── app.json                    # Expo configuration (web single output, metadata)
├── babel.config.js             # Babel setup with NativeWind preset
├── metro.config.js             # Metro bundler wrapped with NativeWind
├── tailwind.config.js          # Healthify design tokens, colors & typography
├── global.css                  # Tailwind CSS base directives
├── nativewind-env.d.ts         # NativeWind TypeScript definitions
├── vercel.json                 # Vercel SPA rewrites and caching headers
├── assets/
│   ├── favicon.png
│   ├── icon.png
│   └── images/                 # Optimized .webp food photography & avatars
│       └── IMAGES_REQUIRED.md  # Checklist for production image assets
├── docs/                       # Assessment specifications (DESIGN, FEATURES, PHASES)
└── src/
    ├── components/
    │   ├── ui/                 # Reusable primitives (Button, TextLink, Eyebrow, Badge, Rating...)
    │   ├── cards/              # Domain cards (ServiceCard, PlanCard, StatItem, TestimonialCard...)
    │   ├── layout/             # Layout shells (Header, MobileMenu, Footer, WhatsAppButton, Section, Container)
    │   └── sections/           # 12 page sections (Hero, Stats, About, Services, Plans, Faq...)
    ├── constants/              # Design tokens (theme.ts, sectionIds.ts, images.ts)
    ├── data/                   # Structured data arrays (nav, stats, services, plans, faqs, footer)
    ├── hooks/                  # Custom hooks (useBreakpoint, useScrollSpy, useReducedMotion)
    ├── types/                  # Shared TypeScript interfaces
    └── utils/                  # Helpers (scrollToSection, formatPrice)
```

---

## 💻 Getting Started (Windows cmd / PowerShell)

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### 1. Installation

```cmd
npm install
```

### 2. Run Development Server

```cmd
npm run dev
```

Open [http://localhost:8081](http://localhost:8081) in your browser.

### 3. TypeScript Typecheck

```cmd
npx tsc --noEmit
```

### 4. Build for Production (Web Export)

```cmd
npm run build
```

This compiles the static web bundle into the `dist/` folder.

---

## 🚢 Vercel Deployment

1. Push your repository to GitHub.
2. In [Vercel](https://vercel.com), click **Add New Project** and import `healthify-web`.
3. Configure the build settings:
   - **Framework Preset**: `Other`
   - **Build Command**: `npx expo export --platform web` (or `npm run build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

---

## 🔒 Environment Variables

No external API keys or secrets are required. The landing page is entirely self-contained and static.

---

## 📄 License & Credits

- **Assessment**: Tekcorp Software Engineer Intern Assessment
- **Brand**: Healthify (Dubai, UAE)
- **Author**: Muhammad Ahmed Rayyan