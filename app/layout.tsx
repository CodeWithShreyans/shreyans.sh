import "./globals.css"

import type { Metadata, Viewport } from "next"
import Script from "next/script"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
    authors: [
        {
            name: siteConfig.name,
            url: siteConfig.url,
        },
    ],
    creator: siteConfig.name,
    description: siteConfig.description,
    formatDetection: { email: true, telephone: true },
    keywords: siteConfig.baseKeywords,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        description: siteConfig.description,
        locale: "en_US",
        siteName: siteConfig.name,
        title: siteConfig.name,
        type: "website",
        url: siteConfig.url,
    },
    robots: {
        follow: true,
        googleBot: {
            follow: true,
            index: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
        index: true,
    },
    title: siteConfig.name,
    twitter: {
        card: "summary_large_image",
        creator: "@Destroyer_Xyz",
        description: siteConfig.description,
        site: "@Destroyer_Xyz",
        title: siteConfig.name,
    },
    // TODO: Languages
    // alternates: {languages: {}}
}

export const viewport: Viewport = {
    themeColor: [
        { color: "white", media: "(prefers-color-scheme: light)" },
        { color: "black", media: "(prefers-color-scheme: dark)" },
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            className={cn(
                `${GeistSans.variable} ${GeistMono.variable}`,
                "*:col-[2] grid grid-cols-[1fr_min(60ch,_100%)_1fr] scroll-smooth",
            )}
            lang="en"
        >
            <body
                className="flex h-fit min-h-screen flex-col items-center justify-between gap-2 px-4 text-base"
                id="body"
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem={true}
                >
                    <div className="flex w-full flex-col gap-2" id="top">
                        <Header />
                        {children}
                    </div>
                    <Footer />
                </ThemeProvider>
                <Script
                    async={true}
                    data-website-id="dc0e2c24-6cb6-47d2-90ec-3143d825ecd7"
                    src="https://umami.shreyans.sh/script.js"
                />
            </body>
        </html>
    )
}
