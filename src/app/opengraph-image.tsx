/* eslint-disable react/no-unknown-property */

import Image from "next/image"
import { ImageResponse } from "next/og"

import { GeistMono } from "geist/font/mono"

import ProfilePic from "@/../public/profile-pic.jpg"
import { siteConfig } from "@/config/site"

export const runtime = "edge"

export const alt = "About Acme"
export const size = {
    height: 630,
    width: 1200,
}

export const contentType = "image/png"

export default function OG() {
    // // Font
    // const interSemiBold = fetch(
    //     "https://github.com/vercel/geist-font/raw/main/packages/next/dist/fonts/geist-mono/GeistMono-Variable.woff2",
    // ).then((res) => res.arrayBuffer())

    return new ImageResponse(
        (
            <div
                style={{
                    backgroundColor: "hsl(240 10% 3.9%)",
                    color: "hsl(0 0% 98%)",
                    gap: "1rem",
                }}
                tw="flex items-center justify-center w-full h-full"
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    alt="Shreyans Jain"
                    height={500}
                    src={`${siteConfig.url}/profile-pic.jpg`}
                    tw="rounded-full"
                    width={500}
                />
                <p tw="text-8xl text-center text-foreground">Shreyans Jain</p>
            </div>
        ),
        {
            ...size,
            // fonts: [
            //     {
            //         data: await interSemiBold,
            //         name: "Inter",
            //         style: "normal",
            //         weight: 400,
            //     },
            // ],
        },
    )
}
