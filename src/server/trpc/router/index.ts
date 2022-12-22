/**
 * `@/server/trpc/router/index.ts`
 */

import { router } from "@/server/trpc/trpc";
import { authRouter } from "@/server/trpc/router/auth";

export const appRouter = router({
    auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
