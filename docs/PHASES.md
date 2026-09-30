# PHASES.md — Build Plan for the Healthify Landing Page

> Read `DESIGN.md` (what it looks like) and `FEATURES.md` (what it does) first. This file defines the **order of work**. Each phase is small, testable, committed, and tagged so any phase can be reverted cleanly.

## Working Rules (for the AI agent)

1. Work on **one phase at a time**. Do not start the next phase until the current phase's test checklist passes and I confirm.
2. At the end of each phase: run the tests listed, then stage everything, make **one conventional commit** (message given below), and create the tag.
3. The terminal is **Windows cmd**. Use cmd-compatible commands only (no bash-only syntax).
4. Always give **complete file contents** for any file created or modified (no partial diffs).
5. Keep TypeScript strict, zero console errors/warnings, no dead code, no `console.log`.
6. Follow `DESIGN.md` tokens exactly; never hardcode random colors.
7. If something in the reference is unclear, choose the closest reasonable option and mention it in one line.

## Time Budget (deadline: Oct 1, 2:00 PM)

| Phase | Est. time |
|---|---|
| 0 Setup & tooling | 40 min |
| 1 Theme, fonts, assets, UI primitives | 50 min |
| 2 Header & mobile menu | 40 min |
| 3 Hero | 40 min |
| 4 Stats & About | 35 min |
| 5 Services & Advantages | 40 min |
| 6 Plans & Process | 45 min |
| 7 Testimonials & FAQ | 40 min |
| 8 CTA, Footer, WhatsApp | 30 min |
| 9 Responsive QA pass | 50 min |
| 10 Accessibility, polish, cleanup | 35 min |
| 11 README & GitHub | 25 min |
| 12 Vercel deploy & final verification | 30 min |
| **Total** | **≈ 8.5 hrs** |

Leave at least 2 hours of buffer before the deadline for Phase 12 and the reply email.

---

## Phase 0 — Project Setup & Tooling
**Goal:** Running Expo web app with NativeWind working and a clean Git repo.

**Tasks**
- Create the Expo TypeScript app (`npx create-expo-app@latest healthify --template blank-typescript`).
- Install web deps: `npx expo install react-dom react-native-web @expo/metro-runtime`.
- Install and configure NativeWind v4 + Tailwind 3 (follow the official NativeWind v4 Expo guide: `tailwind.config.js` with the NativeWind preset, `global.css`, `babel.config.js`, `metro.config.js`, `nativewind-env.d.ts`, import `global.css` in the entry).
- Install `lucide-react-native`, `react-native-svg`, `expo-font`, `expo-image`, and the Google font packages.
- Set `app.json` web config (`"web": { "output": "single", "bundler": "metro", "favicon": ... }`), page title and description.
- Create the folder structure from `FEATURES.md` section 8, placing `docs/` files.
- `.gitignore` (node_modules, dist, .expo, .env*, except `.env.example`).
- `git init`, first commit on `main`, create the GitHub repo and push.

**Test**
- `npx expo start --web` opens a page; a test element with `className="bg-green-800 p-4"` shows styled. Remove the test element afterwards.
- `npx tsc --noEmit` passes.

**Commit:** `chore: initialize expo web project with nativewind and tooling`  
**Tag:** `phase-0`

---

## Phase 1 — Theme, Fonts, Assets & UI Primitives
**Goal:** Design system in place before any section is built.

**Tasks**
- Add all color tokens, font families, radii, shadows and container max-width to `tailwind.config.js` and `src/constants/theme.ts`.
- Load fonts with `expo-font`; show a plain cream background until ready.
- Create `src/constants/images.ts` mapping every image (see asset list below) to local files.
- Build primitives in `src/components/ui`: `Button` (primary, outline, onDark, with optional arrow icon and states), `TextLink`, `Eyebrow`, `SectionHeading`, `IconCircle`, `Badge`, `Rating`, and layout helpers `Container` and `Section` (with `id` and background variant).
- Create a temporary preview screen showing all primitives, then delete it before committing.
- Create `src/utils/scrollToSection.ts` and `src/constants/sectionIds.ts`.

**Asset checklist (I will place these files in `assets/images/` as `.webp` before or during this phase)**

