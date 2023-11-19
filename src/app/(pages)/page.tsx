import Image from "next/image"

import ProfilePic from "@/../public/profile-pic.jpg"
import BirthTime from "@/components/birth-time"

// import { api } from "@/trpc/server"

// export const revalidate = 3600 // 1 hour

const Home = () => {
    return (
        <main className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="w-36 md:w-44">
                    <Image
                        alt="Profile Picture"
                        className="!relative rounded-full"
                        fill={true}
                        placeholder="blur"
                        src={ProfilePic}
                    />
                </div>
                <h1 className="text-xl font-semibold md:text-2xl">
                    Hey there, I&apos;m Shreyans!
                </h1>
                <p className="text-base font-medium tracking-wide [text-wrap:pretty] md:text-lg">
                    A software developer from India 🇮🇳. Also a student and
                    entrepreneur. About <BirthTime /> old. Into everything from
                    tech and business to finance, law, science, food, and
                    travel.
                </p>
            </div>
            <div>
                <h2 className="text-lg font-semibold md:text-2xl">My Work</h2>
            </div>
        </main>
    )
}

export default Home
