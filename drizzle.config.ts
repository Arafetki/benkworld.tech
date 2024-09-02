import { type Config } from "drizzle-kit";
import { env } from "@/env.mjs";

export default {

    schema: "./src/server/db/schema.ts",
    out:'./drizzle/migrations',
    dialect: "postgresql",
    dbCredentials: {
        url: env.DATABASE_URL
    },
    strict: true,
    verbose: true
} satisfies Config;