import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const works = defineCollection({
    loader: glob({ pattern: "src/content/**/*.md" }),
    schema: ({ image }) => z.object({
        title: z.string().max(100),
        slug: z.string(),
        client: z.string().max(50),
        category: z.enum([
            "Project Management", 
            "Project Coordination", 
            "Service Delivery", 
            "Infrastructure Deployment", 
            "Risk Mitigation & Escalation Management", 
            "Standardization & Process Improvement", 
            "Data Analysis"
        ]),
        services: z.string().max(65),
        year: z.string().max(4),
        featuredImage: image(),
        imageTwo: image(),
        imageThree: image(),
        imageFour: image(),
        liveSite: z.string().url(),
        description: z.string().max(350),
        isFeatured: z.boolean().default(false),
        isDraft: z.boolean().default(false)
    })
});

export const collections = { works };