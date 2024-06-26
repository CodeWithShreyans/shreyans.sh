// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

Sentry.init({
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,

    dsn: "https://4d223758032c2be657b494c898b0e3f0@o912297.ingest.sentry.io/4506345522724864",

    // You can remove this option if you're not planning to use the Sentry Session Replay feature:
    integrations: [
        Sentry.replayIntegration({
            blockAllMedia: true,
            // Additional Replay configuration goes in here, for example:
            maskAllText: true,
        }),
    ],

    replaysOnErrorSampleRate: 1.0,

    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,
})
