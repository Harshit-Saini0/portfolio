# Portfolio

A minimalist personal site built with [Astro](https://astro.build). Static output — no backend, no client-side JavaScript shipped, no database. Deploys free to Netlify, Vercel, Cloudflare Pages or GitHub Pages.

## Structure

The landing page is an index: a hero, then a one-line overview of each section. Everything else gets its own page.

```
/              hero + section overviews + contact
/about/        the full about page
/work/         project list  →  /work/<slug>/
/writing/      post list     →  /writing/<slug>/
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

**2. `astro.config.mjs`** — change `site` to your real domain (it drives canonical URLs and the sitemap).

**3. Projects** — one markdown file per project in `src/content/projects/`. The filename becomes the URL (`about-thing.md` → `/work/about-thing/`).

```yaml
---
title: Project name
summary: One line shown in the list.
date: 2026-03-01
kind: case study      # free-form label: case study, work, experiment…
external: https://…   # optional — links out instead of building a detail page
draft: false          # optional — true hides it everywhere
---

Markdown body renders on the detail page.
```

**4. Writing** — same idea in `src/content/writing/` (`title`, `date`, optional `summary` / `external` / `draft`).

Delete the `example-*.md` files once you've added your own; the sections show a placeholder note when a folder is empty.

**5. Design** — all colours, spacing and type live in the variables at the top of `src/styles/global.css`. Light and dark themes follow the visitor's system setting.

**6. Motion** — three small pieces, all off automatically under `prefers-reduced-motion`:

- *Reveal on scroll*: add `data-reveal` to any element and it fades and lifts in once. `data-reveal-delay="120"` staggers it.
- *Colour wash*: the page background eases from `--wash-top` to `--wash-bottom` as you scroll. Change those two variables to retune it.
- *Spots*: soft blurred ink blobs drift in and out behind the content, drawn on a canvas in `src/components/Backdrop.astro`. Tune `COUNT`, the radius range, and `peak` opacity there — or delete the `<Backdrop />` line in `src/layouts/Base.astro` to drop it entirely.

**7. Images** — drop files in `public/` and reference them as `/photo.jpg`. Replace `public/favicon.svg` with your own.

## Deploy

Build command `npm run build`, publish directory `dist`. That's it on any static host.
