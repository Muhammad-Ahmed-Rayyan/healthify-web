# FEATURES.md — Healthify Landing Page (Functional & Technical Specification)

> Context: Tekcorp Software Engineer Intern assessment. Deliverables: public GitHub repo + live Vercel URL. Deadline: **October 1st, 2:00 PM**. Visual target is `home.png`; see `DESIGN.md` for the full visual spec and `PHASES.md` for the build order.

## 1. Mandatory Tech Stack

| Concern | Choice |
|---|---|
| Framework | **React Native for Web via Expo** (latest stable SDK), TypeScript |
| Styling | **NativeWind v4** (Tailwind utility classes) with `tailwindcss` 3.x |
| Web target | `react-native-web`, `react-dom`, `@expo/metro-runtime`, Expo web export (`output: "single"`) |
| Icons | `lucide-react-native` + `react-native-svg` |
| Fonts | `@expo-google-fonts/*` (DM Serif Display, Inter, Caveat, Aref Ruqaa) via `expo-font` |
| Images | Local optimized `.webp` in `assets/images` using `expo-image` or RN `Image` |
| Animation | Only RN `Animated`/`LayoutAnimation` or `react-native-reanimated` (already needed by NativeWind). No heavy animation libs |
| Deploy | Vercel (static export) |

Rules: component-based app, **not** a single HTML page. Keep dependencies minimal. Zero console errors/warnings. No secrets committed.

## 2. Page Structure (single page, in order)

1. Header (sticky) 
2. Hero 
3. Stats bar 
4. About 
5. Services (4 cards) 
6. Advantages 
7. Growth Plans (3 plans + image card) 
8. Process (3 steps) 
9. Testimonials (3 cards) 
10. FAQ (accordion) 
11. Final CTA banner 
12. Footer + floating WhatsApp button 

Every section is its own component with its content driven by a typed data array.

## 3. Functional Requirements

### 3.1 Navigation
- Links: Home, About Us, Our Services, Advantages, Growth Plans, Blogs, Contact Us.
- Clicking a link **smooth-scrolls** to its section and accounts for the sticky header height.
  - Home → top, About Us → About, Our Services → Services, Advantages → Advantages, Growth Plans → Plans, Contact Us → Footer "Get In Touch".
  - **Blogs** has no matching section in the reference. Decision: it scrolls to Customer Stories. (Keep mapping in one config file so it is trivial to change.)
- Active link highlighting based on the scroll position (scroll-spy) or at minimum the clicked link; Home starts active.
- Header gets a subtle shadow after the user scrolls.
- **Mobile menu:** hamburger toggles a panel with all links + Get Started. Closes on link press, outside press, and Escape key. Has `aria-expanded` and focus handling.
- Logo press scrolls to top.

### 3.2 Call-to-Action Buttons
- "Get Started", "Explore Meal Plans", "Get Started Today", and plan "Get Started" buttons scroll to the Growth Plans section (or open a simple confirmation behavior). Keep behavior consistent and documented.
- "Learn More" and "More About Us" scroll to About.
- "View All Services / Plans / FAQs / Reviews" and "Discover All Advantages" are styled links; for this assessment they scroll to their own sections (no extra pages are required). Do not leave dead `#` links that do nothing silently.

### 3.3 Hero
- Headline, subheadline, paragraph, two buttons, three indicators, bowl image, script text with arrow, floating "Nutritious Meals" badge.
- Image uses priority loading (above the fold). Text stacks above image on mobile.

### 3.4 Stats
- Four stat items from a data array. Optional: count-up animation on first view (only if it stays subtle and respects reduced motion). Static numbers are acceptable.

### 3.5 Services cards
- Reusable `ServiceCard` with image, title, description, circular arrow button.
- Hover/focus/pressed states. Entire card is pressable.

### 3.6 Advantages
- Reusable `AdvantageCard` (icon, title, caption) from a data array.

### 3.7 Growth Plans
- Reusable `PlanCard` with props: `name`, `description`, `price`, `period`, `features[]`, `highlighted`, `badge`.
- The highlighted card has a "MOST POPULAR ★" ribbon, filled dark button, and raised elevation.
- `PromoImageCard` with overlay text "Invest in a Healthier You".
- Optional nice-to-have: monthly price format helper (`AED 299`).

### 3.8 Process
- Reusable `StepItem`; arrows between steps on desktop, vertical layout on mobile.

### 3.9 Testimonials
- Reusable `TestimonialCard` (quote, avatar, name, location, rating stars rendered from a number).

### 3.10 FAQ accordion (required, must work)
- Reusable `AccordionItem`, 5 items from a data array.
- Click/tap toggles open/close with smooth height/opacity animation.
- Decision: **single-open** behavior (opening one closes the others), first item closed by default.
- Keyboard: Enter/Space toggles; focus ring visible.
- A11y: button role, `aria-expanded`, answer region labelled by the question.
- Include realistic answers:
  1. *What are your meal plans?* — Three plans: Essential (AED 299/month), Balanced (AED 499/month), Performance (AED 699/month) …
  2. *How does delivery work?* — Meals are prepared fresh daily and delivered to home or office across Dubai; flexible schedule …
  3. *Can I customize my meals?* — Yes, Balanced and Performance plans include customization and nutritionist support …
  4. *What payment methods do you accept?* — Major credit/debit cards, Apple Pay, and cash on delivery …
  5. *Do you have a mobile app?* — Coming soon; meanwhile ordering is available via the website and WhatsApp …

