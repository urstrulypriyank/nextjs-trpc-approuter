## Getting Started

Pre-requisites: Next.js with AppRouter

### Installation of trpc/client and trpc/server

```bash
npm install @trpc/server @trpc/client
# or
yarn add @trpc/server @trpc/client
# or
pnpm install @trpc/server @trpc/client
# or
bun install @trpc/server @trpc/client
```

## Setting Up TRPC With Next.js

## To configure TRPC with Next.js using AppRouter, follow these steps:

**Step 1: Create a trpc.ts file in the root of your project and export the router and publicProcedure objects:**

```JavaScript
import { initTRPC } from "@trpc/server";
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

```

**Step 2:**
    Create a root.ts file in the server/router directory and export the appRouter object:

``` JavaScript
import * as trpc from "@trpc/server";
import { router, publicProcedure } from "../trpc";
export const appRouter = router({
sayHi: publicProcedure.query(() => "Hi from sayHi procedure"),
});

export type AppRouter = typeof appRouter;
```
**Step 3:**
Create a client.ts file in the root of your project and export the api object:

```JavaScript

import { type AppRouter } from "@/server/router/root";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
export const api = createTRPCProxyClient<AppRouter>({
links: [
httpBatchLink({
url: "http://localhost:3000/api/trpc",
}),
],
});
```


**Step 4:**
Create an api/trpc/[trpc]/route.ts file and export the handler object:

```JavaScript

import { appRouter } from "@/server/router/root";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
const handler = (req: Request) =>
fetchRequestHandler({
endpoint: "/api/trpc",
req,
router: appRouter,
createContext: () => ({}),
});
export { handler as GET, handler as POST };
```
Now you can verify by making request to /api/trpc/sayHi
Or you 
can use the api object in your components to make requests to the server.
