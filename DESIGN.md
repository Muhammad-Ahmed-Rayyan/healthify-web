# DESIGN.md — Healthify Landing Page (Visual Specification)

> Source of truth: `home.png` (reference image) and `assessment.pdf`. Recreate the layout, spacing, hierarchy, typography and mood as closely as practical. Exact photos are not required, but the feel must match.

## 1. Brand Overview

- **Brand:** Healthify (Arabic wordmark "صحتي" in a calligraphic style above the Latin word "HEALTHIFY" in small, bold, tracked capitals, with a tiny leaf motif).
- **Market:** Dubai, UAE. Prices are in **AED**. Testimonials are from Dubai residents.
- **Mood:** Fresh, calm, premium, natural. Lots of white space, soft sage and cream backgrounds, deep forest green for authority, olive green for warmth, editorial serif headlines, and appetizing close-up food photography.
- **Feel:** A premium meal-prep subscription brand. Clean, rounded, soft shadows, never loud.

## 2. Design Tokens

### 2.1 Colors (approximate values sampled from the reference; fine-tune by eye)

| Token | Hex | Use |
|---|---|---|
| `forest-900` | `#14291F` | Footer background, darkest text |
| `forest-800` | `#1F3A2B` | Primary buttons, headline dark text ("Healthy Meals"), "Most Popular" header, final CTA overlay |
| `olive-600` | `#5B6B1F` | "Happier Lives" headline, eyebrow labels, active nav link, icons, links |
| `olive-500` | `#6E7F2A` | Hover/accents |
| `sage-100` | `#EEF1E4` | Alternate section backgrounds (Stats bar, Services, Advantages, FAQ) |
| `sage-200` | `#E1E7D0` | Icon circles, step number circles, borders |
| `cream-50` | `#FAFAF5` | Page background, cards |
| `white` | `#FFFFFF` | Cards, floating badges, outline buttons on dark |
| `ink-700` | `#3A4A40` | Body text |
| `ink-500` | `#6B7A70` | Secondary/muted text |
| `star-500` | `#F5B301` | Rating stars |
| `whatsapp` | `#25D366` | Floating WhatsApp button |

Define these in `tailwind.config.js` under `theme.extend.colors` and use only the tokens (no random hex in components).

### 2.2 Typography

- **Display / headings:** an elegant high-contrast serif. Use **DM Serif Display** (or Playfair Display / Fraunces as fallback). Loaded with `@expo-google-fonts`.
- **Body / UI:** a clean geometric sans. Use **Inter** or **Plus Jakarta Sans** (400, 500, 600, 700).
- **Script accent:** "Good Food Brightens You" in a handwritten font (**Caveat** or **Kalam**), olive/dark green, slightly rotated (~-8°), with a hand-drawn curved arrow pointing to the bowl.
- **Arabic logo:** **Aref Ruqaa** or **Reem Kufi** for "صحتي".

| Role | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero H1 (2 lines) | 56–64px, line-height 1.05 | 48px | 36–40px |
| Section H2 | 36–40px | 32px | 28px |
| Card title (H3) | 16–18px, semibold | same | same |
| Body | 15–16px, line-height 1.6 | same | 15px |
| Eyebrow label | 11–12px, uppercase, letter-spacing 0.15em, semibold, olive | same | same |
| Small/meta | 12–13px | same | same |

### 2.3 Spacing, Radius, Shadow

- Section vertical padding: desktop 72–96px, tablet 56–64px, mobile 40–48px.
- Content max width: **1200px**, centered, horizontal padding 24px (mobile 16–20px).
- Grid gap: 24px (cards), 48–64px (two-column sections).
- Radius: buttons = fully rounded pill (999px) for primary/CTA, cards 16px, images 20–24px, floating badges 16px.
- Shadows: very soft, e.g. `0 8px 30px rgba(20,41,31,0.08)`. Cards have a 1px border `sage-200` plus soft shadow.

### 2.4 Buttons

