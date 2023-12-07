export const siteConfig = {
    baseKeywords: [
        "Shreyans Jain",
        "DestroyerXyz",
        "Developer",
        "Blog",
        "Portfolio",
    ],
    // ogImage: "https://ui.shadcn.com/og.jpg",
    description: "Developer ~ Entrepreneur ~ Student" as const,
    links: {
        github: "https://github.com/destroyerxyz/shreyans.sh",
        linkedin: "https://www.linkedin.com/in/sjain07/",
        twitter: "https://twitter.com/Destroyer_Xyz",
    } as const,
    name: "Shreyans Jain" as const,
    url: "https://shreyans.sh" as const,
}

export type SiteConfig = typeof siteConfig
