import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // SEO overrides
    canonicalUrl: z.string().optional(),  // override canonical for duplicate content
    noindex: z.boolean().default(false),  // mark thin/duplicate posts as noindex
  }),
});

export const collections = { blog };
