import "./globals.css"

import { type Metadata, type Viewport } from "next"

import { Slot } from "@radix-ui/react-slot"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { AlertCircle } from "lucide-react"
import { Provider as BalancerProvider } from "react-wrap-balancer"

import Nav from "@/components/nav"
// import { headers } from "next/headers"

import { ThemeProvider } from "@/components/theme-provider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
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
                "min-h-full",
            )}
            lang="en"
        >
            <body
                className={cn(
                    "mx-auto flex h-full max-w-xl flex-col items-center justify-center gap-2 p-4 md:max-w-2xl",
                )}
            >
                {/* <TRPCReactProvider headers={headers()}> */}
                <ThemeProvider
                    enableSystem
                    attribute="class"
                    defaultTheme="system"
                >
                    <Nav />
                    <Alert variant="warning">
                        <AlertCircle className="h-5 w-5" />
                        <AlertTitle>WIP</AlertTitle>
                        <AlertDescription>
                            This site is still very much a work in progress. Not
                            even 1.0 yet.
                        </AlertDescription>
                    </Alert>
                    <BalancerProvider preferNative={false}>
                        {/* @ts-expect-error Radix ReactNode type issue */}
                        <Slot className="h-full w-full">{children}</Slot>
                    </BalancerProvider>
                </ThemeProvider>
                {/* </TRPCReactProvider> */}
            </body>
        </html>
    )
}
