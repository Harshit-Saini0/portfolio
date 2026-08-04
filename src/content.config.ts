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

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    external: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