- **Primary:** `forest-800` fill, white text, 14px semibold, pill, height 44px, trailing arrow icon (→). Hover: slightly lighter + lift 1px. Focus: visible 2px olive ring with offset. Pressed: scale 0.98.
- **Secondary (outline):** transparent, 1px `forest-800` border, dark text. Hover: `sage-100` fill.
- **On dark (final CTA):** white fill, dark text, arrow.
- **Text link:** olive, 13px, small arrow (e.g. "View All Services →").
- **Circular arrow button** (service cards): 32px circle, `sage-200` background, dark arrow icon.

## 3. Section-by-Section Layout

Render in this exact order. Full-page background is `cream-50` with alternating `sage-100` bands.

### 3.1 Header / Navigation (sticky)

- Height ~64–72px, white/cream with subtle bottom shadow on scroll.
- **Left:** logo (Arabic script above, "HEALTHIFY" below, small leaf).
- **Center:** links — Home (active, olive), About Us, Our Services, Advantages, Growth Plans, Blogs, Contact Us. 13px medium. Hover: olive with underline grow.
- **Right:** primary pill button **"Get Started →"**.
- **Mobile (< 1024px):** logo left, hamburger icon right. Opens a full-width dropdown/slide panel with stacked links and the Get Started button. Closes on link tap, outside tap, or Escape.

### 3.2 Hero

- Soft cream background with blurred out-of-focus green leaves at the top-left corner for atmosphere.
- **Two columns on desktop** (text ~45%, image ~55%).
- **Left:**
  - H1 line 1 "Healthy Meals" in `forest-800`, line 2 "Happier Lives" in `olive-600`, serif.
  - Sub-headline: "Fresh. Nutritious. Delivered to You." (semibold, ~18px).
  - Paragraph: "At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, customized plans and a commitment to your wellness goals."
  - Buttons: **Explore Meal Plans →** (primary) and **Learn More** (outline).
  - Three benefit indicators in a row with small outline icons: *Fresh Ingredients*, *Nutritionist Approved*, *Delivered to Your Door*.
- **Right:**
  - Large rounded photo of a bowl (grilled chicken slices, avocado, cherry tomatoes, greens, sesame) on a linen cloth, cropped so the bowl bleeds to the right edge.
  - Handwritten script "Good Food Brightens You" top-left of the bowl with a curved arrow.
  - Floating white badge at the bottom-right overlapping the photo: leaf icon in a pale circle + **"Nutritious Meals"** / "A Healthier Tomorrow".
- **Mobile:** text first, image below (full width, 4:3 crop), badge overlaps image bottom edge, benefit indicators wrap into a 1–3 column row.

### 3.3 Stats / Trust Bar

- Full-width `sage-100` band, padding 24–32px.
- Four equal items with thin vertical dividers (desktop): icon (outline, olive) + big number (serif, 28px) + label (muted).
  1. **1M+** Meals Delivered
  2. **30K+** Happy Customers
  3. **4.8/5** Customer Satisfaction
  4. **550+** Corporate Clients
- Tablet: 2×2 grid. Mobile: 2×2 grid, dividers hidden.

### 3.4 About