| File | Content |
|---|---|
| `hero-bowl.webp` | Large bowl: grilled chicken, avocado, tomatoes, greens, sesame, linen cloth |
| `about-bowl.webp` | Colorful quinoa/avocado/tomato bowl |
| `about-chef.webp` | Chef hands tossing salad |
| `service-ready-meals.webp` | Colorful meal bowl |
| `service-custom-plans.webp` | Salmon with greens |
| `service-weight.webp` | Meal prep containers |
| `service-protein.webp` | Protein bowl with berries |
| `plans-promo.webp` | Tall portrait bowl (for "Invest in a Healthier You") |
| `cta-bg.webp` | Dark blurred leafy background |
| `avatar-sara.webp`, `avatar-ahmed.webp`, `avatar-fatima.webp` | Portrait headshots (square) |

If any file is missing the agent must tell me the exact filename rather than inventing remote URLs.

**Test**
- Primitives render correctly at mobile and desktop widths; button hover/focus/pressed states visible.

**Commit:** `feat: add design tokens, fonts, asset map and ui primitives`  
**Tag:** `phase-1`

---

## Phase 2 — Header & Mobile Menu
**Goal:** Sticky, responsive navigation with working scroll targets.

**Tasks**
- `Header`, `Logo` (Arabic script + HEALTHIFY + leaf), `NavLinks`, `MobileMenu`.
- Data in `src/data/nav.ts` (labels → section ids).
- Scroll-to-section with header offset, scroll shadow, scroll-spy active link (`useScrollSpy`), mobile menu close on press/outside/Escape.
- Main page scaffold `App.tsx` with a vertical `ScrollView` and empty placeholders with ids for all sections.

**Test**
- Desktop: links scroll smoothly to placeholders; active link changes.
- ≤1023px: hamburger opens/closes; no horizontal scroll at 360px.

**Commit:** `feat: add sticky header with responsive mobile menu and scroll navigation`  
**Tag:** `phase-2`

---

## Phase 3 — Hero Section
**Goal:** Above-the-fold hero matching the reference.

**Tasks**
- `Hero` with H1 two-tone, subheadline, paragraph, two buttons, `BenefitIndicator` row, bowl image, handwritten script + arrow (SVG), floating "Nutritious Meals" badge, blurred leaf decoration.
- Responsive stacking and type scaling.

**Test**
- Side-by-side comparison with `home.png` at 1440px (spacing, sizes, hierarchy).
- Mobile 390px looks intentional; image not stretched.

**Commit:** `feat: implement hero section with benefits and floating badge`  
**Tag:** `phase-3`

---

## Phase 4 — Stats & About
**Goal:** Trust bar and brand introduction.

**Tasks**
- `Stats` + `StatItem` from `src/data/stats.ts` (dividers on desktop, 2×2 grid on small screens).
- `About` with overlapping images, floating "Nourishing Lives Daily" badge, eyebrow, heading, paragraph, three feature ticks, button, faint leaf line-art.

**Test**
- Overlap image stays inside viewport on mobile; stats grid wraps with no overflow.

**Commit:** `feat: add stats bar and about section`  
**Tag:** `phase-4`

---

## Phase 5 — Services & Advantages
**Goal:** Card-based sections.

**Tasks**
- `Services` + `ServiceCard` (4 cards; hover lift and image zoom; whole card pressable).
- `Advantages` + `AdvantageCard` (diamond, heart, truck, leaf icons) with the left text column.
- Data files `services.ts`, `advantages.ts`.

**Test**
- Grid changes 4 → 2 → 1 columns; hover/focus states work; keyboard tab order is logical.

**Commit:** `feat: add services and advantages sections with reusable cards`  
**Tag:** `phase-5`

---

## Phase 6 — Growth Plans & Process
**Goal:** Pricing and how-it-works.

**Tasks**
- `Plans` with `PlanCard` (highlighted "Most Popular" variant) and `PromoImageCard`.
- `Process` with `StepItem` and arrows; vertical layout on mobile.
- Data files `plans.ts`, `steps.ts`; `formatPrice` util.

**Test**
- Balanced card is visibly elevated with ribbon; buttons behave; 768px and 390px layouts are clean.

**Commit:** `feat: add pricing plans and process steps sections`  
**Tag:** `phase-6`

---

## Phase 7 — Testimonials & FAQ
**Goal:** Social proof and working accordion.

**Tasks**
- `Testimonials` + `TestimonialCard` + `Rating` (data: `testimonials.ts`).
- `Faq` + `AccordionItem` (single-open, animated, keyboard accessible, `aria-expanded`), data: `faqs.ts` with full answers.

