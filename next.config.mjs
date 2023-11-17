import { withContentlayer } from "next-contentlayer"

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs")

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    compiler: {
        removeConsole: { exclude: ["error"] },
    },
    experimental: {
        ppr: true,
    },
}

// @ts-expect-error Contentlayer NextConfig type issue
export default withContentlayer(config)
