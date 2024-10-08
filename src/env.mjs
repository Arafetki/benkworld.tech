import { createEnv } from "@t3-oss/env-nextjs";
import {z} from "zod";
export const env = createEnv({
  server: {
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url()
  },
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});