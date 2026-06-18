# 10X Wealth Creators Website

A modern React website for **10X Wealth Creators** — a coaching and education brand focused on mindset, purpose, and practical business growth.

> **Note:** 10X Wealth Creators provides educational content and coaching only. It does not offer financial, legal, or investment advice.

## Overview

This site is a full rebuild of the original static HTML website. It includes course listings, about/mentor content, contact channels, and legal pages. Course content is driven from a single data file for easy updates.

## Features

- **React + Vite** — fast dev server and optimized production builds
- **React Router** — client-side navigation across all pages
- **Tailwind CSS v4** — utility-first styling with a custom design system
- **Light & dark themes** — light mode by default, toggle saved in `localStorage`
- **Fully responsive** — mobile-first layout
- **Floating contact button** — WhatsApp, call, email, Instagram, YouTube
- **No backend yet** — contact form is frontend-only; course pages are informational

## Pages / Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/courses` | Course listing |
| `/courses/:slug` | Course detail |
| `/about` | About & mentors |
| `/contact` | Contact channels & form |
| `/privacy-policy` | Privacy Policy (DRAFT) |
| `/terms-and-conditions` | Terms & Conditions (DRAFT) |
| `/disclaimer` | Disclaimer (DRAFT) |

## Project Structure

```
.
├── public/
│   └── images/              # Static assets (logo, mentors, backgrounds)
├── src/
│   ├── components/          # Navbar, Footer, CourseCard, FloatingContactButton, UI
│   ├── context/             # ThemeContext (light/dark)
│   ├── data/
│   │   ├── courses.js       # Course content — edit here
│   │   └── siteImages.js    # Image path constants
│   ├── pages/               # Route pages
│   ├── App.jsx              # Router setup
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind + theme tokens
├── legacy/                  # Backup of original static index.html
├── html/                    # Original static legal/about pages (archived)
├── images/                  # Source image assets (also copied to public/images)
├── index.html               # Vite HTML shell
├── package.json
└── vite.config.js
```

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [React Router 7](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ recommended

### Install & run

```bash
# Clone the repo
git clone <repository-url>
cd 10X-Wealth-Creators-

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

Output is written to `dist/`.

## Editing Content

### Courses

Edit `src/data/courses.js` — each course has `slug`, `title`, `shortDescription`, `description`, `image`, `mentor`, and `learnings`. Descriptions are marked as DRAFT pending final review.

### Images

Brand and course images are served from `public/images/`:

| File | Usage |
|------|--------|
| `logo.png` | Navbar, footer, hero (lotus logo on dark pill — works on light & dark themes) |
| `favicon.png` | Browser tab icon |
| `hero-background.png` | Home hero background |
| `sampath-kumar.jpg` / `ram-prasad.jpg` | Mentor photos |
| `courses/*.jpg` | Course cover images (local — no external URLs) |

Update paths in `src/data/siteImages.js` and `src/data/courses.js` if you rename or add files.

### Legal pages

Privacy Policy, Terms & Conditions, and Disclaimer contain **placeholder text** marked for legal review before launch.

## Deployment

This is a static SPA. **Always deploy the built `dist/` folder** — never serve the repo root. If the live site tries to load `/src/main.jsx`, the host is serving source files instead of the production build.

### GitHub Pages (recommended)

1. Push to `master` — the workflow in `.github/workflows/deploy.yml` runs `npm run build` and publishes the `dist/` folder to the `gh-pages` branch.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source** → **Deploy from a branch** → Branch: **`gh-pages`** → Folder: **`/ (root)`**.  
   Do **not** use the `master` branch as the Pages source; that serves raw source files and causes the `text/jsx` MIME error.
3. Custom domain `10xwealthcreators.com` is set via `public/CNAME` (copied into `dist/` on build).

### Netlify / Vercel

Connect the repo — `netlify.toml` and `vercel.json` already set build command, output directory, and SPA routing.

## Contact

- **Email:** 10xwealthcreators@gmail.com
- **Phone / WhatsApp:** +91 94414 15563
- **WhatsApp Group:** [Join community](https://chat.whatsapp.com/Im4AqA2MjsgAK4very2D6L)
- **Instagram:** [@10xwealthcreators](https://www.instagram.com/10xwealthcreators)
- **YouTube:** [@10XWealthCreators](https://www.youtube.com/@10XWealthCreators)
- **X:** [@10XWC](https://x.com/10XWC)

## License

This project is proprietary and confidential. All rights reserved.