- Two columns, white/cream background with faint leaf line-art on the far right.
- **Left:** a big rounded photo (colorful bowl with avocado, quinoa, tomatoes) and a **smaller overlapping photo** at bottom-left (chef's hands tossing salad) with a white border and rounded corners. A floating white badge at bottom-right of the big image: leaf icon + **"Nourishing Lives Daily"**.
- **Right:**
  - Eyebrow: ABOUT HEALTHIFY
  - H2: "Your Trusted Healthy Food Partner"
  - Paragraph: "At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable. Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help individuals and families achieve their health goals without sacrificing taste."
  - Three check-style items with small circular icons: *Freshly Prepared Daily*, *Balanced Nutrition*, *Great Taste*.
  - Button: **More About Us →**
- Mobile: stack; images first, overlap preserved but scaled.

### 3.5 Services (Meal Plans)

- Background `sage-100`.
- Header row: eyebrow OUR SERVICES, H2 "Healthy Meal Plans for Every Lifestyle" (left), link "View All Services →" (right).
- **4 cards in a row** (desktop), 2×2 tablet, 1 column mobile (or horizontal snap-scroll is acceptable, but no page-level horizontal scroll).
- Each card: white, radius 16, image on top (4:3, rounded top), title (semibold), two-line description, circular arrow button bottom-right.
  1. **Healthy Ready-To-Eat Meals** — "Fresh, balanced meals prepared daily and ready to enjoy."
  2. **Customized Meal Plans** — "Personalized nutrition plans designed for your goals."
  3. **Weight Management Plans** — "Delicious meals to support your weight loss or maintenance journey."
  4. **High-Protein Meal Plans** — "Nutrient-rich meals for active lifestyles and fitness goals."
- Hover: card lifts 4px, image zooms ~1.03, shadow deepens.

### 3.6 Advantages (Why Choose Healthify)

- Light green band (`sage-100` slightly deeper or with faint leaf motif).
- **Left (≈35%):** eyebrow OUR ADVANTAGES, H2 "Why Choose Healthify", paragraph "More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.", button **Discover All Advantages →**.
- **Right (≈65%):** 4 white cards in a row, each centered: outline icon (olive, 32px), title (semibold), two-line muted caption.
  1. Diamond — **Premium Quality** — "High-quality, fresh ingredients"
  2. Heart — **Health Focused** — "Nutritionist designed meals"
  3. Truck — **Convenient Delivery** — "To your home or office"
  4. Leaf — **Flexible Plans** — "Options for every dietary need"
- Tablet: text on top, cards 2×2. Mobile: cards 2×2 or single column.

### 3.7 Growth Plans (Pricing)

- Eyebrow GROWTH PLANS, H2 "Find the Perfect Plan for You", link "View All Plans →".
- 4-column desktop grid: **3 plan cards + 1 tall image card**.
- **Plan card anatomy:** icon + plan name (serif, 18px), one-line description, price "AED 299" (serif, large) with "/ month" muted, checklist (green check icons, 13px), full-width button at bottom.
  1. **Essential Plan** — "Great for individuals starting their healthy journey." — AED 299 — Fresh daily meals · Balanced nutrition · Flexible delivery — *outline button* "Get Started"
  2. **Balanced Plan** (**MOST POPULAR**) — "Our best value plan for a healthier lifestyle." — AED 499 — Customized meal options · Wide variety of meals · Nutritionist support · Flexible delivery — *filled dark button*. This card is slightly taller/elevated with a dark green ribbon header reading "MOST POPULAR ★" and a stronger shadow.
  3. **Performance Plan** — "For fitness enthusiasts and active lifestyles." — AED 699 — High-protein meals · Performance-focused nutrition · Personalized plans · Priority support — *outline button*
- **Image card:** tall rounded photo of a bowl, dark gradient at the bottom, leaf icon + overlay text in serif white: **"Invest in a Healthier You"**.
- Tablet: 2 columns (image card spans a full row or goes last). Mobile: single column; Balanced plan first or keep order with ribbon visible.

### 3.8 Process (How It Works)

- Eyebrow (reads "OUR APPROACH"), H2 "Healthy Eating in 3 Simple Steps", right-aligned link "It's Easy to Get Started →".
- Three steps in a row separated by thin arrows (→): numbered circle (sage-200 with serif number), outline icon, title (semibold), caption.
  1. **Choose Your Plan** — "Select the meal plan that fits your goals."
  2. **We Prepare Fresh Meals** — "Our chefs prepare nutritious meals with care."
  3. **Enjoy Convenient Delivery** — "Receive your meals and enjoy a healthier you."
- Mobile: stack vertically; arrows become small downward chevrons or are hidden; consider a vertical connector line.

### 3.9 Testimonials

- Eyebrow CUSTOMER STORIES, H2 "What Our Customers Say", link "View More Reviews →".
- 3 bordered white cards in a row: quote (15px, muted-dark), avatar (40px circle) + name (semibold) + "Dubai, UAE" (muted), 5 gold stars right-aligned.
  1. "Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!" — **Sara M.**
  2. "Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle." — **Ahmed R.**
  3. "Great quality, variety, and customer service. I feel healthier and more energized every day." — **Fatima K.**
- Tablet: 2 + 1 or horizontal snap. Mobile: stacked cards.

### 3.10 FAQ

- Background `sage-100` with a subtle leaf texture.
- **Left:** eyebrow FREQUENTLY ASKED QUESTIONS, H2 "Have Questions? We've Got Answers." (two lines), paragraph "Find quick answers to common questions about our meal plans, delivery, and more.", button **View All FAQs →**.
- **Right:** accordion, 5 white rounded rows with "+" icon that rotates to "×"/"−" when open:
  1. What are your meal plans?
  2. How does delivery work?
  3. Can I customize my meals?
  4. What payment methods do you accept?
  5. Do you have a mobile app?
- Write realistic short answers (2–3 sentences each) that are consistent with the page content (Dubai delivery, three plans, etc.).
- Mobile: stack; text block first.

### 3.11 Final CTA Banner

- Full-width dark-green overlay on a blurred leafy photo.
- Left: eyebrow READY TO START?, H2 (serif, white) "Transform Your Health, One Meal At A Time", sub-text "Fresh. Nutritious. Convenient. Join thousands of happy customers today."
- Right: white pill button **Get Started Today →**.
- Mobile: stack, button full width.

### 3.12 Footer

- `forest-900` background, white/muted-white text.
- 4 columns: 
  1. Logo (light version), tagline "At Healthify, We Believe Healthy Eating Should Be Convenient, Affordable, And Enjoyable.", social icons in circular outlines (Facebook, X, Instagram, YouTube).
  2. **Quick Links:** Home, About Us, Our Services, Advantages, Growth Plans, Blogs, Contact Us.
  3. **Our Services:** Healthy ready-to-eat meals, Customized meal plans, Weight management meal, High-protein meal plans, Corporate meal solutions, Fitness and wellness nutrition, Healthy snacks and beverages, Delivery and pickup services.
  4. **Get In Touch:** Dubai, UAE · +971 50 262 6144 · info@healthify.ae (with icons).
- Bottom bar (thin divider): "Copyright © 2026 Healthify. All Rights Reserved." left; "Privacy Policy" and "Terms of Service" right.
- Tablet: 2×2 columns. Mobile: single column, bottom bar stacked.
- **Floating WhatsApp button:** fixed bottom-right, 52px green circle with white WhatsApp icon, soft shadow, opens `https://wa.me/971502626144` in a new tab.

## 4. Imagery Guidelines

- Warm, natural light, top-down or 45° food shots, shallow depth of field, real ingredients (grilled chicken, salmon, avocado, tomatoes, quinoa, greens).
- Use royalty-free sources (Unsplash, Pexels, Pixabay). No watermarks. Note credits in README.
- Convert to **WebP**, max ~1600px wide for hero, ~800px for cards. Keep each image under ~250KB where possible.
- Use `resizeMode="cover"` with fixed aspect ratios to prevent stretching.
- Icons: **lucide** (outline, 1.5–2px stroke) in olive/forest colors.

## 5. Motion

- Minimal and purposeful: hover lift on cards, button press, accordion expand (200–250ms ease), mobile menu slide/fade, optional gentle fade-up on scroll for sections. No parallax, no looping animations. Respect `prefers-reduced-motion`.

## 6. Responsive Breakpoints

| Name | Width | Layout notes |
|---|---|---|
| Mobile | < 640px | Single column, hamburger, 16px gutters, full-width buttons in CTA areas |
| Small tablet | 640–767px | 2-column card grids |
| Tablet | 768–1023px | Hybrid; hamburger still used; hero may stack |
| Desktop | ≥ 1024px | Full reference layout, inline nav |
| Wide | ≥ 1280px | Content capped at 1200px |

Test at 360, 390, 414, 768, 820, 1024, 1280, 1440px. Zero horizontal scroll at any width.

## 7. Accessibility Targets

- Text contrast ≥ 4.5:1 (verify olive-on-sage and white-on-olive).
- Visible focus rings on every interactive element.
- Meaningful `alt` for content images (`accessibilityLabel` on RN Image), decorative images hidden from assistive tech.
- Proper roles: `role="navigation"`, `role="button"`, accordion with `aria-expanded` and `aria-controls`, headings in logical order (one H1).
