import { defineCollection, z, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';

// Shown in the side panel next to an entry. Two kinds of item:
//   - { image: ./media/photo.jpg, alt: "…", caption: "…" }  a picture (opens full size)
//   - { link: https://…, title: "…", image: ./media/shot.jpg }  a link card. Without
//     `image`, the page's og:image is fetched at build time; failing that, a plain tile.
//     `preview: false` drops the picture and shows just the text.
// Image paths are relative to the markdown file.
const media = (image: SchemaContext['image']) =>
  z
    .array(
      z.union([
        z.object({
          link: z.string(),
          title: z.string().optional(),
          image: image().optional(),
          preview: z.boolean().default(true),
        }),
        z.object({
          image: image(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      ])
    )
    .default([]);

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    // "case-study" | "work" | "experiment" — free-form, shown as a small label.
    kind: z.string().default('work'),
    // Link out instead of rendering a detail page (e.g. a live site or repo).
    external: z.string().url().optional(),
    media: media(image),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    role: z.string(),
    company: z.string(),
    location: z.string().optional(),
    // e.g. "2023" or "Jan 2023" — kept as free-form strings so you can be as
    // precise or as vague as you like.
    start: z.string(),
    // Omit (or leave unset) for a current role — renders as "Present".
    end: z.string().optional(),
    summary: z.string().optional(),
    // Sorts the list; most recent first. Use the start year if unsure.
    sortDate: z.coerce.date(),
    // Optional outbound link (e.g. a paper PDF) shown below the bullets.
    link: z.string().optional(),
    linkLabel: z.string().optional(),
    media: media(image),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience };
