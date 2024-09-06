import  postgres  from "postgres";
import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from "@/env.mjs";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  client: ReturnType<typeof postgres> | undefined;
};


export const client = globalForDb.client ?? postgres(env.DATABASE_URL,{ prepare: false, max: 10, idle_timeout: 10 });
if (process.env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
