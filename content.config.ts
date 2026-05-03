import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    client: z.string(),
    services: z.string(),
    featuredImage: z.string(),
    liveSite: z.string(),
    isFeatured: z.boolean().default(false),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = { works };
