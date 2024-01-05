import { withSentryConfig } from "@sentry/nextjs"
import { withContentlayer } from "next-contentlayer"

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
const { env } = await import("./app/env.mjs")

/** @type {import("next").NextConfig} */
const config = {
    compiler: {
        removeConsole:
            env.NODE_ENV === "production" ? { exclude: ["error"] } : undefined,
    },
    reactStrictMode: true,
    transpilePackages: ["react-markdown", "remark-gfm", "@contentlayer/core"],
    experimental: {
        ppr: true,
    },
}

const sentryConfig = {
    options: {
        automaticVercelMonitors: true,
        disableLogger: true,
        hideSourceMaps: true,
        transpileClientSDK: false,
        tunnelRoute: "/monitoring",
        widenClientFileUpload: true,
    },
    webpack: {
        org: "shreyans-jain-org",
        project: "shreyans-sh",
        silent: true,
    },
}

export default withSentryConfig(
    // @ts-expect-error Contentlayer NextConfig type issue
    withContentlayer(config),
    sentryConfig.webpack,
    sentryConfig.options,
)
