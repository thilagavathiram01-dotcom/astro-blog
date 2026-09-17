// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Always use the canonical production domain — never let CF_PAGES_URL override it
  site: 'https://news.yumpdf.com',
  integrations: [
    mdx(),
    tailwind(),
  ],
});
