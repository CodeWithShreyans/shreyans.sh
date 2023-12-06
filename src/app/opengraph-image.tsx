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
                    backgroundColor: "#8BC6EC",
                    backgroundImage:
                        "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
                }}
                tw="w-full h-full"
            ></div>
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
