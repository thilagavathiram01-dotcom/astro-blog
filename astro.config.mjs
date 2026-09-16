// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Use Netlify/Vercel provided URL, fallback for local
  site: process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://example.com',
  integrations: [
    mdx(),
    sitemap({
      // optional: filter out any unwanted pages
      // filter: (page) => !page.includes('/draft/'),
    }),
    tailwind(),
  ],
});
