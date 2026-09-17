// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // CF_PAGES_URL is set automatically by Cloudflare Pages
  // URL is set in the GitHub Actions workflow for preview deploys
  site: process.env.CF_PAGES_URL || process.env.URL || 'https://news.yumpdf.com',
  integrations: [
    mdx(),
    tailwind(),
  ],
});
