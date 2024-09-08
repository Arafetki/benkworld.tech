import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from 'remark-gfm';
import readingTime from "reading-time";

const posts = defineCollection({
  name: "posts",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    authors: z.array(z.string()),
    date: z.coerce.date(),
    published: z.boolean().default(true),
    thumbnail: z.string(),
    level: z.enum(["beginner","intermediate","advanced"]).default("beginner")
  }),
  transform: async (doc,ctx) => {
    const mdx = await compileMDX(ctx,doc,{
        rehypePlugins: [
            [rehypePrettyCode,{theme: 'dark-plus', keepBackground: false}]
        ],
        remarkPlugins: [remarkGfm]
    });

    return {
        ...doc,
        mdx,
        slug: doc._meta.path,
        readMinutes: readingTime(doc.content).text,
    }

  },
});
 
export default defineConfig({
  collections: [posts],
});