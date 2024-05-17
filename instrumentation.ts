import * as Sentry from "@sentry/nextjs"

export function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        Sentry.init({
            // Setting this option to true will print useful information to the console while you're setting up Sentry.
            debug: false,

            dsn: "https://4d223758032c2be657b494c898b0e3f0@o912297.ingest.sentry.io/4506345522724864",

            // Adjust this value in production, or use tracesSampler for greater control
            tracesSampleRate: 1,
        })
    }

    if (process.env.NEXT_RUNTIME === "edge") {
        Sentry.init({
            // Setting this option to true will print useful information to the console while you're setting up Sentry.
            debug: false,

            dsn: "https://4d223758032c2be657b494c898b0e3f0@o912297.ingest.sentry.io/4506345522724864",

            // Adjust this value in production, or use tracesSampler for greater control
            tracesSampleRate: 1,
        })
    }
}
