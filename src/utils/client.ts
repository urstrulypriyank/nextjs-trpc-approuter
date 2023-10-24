import { type AppRouter } from "@/server/router/root";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
export const api = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
