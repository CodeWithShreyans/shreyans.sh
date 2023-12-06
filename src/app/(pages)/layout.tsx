import "./globals.css"

import { type Metadata, type Viewport } from "next"

import { Analytics } from "@vercel/analytics/react"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { AlertCircle } from "lucide-react"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/alert"
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
    keywords: [
        "Shreyans Jain",
        "DestroyerXyz",
        "Developer",
        "Blog",
        "Portfolio",
    ],
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
                "scroll-smooth",
            )}
            lang="en"
        >
            <body
                className={cn(
                    "mx-auto flex h-fit min-h-screen max-w-xl flex-col items-center justify-between gap-2 px-4 text-base sm:max-w-[46rem]",
                )}
                id="body"
            >
                {/* <TRPCReactProvider headers={headers()}> */}
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem={true}
                >
                    <div className="flex w-full flex-col gap-2" id="top">
                        <Header />
                        <Alert className="animate-fade-in" variant="warning">
                            <AlertCircle className="h-5 w-5" />
                            <AlertTitle>WIP</AlertTitle>
                            <AlertDescription>
                                This site is still very much a work in progress.
                            </AlertDescription>
                        </Alert>
                        {children}
                    </div>
                    <Footer />
                </ThemeProvider>
                {/* </TRPCReactProvider> */}
                <Analytics />
            </body>
        </html>
    )
}
