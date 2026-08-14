import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    // "case-study" | "work" | "experiment" — free-form, shown as a small label.
    kind: z.string().default('work'),
    // Link out instead of rendering a detail page (e.g. a live site or repo).
    external: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
  schema: z.object({
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
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience };
