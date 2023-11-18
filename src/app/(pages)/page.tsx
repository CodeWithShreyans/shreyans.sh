import type { StaticImageData } from "next/image"

import { get } from "http"

import Image from "next/image"

import { DateTime, Duration } from "luxon"
import Balancer from "react-wrap-balancer"

import ProfilePic from "@/../public/profile-pic.png"
import BirthTime from "@/components/birth-time"

// import { api } from "@/trpc/server"

// export const revalidate = 3600 // 1 hour

const Home = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <Image
                    alt="Profile Picture"
                    className="w-44 rounded-full"
                    src={ProfilePic}
                />
                <h1 className="text-3xl font-semibold">Hey there, I&apos;m Shreyans!</h1>
                <p className="text-md font-medium tracking-wide">
                    
                    I&apos;m about <BirthTime /> old. A full-stack web
                    dev from India 🇮🇳. Also a student and entrepreneur. I&apos;m
                    into everything from tech and business to finance, law,
                    science, food, and travel.
                    
                </p>
            </div>
            <div></div>
        </>
    )
}

export default Home
