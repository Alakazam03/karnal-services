// src/content/config.ts — Content collections schema for programmatic blog SEO
import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    /** Optional: related service slug for internal linking and CTA */
    serviceSlug: z.string().optional(),
    /** Optional: keywords for meta (not displayed) */
    keywords: z.array(z.string()).optional()
  })
});

export const collections = { blog };
