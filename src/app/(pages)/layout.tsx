import "./globals.css"

import { type Metadata, type Viewport } from "next"

import { Slot } from "@radix-ui/react-slot"
import { Analytics } from "@vercel/analytics/react"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { AlertCircle } from "lucide-react"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/alert"
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
                "scroll-smooth",
            )}
            lang="en"
        >
            <body
                className={cn(
                    "mx-auto flex h-fit min-h-screen max-w-xl flex-col items-center justify-between gap-2 px-4 text-base sm:max-w-2xl",
                )}
                id="body"
            >
                {/* <TRPCReactProvider headers={headers()}> */}
                <ThemeProvider
                    enableSystem
                    attribute="class"
                    defaultTheme="system"
                >
                    <div className="flex w-full flex-col gap-2" id="top">
                        <Header />
                        <Alert variant="warning">
                            <AlertCircle className="h-5 w-5" />
                            <AlertTitle>WIP</AlertTitle>
                            <AlertDescription>
                                This site is still very much a work in progress.
                                Not even v1 yet.
                            </AlertDescription>
                        </Alert>
                        {/* @ts-expect-error Radix ReactNode type issue */}
                        <Slot className="h-full w-full">{children}</Slot>
                    </div>
                    <Footer />
                </ThemeProvider>
                {/* </TRPCReactProvider> */}
                <Analytics />
            </body>
        </html>
    )
}
