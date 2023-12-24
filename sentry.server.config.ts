// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

Sentry.init({
   // Setting this option to true will print useful information to the console while you're setting up Sentry.
   debug: false,

   dsn: "https://4d223758032c2be657b494c898b0e3f0@o912297.ingest.sentry.io/4506345522724864",

   // Adjust this value in production, or use tracesSampler for greater control
   tracesSampleRate: 1,
})
