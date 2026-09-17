# My Astro Blog

A clean, modern, **static** blog built with Astro + Tailwind CSS.  
Perfect for Netlify or Vercel. Designed so AI can write posts easily.

## Features

- ⚡ Super fast static site
- 🗒️ Markdown / MDX content
- 🎨 Beautiful, modern UI with Tailwind
- 📱 Fully responsive
- 🔍 SEO ready (meta tags, Open Graph, sitemap, RSS)
- 🤖 AI-friendly content structure

## Quick Start

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Framework Preset: **Astro**
5. Click **Deploy**

Done. Every push to `main` will auto-deploy.

## Deploy to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Select your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

## How AI Should Write Posts

Create a new file in `src/content/blog/` with this format:

```markdown
---
title: "Your Post Title Here"
description: "A short 1-2 sentence summary for SEO and social cards"
pubDate: 2026-09-16
tags: ["tag1", "tag2", "tag3"]
heroImage: "/images/optional.jpg"   # optional
---

Your full Markdown content here...

## Heading

Paragraphs, lists, code blocks, etc. all work.
```

Then just commit + push.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── content/
│   └── blog/       # ← Put all your .md posts here
├── layouts/        # Page layouts
├── pages/          # Routes
└── styles/         # Global CSS
```

## Customize

- Site name & description → `src/consts.ts`
- Site URL → `astro.config.mjs` (important for sitemap & RSS)
- Colors / design → `src/styles/global.css` and Tailwind classes

---

Happy writing!

