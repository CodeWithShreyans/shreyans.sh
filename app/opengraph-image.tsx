/* eslint-disable react/no-unknown-property */

import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "A randomly generated fun gradient"
export const size = {
    height: 630,
    width: 1200,
}

export const contentType = "image/png"

export default function OG() {
    const BG_OPTIONS = [
        {
            backgroundColor: "#8BC6EC",
            backgroundImage:
                "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
        },
        {
            backgroundColor: "#21D4FD",
            backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
        },
        {
            backgroundColor: "#8BC6EC",
            backgroundImage:
                "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
        },
        {
            backgroundColor: "#8EC5FC",
            backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
        },
        {
            backgroundColor: "#08AEEA",
            backgroundImage: "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
        },
        {
            backgroundColor: "#3EECAC",
            backgroundImage: "linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)",
        },
        {
            backgroundColor: "#FF3CAC",
            backgroundImage:
                "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
        },
    ]

    return new ImageResponse(
        (
            <div
                style={
                    BG_OPTIONS[Math.floor(Math.random() * BG_OPTIONS.length)]
                }
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
