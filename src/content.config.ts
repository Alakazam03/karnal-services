// src/content.config.ts — Content Layer: programmatic blog for scalable SEO
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    serviceSlug: z.string().optional(),
    keywords: z.array(z.string()).optional()
  })
});

export const collections = { blog };
