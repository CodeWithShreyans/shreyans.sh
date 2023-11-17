export const siteConfig = {
    name: "Shreyans Jain",
    url: "https://shreyans.sh",
    // ogImage: "https://ui.shadcn.com/og.jpg",
    description: "Developer ~ Entrepreneur ~ Student",
    links: {
        twitter: "https://twitter.com/Destroyer_Xyz",
        github: "https://github.com/destroyerxyz/shreyans.sh",
    },
} as const

export type SiteConfig = typeof siteConfig
