# Portfolio

My personal site, built with [Astro](https://astro.build). It generates static pages and ships a few small browser scripts. It has no backend or database and can be hosted on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

Live at [harshitsainiportfolio.vercel.app](https://harshitsainiportfolio.vercel.app/).

## Structure

The home page has an introduction, links to each section, and contact details. About, experience, and projects have their own pages.

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

## Edit the site

**1. `src/site.config.ts`:** name, role, email, hero headline, about paragraphs, the one-line `overview` teasers shown on the landing page, social links, the "worked with" strip, and the nav. Project and experience text lives in the Markdown files below; page templates contain a few short labels and messages.

**2. `astro.config.mjs`:** `site` is set to the deployed URL; it drives canonical URLs and the sitemap. Update it if the domain changes.

**3. Experience:** one markdown file per role in `src/content/experience/`, most recent `sortDate` first.

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

**4. Projects:** one markdown file per project in `src/content/projects/`. The filename becomes the URL (`about-thing.md` → `/projects/about-thing/`).

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

Empty sections show a short message until you add an entry.

**Media panel:** projects and experience entries both take an optional `media` list, shown in a column beside the text (and on the project's detail page). On phones it becomes a swipeable strip below the text.

```yaml
media:
  - image: ./media/robot.jpg          # a picture; click opens it full size
    alt: The robot in the living room
    caption: First prototype          # optional
  - link: https://github.com/you/repo # a link card
    title: Source code                # optional; defaults to the page's title
    image: ./media/repo-shot.jpg      # optional; defaults to the page's og:image
  - link: https://openreview.net/…
    preview: false                    # optional; text only, no picture
```

Image paths are relative to the markdown file. Keep them in a `media/` folder beside the entries; Astro resizes them and converts them to WebP at build time. A link without `image` downloads the page's preview image when the site builds and saves it to `src/assets/link-previews/`. Commit that folder: the site always renders from the saved copy, so a failed download on a later build (rate limit, site down) keeps the last good image. If the page has none, the card shows a dotted placeholder tile instead.

**5. Design:** all colours, spacing and type live in the variables at the top of `src/styles/global.css`. Light and dark themes follow the visitor's system setting.

**6. Motion:** two effects, both disabled when the visitor uses `prefers-reduced-motion`:

- *Reveal on scroll*: add `data-reveal` to any element and it fades and lifts in once. `data-reveal-delay="120"` staggers it.
- *Backdrop*: a colour wash that eases from `--wash-top` to `--wash-bottom` as you scroll, plus a field of dots drawn on a canvas in `src/components/Backdrop.astro` that drifts with fractal noise. Tune `SPACING`, `MAX_R`, `ALPHA`, `DRIFT` and `SCROLL_RATE` there, or delete the `<Backdrop />` line in `src/layouts/Base.astro` to drop it entirely.

**7. Images:** for project and experience entries, use the `media` list above. Anything else goes in `public/` and is referenced as `/photo.jpg`. Replace `public/favicon.svg` with your own.

## Deploy

Use `npm run build` as the build command and `dist` as the publish directory. On Vercel, import the GitHub repo. It detects Astro and deploys on every push to `main`.
