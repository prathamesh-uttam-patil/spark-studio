# SPARK Studio

Production-ready creative technology studio website for **SPARK Studio**, founded by **Prathamesh** and **Rohan**.

Built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, **Three.js**, and **React Three Fiber**.

---

## 01. Brand & Concept

- **Positioning:** Wild creative energy. Restrained execution.
- **Founders:** Prathamesh and Rohan
- **Business Email:** `teamsparkworks@gmail.com`
- **Design Metaphor:** *The Controlled Spark* — Architectural typography and quiet editorial rhythm contrasting with an evolving geometric 3D sculpture (**SPARK Core**).
- **Signature 3D:** Procedurally generated sculpture that choreographs across 4 scroll stages (Introduction, Exploration, Transformation, Resolution).
- **Portfolio Integrity:** Fictional exploration projects are explicitly labeled as `CONCEPT PROJECT`.

---

## 02. Architecture & Routes

```text
spark-studio/
├── public/                 # Static assets, OG cards, robots/sitemap outputs
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, Google Fonts (DM Sans & Inter), Skip-link, Header/Footer
│   │   ├── globals.css     # Design tokens, CSS variables, typography clamp(), utility classes
│   │   ├── page.tsx        # Homepage (9 full sections with 3D hero)
│   │   ├── services/
│   │   │   ├── page.tsx    # Services overview
│   │   │   └── [slug]/page.tsx  # Dynamic service detail pages
│   │   ├── work/
│   │   │   ├── page.tsx    # Portfolio overview (Concept projects)
│   │   │   └── [slug]/page.tsx  # Dynamic case study detail pages
│   │   ├── about/page.tsx  # Studio philosophy, founders, capabilities
│   │   ├── contact/page.tsx# Discovery call booking & project inquiry form
│   │   ├── privacy/page.tsx# Privacy policy
│   │   ├── not-found.tsx   # Custom 404 page
│   │   ├── sitemap.ts      # Automated XML sitemap
│   │   ├── robots.ts       # Robots.txt generator
│   │   └── api/
│   │       └── contact/route.ts # Server-side validated inquiry handler
│   ├── components/
│   │   ├── layout/         # Header, Footer, Mobile navigation
│   │   ├── home/           # Hero, StudioIntro, ServicesOverview, SelectedWork, Process, etc.
│   │   ├── three/          # SparkCore, HeroScene, HeroSceneFallback, SceneErrorBoundary
│   │   └── contact/        # InquiryForm with Zod client & server validation
│   ├── data/               # Typed data models (services.ts, projects.ts, faq.ts)
│   └── lib/                # SEO metadata, Zod validation schemas, analytics layer
├── ASSETS.md               # Asset and license manifest
└── package.json
```

---

## 03. Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ (developed and verified on Node.js v26.5)
- npm 9+

### Installation
```bash
# Clone or navigate to directory
cd spark-studio

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm run start
```

### TypeScript Validation
```bash
npx tsc --noEmit
```

---

## 04. Environment Variables

Create a `.env.local` file based on `.env.example`:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for sitemap, canonical links, and OG metadata | `https://sparkstudio.design` |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `RESEND_API_KEY` | Optional Resend API key for inquiry email delivery | `re_...` |

---

## 05. 3D System & Resilience

1. **Client Isolation:** The 3D canvas is completely isolated inside a client-side component (`HeroScene.tsx`) with dynamic import and skeleton placeholder so server-side rendered HTML and LCP headlines appear instantly.
2. **Graceful Fallbacks:** If WebGL is unsupported or disabled, `SceneErrorBoundary` and `HeroSceneFallback` render an SVG geometric illustration that preserves the editorial composition without layout shifts.
3. **Adaptive Performance:** Utilizes `AdaptiveDpr`, IntersectionObserver to pause rendering loops when the tab or section is hidden, and respects `prefers-reduced-motion: reduce`.
4. **Non-blocking UI:** Canvas pointer events are disabled (`pointer-events: none`) so links and CTA buttons remain immediately clickable.

---

## 06. Accessibility (WCAG 2.2 AA)

- Semantic HTML landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`).
- Skip to main content link on all pages.
- Full keyboard navigation and visible focus rings (`:focus-visible`).
- Accessible accordion controls with `aria-expanded` and programmatic error descriptions.
- Responsive touch targets across mobile viewports.
