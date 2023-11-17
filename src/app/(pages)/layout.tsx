import "@/styles/globals.css"

import { type Metadata, type Viewport } from "next"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { Provider as BalancerProvider } from "react-wrap-balancer"

import Nav from "@/components/nav"
// import { headers } from "next/headers"

import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

// import { TRPCReactProvider } from "@/trpc/react"

// TODO: Metadata
export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: [
        // "Blog",
        // "Template",
        // "Next.js",
        // "React",
        // "Tailwind CSS",
        // "Server Components",
        // "Shadcn UI",
    ],
    authors: [
        {
            name: "Shreyans Jain",
            url: "https://shreyans.sh",
        },
    ],
    creator: "Shreyans Jain",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        // images: [
        //     {
        //         url: siteConfig.ogImage,
        //         width: 1200,
        //         height: 630,
        //         alt: siteConfig.name,
        //     },
        // ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        // images: [siteConfig.ogImage],
        creator: "@Destroyer_Xyz",
    },
    icons: {
        icon: "/favicon.ico",
        // shortcut: "/favicon-16x16.png",
        // apple: "/apple-touch-icon.png",
    },
    // manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
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
                "min-h-full",
            )}
            lang="en"
        >
            <body
                className={cn(
                    "h-full py-4",
                    "flex flex-col items-center justify-center gap-2",
                    "mx-auto sm:max-w-xl md:max-w-3xl",
                )}
            >
                {/* <TRPCReactProvider headers={headers()}> */}
                <ThemeProvider
                    enableSystem
                    attribute="class"
                    defaultTheme="system"
                >
                    <Nav />
                    <BalancerProvider preferNative={true}>
                        <main className="h-full w-full">{children}</main>
                    </BalancerProvider>
                </ThemeProvider>
                {/* </TRPCReactProvider> */}
            </body>
        </html>
    )
}
