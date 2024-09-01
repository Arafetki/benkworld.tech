import { sql } from "drizzle-orm";
import {sqliteTable, text, integer, index} from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('posts',{
    id: integer('id',{mode: 'number'}).primaryKey({autoIncrement: true}),
    title: text('title',{length: 256}).notNull(),
    author: text('author',{length: 256}).notNull().default('Arafet BenKilani'),
    content: text('content').notNull().default(''),
    tags: text('tags',{mode: 'json'}).$type<string[]>().notNull(),
    isPublished: integer('is_published',{mode: 'boolean'}).notNull().default(true),
    created: text('created').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updated: text('updated').$onUpdate(()=> new Date().toISOString()),
},
(table)=>({titleIdx: index('title_idx').on(table.title)})
);