**Test**
- Accordion opens/closes by mouse, touch, Enter and Space; only one open at a time; no layout jump.

**Commit:** `feat: add testimonials and faq accordion`  
**Tag:** `phase-7`

---

## Phase 8 — CTA Banner, Footer & WhatsApp Button
**Goal:** Complete the page.

**Tasks**
- `CtaBanner` over the dark leafy background.
- `Footer` with four columns, social icons, contact links (`mailto:`, `tel:`), bottom bar.
- Floating `WhatsAppButton` (`wa.me` link, new tab).

**Test**
- Every section from the reference now exists; footer links scroll correctly; WhatsApp opens.

**Commit:** `feat: add cta banner, footer and floating whatsapp button`  
**Tag:** `phase-8`

---

## Phase 9 — Responsive QA Pass
**Goal:** Polished at every width.

**Tasks**
- Audit at 320, 360, 390, 414, 768, 820, 1024, 1280, 1440, 1920.
- Fix overflow, spacing, font scaling, image crops, touch target sizes.
- Verify `useBreakpoint` usage is minimal; prefer Tailwind breakpoint classes.

**Test**
- No horizontal scroll anywhere (check `document.documentElement.scrollWidth <= innerWidth`).
- All interactions still work after layout fixes.

**Commit:** `fix: improve responsive layouts across breakpoints`  
**Tag:** `phase-9`

---

## Phase 10 — Accessibility, Polish & Cleanup
**Goal:** Production quality.

**Tasks**
- Alt text/labels, landmarks, heading order, focus rings, contrast check, reduced motion.
- Page title, meta description, favicon, Open Graph tags.
- Remove dead code, unused files/imports/dependencies, console logs, TODOs.
- Run `npx tsc --noEmit` and lint; zero errors/warnings in browser console.
- Optional: Lighthouse run, then fix quick wins.

**Test**
- Keyboard-only walkthrough of the whole page. Lighthouse Accessibility ≥ 90.

**Commit:** `refactor: improve accessibility and clean up codebase`  
**Tag:** `phase-10`

---

## Phase 11 — README & GitHub Finalization
**Goal:** Repo that another developer can clone and run.

**Tasks**
- Write `README.md` (see `FEATURES.md` section 11). Include a screenshot in `docs/` or `assets/`.
- Add `vercel.json` (rewrite to `/index.html`, cache headers for static assets).
- Fresh-clone test: clone into a temp folder, `npm install`, `npx expo start --web` works; `npx expo export --platform web` succeeds.

**Commit:** `docs: add readme and vercel configuration`  
**Tag:** `phase-11`

---

## Phase 12 — Vercel Deployment & Final Verification
**Goal:** Live link that matches `main`.

**Tasks**
- Import the GitHub repo into Vercel: Framework "Other", Build Command `npx expo export --platform web`, Output Directory `dist`, Install Command `npm install`.
- Open the live URL in a private window on desktop and a real phone.
- Test: hard refresh, all images/fonts, nav scroll, mobile menu, FAQ, WhatsApp, console clean.
- Put the live URL into the README, commit, push, confirm Vercel redeploys.
- Send the email reply with the GitHub and Vercel links before the deadline.

**Commit:** `docs: add live deployment url to readme`  
**Tag:** `v1.0.0`

---

## Reverting a Phase (Windows cmd)

See what changed and where you are:
```
git log --oneline --decorate
git status
```

Undo uncommitted changes in the current phase (careful, destructive):
```
git restore .
git clean -fd
```

Go back to the end of a previous phase and keep history (safe, recommended):
```
git revert --no-edit phase-5..HEAD
```

Hard reset to a previous phase (destructive, rewrites local history):
```
git reset --hard phase-5
```

If the remote was already pushed and you did a hard reset:
```
git push --force-with-lease origin main
```

Peek at an older phase without changing anything:
```
git checkout phase-3
git checkout main
```

Push tags:
```
git push origin --tags
```

---

## Reusable Prompt Template for Each Phase

Paste this into Antigravity, changing only the phase number:

```
Read docs/DESIGN.md, docs/FEATURES.md and docs/PHASES.md fully. Execute ONLY Phase <N> from PHASES.md. Follow the Working Rules. Give complete file contents for every file you create or change. When finished, run the listed tests, tell me exactly how to verify it in the browser, then give the Windows cmd commands to stage, commit (using the exact commit message in the phase) and tag it. Do not start the next phase.
```
