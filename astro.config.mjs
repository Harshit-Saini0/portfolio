// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://harshitsainiportfolio.vercel.app',
  integrations: [sitemap()],
  // Link-card preview images (og:image) are downloaded and resized at build
  // time rather than hotlinked; see src/components/MediaPanel.astro.
  image: { remotePatterns: [{ protocol: 'https' }] },
});
