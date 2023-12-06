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
        org: "shreyans-jain-org",
        project: "shreyans-sh",
        silent: true,
    },
    {
        automaticVercelMonitors: true,
        disableLogger: true,
        hideSourceMaps: true,
        transpileClientSDK: false,
        tunnelRoute: "/monitoring",
        widenClientFileUpload: true,
    },
)
