import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Every .md file in src/content/blog becomes a post; the filename is the URL slug.
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts show up in `npm run dev` but are left out of the production build.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
