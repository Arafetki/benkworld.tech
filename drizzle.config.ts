import { type Config } from "drizzle-kit";
import { env } from "@/env";

export default {

    schema: "./src/server/db/schema.ts",
    out:'./drizzle',
    dialect: "sqlite",
    dbCredentials: {
        url: env.DATABASE_URL
    }
} satisfies Config;