import { withSentryConfig } from "@sentry/nextjs"
import { withContentlayer } from "next-contentlayer"

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs")

/** @type {import("next").NextConfig} */
const config = {
    compiler: {
        removeConsole:
            process.env.NODE_ENV === "production"
                ? { exclude: ["error"] }
                : false,
    },
    experimental: {
        ppr: true,
        useDeploymentId: true,
        useDeploymentIdServerActions: true,
    },
    reactStrictMode: true,
    transpilePackages: ["react-markdown", "remark-gfm"],
}

export default withSentryConfig(
    // @ts-expect-error Contentlayer NextConfig type issue
    withContentlayer(config),
    {
        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options

        org: "shreyans-jain-org",
        project: "shreyans-sh",
        // Suppresses source map uploading logs during build
        silent: true,
    },
    {
        // For all available options, see:
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

        // https://vercel.com/docs/cron-jobs
        automaticVercelMonitors: true,

        // Automatically tree-shake Sentry logger statements to reduce bundle size
        disableLogger: true,

        // Hides source maps from generated client bundles
        hideSourceMaps: true,

        // Transpiles SDK to be compatible with IE11 (increases bundle size)
        transpileClientSDK: true,

        // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
        tunnelRoute: "/monitoring",

        // Enables automatic instrumentation of Vercel Cron Monitors.
        // See the following for more information:
        // https://docs.sentry.io/product/crons/
        // Upload a larger set of source maps for prettier stack traces (increases build time)
        widenClientFileUpload: true,
    },
)
