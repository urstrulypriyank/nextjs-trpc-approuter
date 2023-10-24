import * as trpc from "@trpc/server";
import { router, publicProcedure } from "../trpc";
export const appRouter = router({
  sayHi: publicProcedure.query(() => "Hi from sayHi procedure"),
});

export type AppRouter = typeof appRouter;