### 3.11 Final CTA + Footer
- CTA banner with overlay background image and white button.
- Footer columns from data arrays. Email and phone are pressable: `mailto:info@healthify.ae`, `tel:+971502626144`. Social icons open placeholder social URLs in a new tab with `rel="noopener noreferrer"` (web).
- **Floating WhatsApp button**, fixed bottom-right, opens `https://wa.me/971502626144`.
- Footer year: "2026" as in the design (or computed, but it must read 2026 now).

## 4. Responsive Requirements
- Mobile-first NativeWind classes with `sm:`, `md:`, `lg:`, `xl:` breakpoints.
- No horizontal scroll at 320–1920px. Wrap wide content; never use fixed widths larger than the viewport.
- Desktop multi-column layouts stack on mobile; card grids go 4 → 2 → 1 columns.
- Images keep aspect ratio (no stretching), use `cover`, and are sized per breakpoint.
- Touch targets ≥ 44px on mobile.
- Verify with browser dev tools at 360, 390, 414, 768, 820, 1024, 1280, 1440.

## 5. Interaction States
- Every button/link/card: hover, focus-visible, pressed. 
- Pressables use `Pressable` with style callbacks or NativeWind `hover:`, `focus:`, `active:` variants.
- Cursor pointer on web for interactive elements.

## 6. Accessibility
- One `<h1>` (hero); `role="heading"` with `aria-level` for other headings.
- `accessibilityLabel`/`alt` on meaningful images; decorative ones use `accessibilityElementsHidden` / `aria-hidden`.
- Landmarks: `role="banner"` (header), `role="main"`, `role="contentinfo"` (footer), `role="navigation"`.
- Skip-to-content link (nice to have).
- Color contrast ≥ 4.5:1 for text.
- Reduced motion respected.
- Page `<title>`, `lang="en"`, meta description, favicon, and Open Graph basics set via `app.json` / `+html` (Expo web).

## 7. Performance
- Optimized WebP images, correct sizes, lazy loading below the fold.
- Fonts loaded once with `expo-font`; show content after fonts load (no layout flash; use a simple splash/blank background).
- Avoid unnecessary re-renders; static data arrays defined outside components.
- Target Lighthouse (desktop) Performance ≥ 85, Accessibility ≥ 90, Best Practices ≥ 90.

## 8. Project Structure

```
healthify/
├─ app/ or App.tsx            # entry (single screen)
├─ assets/
│  ├─ images/                 # *.webp
│  └─ fonts/ (if any local)
├─ src/
│  ├─ components/
│  │  ├─ layout/              # Header, MobileMenu, Footer, WhatsAppButton, Section, Container
│  │  ├─ ui/                  # Button, TextLink, SectionHeading, Eyebrow, IconCircle, Badge, Rating
│  │  ├─ cards/               # ServiceCard, AdvantageCard, PlanCard, PromoImageCard, TestimonialCard, StatItem
│  │  └─ sections/            # Hero, Stats, About, Services, Advantages, Plans, Process, Testimonials, Faq, CtaBanner
│  ├─ data/                   # nav.ts, stats.ts, services.ts, advantages.ts, plans.ts, steps.ts, testimonials.ts, faqs.ts, footer.ts
│  ├─ hooks/                  # useBreakpoint, useScrollSpy, useReducedMotion
│  ├─ constants/              # theme.ts (colors), images.ts (asset map), sectionIds.ts
│  ├─ types/                  # shared TS types
│  └─ utils/                  # scrollToSection, formatPrice
├─ global.css                 # Tailwind directives
├─ tailwind.config.js
├─ babel.config.js
├─ metro.config.js
├─ app.json
├─ vercel.json
├─ .gitignore
├─ .env.example               # only if env vars are used (likely not needed)
├─ README.md
└─ docs/ (DESIGN.md, FEATURES.md, PHASES.md)
```

## 9. Code Quality Rules
- TypeScript strict mode; no `any`.
- Descriptive names; one component per file; props typed with interfaces.
- No duplicated markup: cards, buttons, section headings and data arrays are reused.
- No dead code, unused files/imports, commented-out blocks, `console.log`, or TODOs left in the final commit.
- ESLint + Prettier configured (Expo default lint is fine); `npx tsc --noEmit` passes.
- Colors, fonts and spacing only via Tailwind theme tokens.

## 10. Environment Variables
- The project needs **no** external services. Do not add an `.env` unless truly required. If added, commit `.env.example` only and gitignore `.env*` (except the example).

## 11. GitHub Requirements
- Public repository named e.g. `healthify-landing-page`.
- **Meaningful commits per phase** using conventional commits (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`), batched logically (not one commit per file, not one giant commit).
- Git tags at the end of each phase (`phase-1`, `phase-2` …) for easy rollback.
- `README.md` must include: overview, screenshot, live Vercel URL, tech stack, features, folder structure, prerequisites, install/run/build commands (Windows-friendly), export command, deployment notes, env guidance ("no env vars required"), image credits, and author name.

## 12. Vercel Requirements
- Build command: `npx expo export --platform web`
- Output directory: `dist`
- `vercel.json` includes SPA rewrite to `/index.html` and long-cache headers for static assets.
- Verified live: hard refresh works, no 404s for assets, fonts and images load, no console errors, FAQ and mobile menu work, deployment matches latest `main`.

## 13. Acceptance Checklist (mirrors the assessment rubric)
- [ ] Visual accuracy & completeness (25): all 12 sections present and close to `home.png`
- [ ] Responsive (20): no overflow, proper stacking, mobile menu
- [ ] Component structure & RN Web implementation (15)
- [ ] Code quality (10)
- [ ] Interactions & accessibility (10): FAQ works, focus/hover states, alt text
- [ ] GitHub repo, README, commit quality (10)
- [ ] Successful Vercel deployment (10)
- [ ] Zero console errors/warnings; no secrets committed
