# 📦 Available Components Reference

This document provides a high-level map of the reusable React/TypeScript components that are currently available in the `lost-haus` code-base.  Use it as a quick reference when assembling or updating pages.

> NOTE: File paths are relative to `src/components/…`. Inline descriptions are intentionally concise – open the component for full API details.

---

## 1. Layout & Structure

| Component | Path | Purpose |
|-----------|------|---------|
| **PageLayout** | `PageLayout.tsx` | Universal wrapper that handles header, footer, breadcrumbs & hero placement. |
| **UniversalHero** | `UniversalHero.tsx` | Central hero presenter – powered by `heroConfigs` data. |
| **Header / MobileMenu** | `ui/header.tsx`, `ui/mobile-menu.tsx` | Global navigation (desktop & mobile). |
| **FooterSection** | `ui/footer-section.tsx` | Global footer. |
| **Breadcrumb** helpers | `ui/breadcrumb*.tsx` | Re-usable breadcrumb primitive + wrappers. |
| **Carousel** | `ui/carousel.tsx` | Reusable Embla based carousel wrapper. |

---

## 2. Generic UI (Atoms & Molecules)

Located in `ui/` – most are shadcn/ui or Radix-powered abstractions.

Badge · Button · Card · Input · Select · Textarea · Tabs · Avatar · Accordion · Separator · UrgencyFlag · LazyImage · ResponsiveImage · InView (intersection observer) · BouncingArrow · BookNowButton · PrintButton · ShareButton · HeaderLeadCapture · Spinning-Text (folder placeholder).

These primitives keep styling & behavior consistent across pages.

---

## 3. Global Sections / Blocks

Reusable, page-agnostic feature blocks that can be dropped onto any page.

| Component | Path | Quick Description |
|-----------|------|-------------------|
| **CTASection** | `CTASection.tsx` | Two-column call-to-action with headline & button. |
| **PricingSection / PricingCard** | `PricingSection.tsx`, `PricingCard.tsx` | Package / tier display. |
| **VendorSection** | `VendorSection.tsx` | Grid or compact layout of preferred vendors. |
| **EventTypesGallery** | `EventTypesGallery.tsx` | Image grid linking to event pages. |
| **ThreeStepProcess** | `ThreeStepProcess.tsx` | Visual 1-2-3 process with CTA. |
| **FAQSection** | `FAQSection.tsx` | FAQ accordion tied into central `faqData.json`. |
| **LogosSection / LogoTicker** | `LogosSection.tsx`, `LogoTicker.tsx` | Client / press logo displays (static grid vs ticker). |
| **PressKitSection** | `PressKitSection.tsx` | Downloadable press assets & brand info. |
| **FloatingObjects** | `FloatingObjects.tsx` | Decorative floating SVGs for visual interest. |
| **Image / Gallery Sections** | `ui/improved-gallery-section.tsx`, `ui/image-gallery-section.tsx`, `ui/gallery4.tsx` | Various responsive photo gallery layouts. |
| **FeaturedQuote / Reviews** | `ui/featured-quote.tsx`, `ui/reviews.tsx` | Testimonial highlight blocks. |
| **HoneyBookForm** | `HoneyBookForm.tsx` | Embedded HoneyBook inquiry widget. |
| **BarCostCalculator** | `BarCostCalculator.tsx` | Simple cost estimator for bar packages. |

---

## 4. Domain-Specific Component Suites

### Corporate (`corporate/`)

CorporateAmenities · CorporateContactForm · CorporateFAQ · CorporateLayouts · CorporatePricing · CorporateTestimonials · CorporateValueProps · **PreferredVendors** (corporate variant)

### Wedding (`wedding/`)

WeddingPackages · WeddingFAQ · WeddingPlanning · WeddingContact · WeddingGallery · WeddingTestimonials · WeddingCTA · VenueHighlights · **PreferredVendors** (wedding variant)

### Showers (`showers/`)

ShowersPackages · ShowersFAQ · ShowersPlanning · ShowersContact · ShowersGallery · ShowersTestimonials · ShowersCTA · VenueHighlights · **PreferredVendors** (showers variant)

### FAQ (`faq/`)

SimpleFaqCategories · FaqMoreAnswers (helper for linking to full FAQ page)

### SEO (`seo/`)

Seo (wrapper component) + seo-schemas utility exports.

---

## 5. Utility / Visual Helpers

* **AvatarGroup** – Team avatar cluster with overlapping circles.  
* **UrgencyFlag** – Visual flag for limited-time offers.  
* **BookNowButton** – Styled link variant used across CTAs.  
* **ResponsiveImage / LazyImage** – Optimised image components with intersection-observer lazy loading.

---

## 6. How to Choose Components

1. **Start with `PageLayout`** – it automatically injects header, footer, breadcrumbs and, if you supply `heroKey`, the proper hero section.
2. **Add feature blocks** (section components from #3) inside the layout. They are designed to stack vertically in any order.
3. **Sprinkle UI primitives** (buttons, badges, etc.) as needed for interactions.
4. **For event-specific pages** import from the relevant domain folder to get perfectly-tuned content blocks.

---

_End of reference_ 