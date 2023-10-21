import "@/styles/globals.css"

import { Inter } from "next/font/google"
import { headers } from "next/headers"

import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { TRPCReactProvider } from "@/trpc/react"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

// TODO: Metadata
export const metadata = {
    title: { default: siteConfig.name, template: `%s - ${siteConfig.name}` },
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
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className="h-full" lang="en">
            <body
                className={cn(
                    `${inter.variable}`,
                    "h-full p-4 pt-8",
                    "flex flex-col items-center justify-center gap-2",
                )}
            >
                <TRPCReactProvider headers={headers()}>
                    <ThemeProvider
                        enableSystem
                        attribute="class"
                        defaultTheme="system"
                    >
                        {/* <main className="flex flex-col gap-2 min-h-full items-center justify-center"> */}
                        {children}
                        {/* </main> */}
                    </ThemeProvider>
                </TRPCReactProvider>
            </body>
        </html>
    )
}
