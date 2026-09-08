# Portfolio

A minimalist personal site built with [Astro](https://astro.build). Static output — no backend, no client-side JavaScript shipped beyond a few small scripts, no database. Deploys free to Vercel, Netlify, Cloudflare Pages or GitHub Pages.

Live at [harshitsainiportfolio.vercel.app](https://harshitsainiportfolio.vercel.app/).

## Structure

The landing page is an index: a hero, then a one-line overview of each section. Everything else gets its own page.

```
/               hero + section overviews + contact
/about/         the full about page
/experience/    roles, in order  →  each with a bulleted body
/projects/      project list     →  /projects/<slug>/
```

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site → dist/
npm run preview  # preview the built site
```

## Fill in your details

**1. `src/site.config.ts`** — name, role, email, hero headline, about paragraphs, the one-line `overview` teasers shown on the landing page, social links, the "worked with" strip, and the nav. This is the only file you need to touch for the copy.

**2. `astro.config.mjs`** — `site` is set to the deployed URL; it drives canonical URLs and the sitemap. Update it if the domain changes.

**3. Experience** — one markdown file per role in `src/content/experience/`, most recent `sortDate` first.

```yaml
---
role: Job title
company: Company name
location: City, State      # optional
start: "Jan 2026"
end: "Present"              # optional — omit for a current role
summary: One line shown above the bullets.   # optional
sortDate: 2026-01-01        # drives ordering — use the start date
---

- Bullet points describing the role render as a markdown list.
```

**4. Projects** — one markdown file per project in `src/content/projects/`. The filename becomes the URL (`about-thing.md` → `/projects/about-thing/`).

```yaml
---
title: Project name
summary: One line shown in the list.
date: 2026-03-01
kind: case study      # free-form label: case study, project, hackathon…
external: https://…   # optional — links out instead of building a detail page
draft: false           # optional — true hides it everywhere
---

Markdown body renders on the detail page (skipped if `external` is set).
```

The sections show a placeholder note when a folder is empty.

**5. Design** — all colours, spacing and type live in the variables at the top of `src/styles/global.css`. Light and dark themes follow the visitor's system setting.

**6. Motion** — two small pieces, both off automatically under `prefers-reduced-motion`:

- *Reveal on scroll*: add `data-reveal` to any element and it fades and lifts in once. `data-reveal-delay="120"` staggers it.
- *Backdrop*: a colour wash that eases from `--wash-top` to `--wash-bottom` as you scroll, plus a field of dots drawn on a canvas in `src/components/Backdrop.astro` that drifts with fractal noise. Tune `SPACING`, `MAX_R`, `ALPHA`, `DRIFT` and `SCROLL_RATE` there — or delete the `<Backdrop />` line in `src/layouts/Base.astro` to drop it entirely.

**7. Images** — drop files in `public/` and reference them as `/photo.jpg`. Replace `public/favicon.svg` with your own.

## Deploy

Build command `npm run build`, publish directory `dist`. On Vercel: import the GitHub repo, it auto-detects Astro and deploys on every push to `main`.
