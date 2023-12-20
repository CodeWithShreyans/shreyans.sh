import { env } from "@/env.mjs"

export const siteConfig = {
    baseKeywords: [
        "Shreyans Jain",
        "DestroyerXyz",
        "Developer",
        "Blog",
        "Portfolio",
    ],
    description: "Developer ~ Entrepreneur ~ Student" as const,
    links: {
        github: "https://github.com/destroyerxyz/shreyans.sh",
        linkedin: "https://www.linkedin.com/in/sjain07/",
        twitter: "https://twitter.com/Destroyer_Xyz",
    } as const,
    name: "Shreyans Jain" as const,
    ogImage: "/opengraph-image" as const,
    url:
        env.NODE_ENV === "production"
            ? "https://shreyans.sh"
            : env.VERCEL_URL
              ? env.VERCEL_URL
              : "http://localhost:3000",
}

export type SiteConfig = typeof siteConfig
