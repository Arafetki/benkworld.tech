import {sql} from 'drizzle-orm';
import { pgTable, serial, varchar, text, boolean, timestamp, index} from 'drizzle-orm/pg-core';

export const posts = pgTable('posts',{
    id: serial('id').primaryKey(),
    title: varchar('title',{length: 256}).notNull(),
    author: varchar('author',{length: 256}).notNull().default('Arafet BenKilani'),
    content: text('content').notNull().default(''),
    tags: text('tags').array().notNull().default(sql`'{}'::text[]`),
    isPublished: boolean('is_published').notNull().default(true),
    created: timestamp('created').notNull().defaultNow(),
    updated: timestamp('updated').$onUpdate(()=>new Date())
},
(table)=>({titleIdx: index('title_idx').on(table.title)})
);
