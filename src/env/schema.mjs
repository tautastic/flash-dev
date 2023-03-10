// @ts-check

/**
 * `@/env/schema.mjs`
 */
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]),
    CANONICAL_URL: z.preprocess(
        (str) => process.env.VERCEL_URL ?? str,
        process.env.VERCEL ? z.string() : z.string().url()
    ),

    DATABASE_URL: z.string().url(),

    NEXTAUTH_SECRET:
        process.env.NODE_ENV === "production"
            ? z.string().min(1)
            : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
        (str) => process.env.VERCEL_URL ?? str,
        process.env.VERCEL ? z.string() : z.string().url()
    ),

    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),

    SPOTIFY_ID: z.string(),
    SPOTIFY_SECRET: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
};
