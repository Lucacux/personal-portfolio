import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    pitch: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    date: z.string().optional(),
    thumbnail: z.string().optional(),
    repoUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    skills: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
