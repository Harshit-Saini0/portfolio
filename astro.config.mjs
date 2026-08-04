// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your real domain before deploying — it powers sitemap + canonical URLs.
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
});
