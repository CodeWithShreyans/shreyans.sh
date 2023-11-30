import { withContentlayer } from "next-contentlayer"

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs")

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    experimental: {
        ppr: true,
        useDeploymentId: true,
        useDeploymentIdServerActions: true,
    },
    compiler: {
        removeConsole:
            process.env.NODE_ENV === "production"
                ? { exclude: ["error"] }
                : false,
    },
}

// @ts-expect-error Contentlayer NextConfig type issue
export default withContentlayer(config)
