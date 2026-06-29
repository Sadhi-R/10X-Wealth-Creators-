# 10X Wealth Creators Website

A modern React website for **10X Wealth Creators** — a mentorship-led education movement focused on mindset, purpose, practical business growth, and community.

> **Important:** 10X Wealth Creators provides educational content and coaching only. It does not offer financial, legal, or investment advice.

## What This Site Is

This is not a pricing-first landing page. The site is structured to guide visitors through:

**Awareness → Trust → Education → Community → Enrollment**

Visitors can explore the **10X Wealth Framework**, read success stories, join the community, and book a discovery call **before** being asked to choose a membership plan.

## Features

- **React 19 + Vite 6** — fast development and optimized production builds
- **React Router 7** — client-side navigation across all pages
- **Tailwind CSS v4** — custom gold-forward design system with glass panels
- **Light & dark themes** — persisted in `localStorage`
- **Trust-first homepage** — mission, framework, mentors, and stories before membership CTAs
- **Per-page SEO titles** — via `usePageMeta` hook
- **Floating contact FAB** — WhatsApp, call, and email in one menu
- **Skip-to-content link** — accessibility improvement
- **Fully responsive** — mobile-first layout

## Pages & Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Mission-led journey: framework, mentors, stories, community |
| `/wealth-framework` | Wealth Framework | Five-pillar methodology and transformation journey |
| `/courses` | Programs | Course catalog and learning paths |
| `/courses/:slug` | Course Detail | Individual program overview |
| `/about` | About | Founder story, vision, mentors, values |
| `/community` | Community | WhatsApp, app, and social channels |
| `/testimonials` | Success Stories | Member testimonials |
| `/faq` | FAQs | Common questions and objections |
| `/contact` | Contact | Discovery call, channels, contact form |
| `/plans` | Membership Plans | Silver, Gold, Diamond enrollment |
| `/privacy-policy` | Privacy Policy | Legal (review before launch) |
| `/terms-and-conditions` | Terms & Conditions | Legal (review before launch) |
| `/refund-policy` | Refund Policy | Refund eligibility and process |
| `/disclaimer` | Disclaimer | Educational coaching disclaimer |

## Homepage Section Order

1. Hero — “Start Your Journey” + “Join Community”
2. Impact stats
3. Problems we solve
4. Vision & Mission
5. 10X Wealth Framework (preview)
6. Transformation journey (4 steps)
7. Founder story
8. Mentors
9. Core learning paths
10. Success stories
11. Community
12. Free learning resources
13. Course catalog
14. FAQ preview
15. Final invite CTA (Community · Discovery Call · Membership)

Membership pricing cards appear on `/plans` only — not above the fold on the homepage.

## CTA Strategy

| CTA | Where it appears |
|-----|------------------|
| **Start Your Journey** | Home hero → `/wealth-framework` |
| **Join the Community** | Home hero, nav, community sections → WhatsApp |
| **Book a Discovery Call** | Mentors, contact, plans → phone / contact page |
| **Explore Programs** | Framework, courses pages |
| **Become a Member** | Final CTA, footer → `/plans` |

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [React Router 7](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer

### Install and run locally

```bash
# Clone the repository
git clone <repository-url>
cd 10X-Wealth-Creators-

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the URL shown in the terminal (usually **http://localhost:5173**).

### Production build

```bash
npm run build
npm run preview   # preview the production build locally
```

Output is written to `dist/`.

## Project Structure

```
.
├── public/
│   └── images/                 # Logo, mentors, courses, hero background
├── src/
│   ├── components/             # Navbar, Footer, cards, FinalInviteSection
│   ├── context/                # ThemeContext (light/dark)
│   ├── data/
│   │   ├── siteContent.js      # Brand copy, framework, FAQs, plans, mentors
│   │   ├── courses.js          # Course content
│   │   ├── testimonials.js     # Success stories
│   │   └── siteImages.js       # Image path helpers
│   ├── hooks/
│   │   └── usePageMeta.js      # Per-page title and meta description
│   ├── pages/                  # Route pages
│   ├── App.jsx                 # Router setup
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind + theme tokens
├── app.html                    # Vite HTML shell (dev)
├── package.json
└── vite.config.js
```

## Editing Content

### Brand, framework, FAQs, and plans

Edit **`src/data/siteContent.js`** — this is the single source of truth for:

- Hero copy and vision/mission
- Wealth framework pillars
- FAQs
- Membership plans (Silver, Gold, Diamond)
- Mentor bios
- Community highlights
- Per-page SEO metadata (`pageMeta`)

### Courses

Edit **`src/data/courses.js`** — each course has `slug`, `title`, `shortDescription`, `description`, `image`, `mentor`, and `learnings`.

### Testimonials

Edit **`src/data/testimonials.js`**.

### Images

Assets are served from `public/images/`:

| File | Usage |
|------|--------|
| `Logo.png` | Navbar, footer, hero card |
| `favicon.png` | Browser tab icon |
| `hero-background.png` | Home hero background |
| `sampath-kumar.jpg` / `ram-prasad.jpg` | Mentor photos |
| `courses/*` | Course cover images |

Update paths in `src/data/siteImages.js` if you rename or add files.

## Deployment

This is a static SPA. **Always deploy the built `dist/` folder** — never serve the repo root.

### GitHub Pages

Push to `master` — `.github/workflows/deploy.yml` runs `npm run publish:pages` and commits the built site to `docs/`. The root `index.html` redirects visitors to `/docs/`.

Custom domain: `10xwealthcreators.com` via `public/CNAME`.

### Netlify / Vercel

Connect the repo — build command `npm run build`, output directory `dist`.

## Known Limitations

- **Contact form** — frontend only; not connected to a backend. Use WhatsApp, phone, or email for immediate contact.
- **Legal pages** — marked for legal review before public launch.
- **Community member count** — update `impactStats` in `siteContent.js` with verified numbers as you grow.

## Contact

- **Email:** 10xwealthcreators@gmail.com
- **Phone / WhatsApp:** +91 79810 88978
- **WhatsApp Group:** [Join community](https://chat.whatsapp.com/Im4AqA2MjsgAK4very2D6L)
- **Instagram:** [@10xwealthcreators](https://www.instagram.com/10xwealthcreators)
- **YouTube:** [@10XWealthCreators](https://www.youtube.com/@10XWealthCreators)
- **X:** [@10XWC](https://x.com/10XWC)

## License

This project is proprietary and confidential. All rights reserved.
