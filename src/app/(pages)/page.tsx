import { type ReactNode } from "react"

import Image from "next/image"
import Link from "next/link"

import { Github } from "lucide-react"

import ProfilePic from "@/../public/profile-pic.jpg"
import BirthTime from "@/components/birth-time"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// import { api } from "@/trpc/server"

// export const revalidate = 3600 // 1 hour

const Project = ({
    title,
    link,
    githubLink,
    description,
}: {
    title: string
    link: string
    githubLink?: string
    description: ReactNode
}) => {
    return (
        <Button
            asChild
            className="flex h-full w-full flex-col items-start justify-start gap-2"
            variant="ghost"
        >
            <Link href={link}>
                <div className="flex gap-1">
                    <h2 className="font-mono underline underline-offset-4">
                        {title}
                    </h2>
                    {githubLink ? (
                        <object className="mb-[-0.03125rem] self-end rounded-full bg-foreground text-background transition-colors hover:bg-accent hover:text-foreground">
                            <Link href={githubLink}>
                                <Github
                                    absoluteStrokeWidth={true}
                                    className="h-[1.25em] w-[1.25em] p-0.5 pb-[0.0625rem]"
                                    strokeWidth={2.25}
                                />
                            </Link>
                        </object>
                    ) : null}
                </div>
                <p className="text-primary/80">{description}</p>
            </Link>
        </Button>
    )
}

const Home = () => {
    return (
        <main className="flex flex-col gap-4 tracking-wide">
            <div className="space-y-2">
                {/* <div className="w-36 md:w-44">
                    <Image
                        alt="Profile Picture"
                        className="!relative rounded-full"
                        fill={true}
                        placeholder="blur"
                        src={ProfilePic}
                    />
                </div> */}
                <h1 className="font-mono text-xl font-semibold md:text-2xl">
                    Hey there, I&apos;m Shreyans!
                </h1>
                <p className="text-base tracking-wider text-primary/80 [text-wrap:pretty] md:text-lg">
                    A software developer from India 🇮🇳. Also a student and
                    entrepreneur. About <BirthTime /> old. Into everything from
                    tech and business to finance, law, science, food, and
                    travel.
                </p>
            </div>
            <Separator />
            <div className="space-y-2">
                <h2 className="text-lg font-medium md:text-xl">My Work</h2>
                <div className="grid grid-flow-row grid-cols-2 gap-[4%]">
                    <Project
                        description="My personal corner of the web."
                        githubLink="https://github.com/destroyerxyz/shreyans.sh"
                        link="https://shreyans.sh"
                        title="shreyans.sh"
                    />
                    <Project
                        description="Search your emails with AI."
                        link="https://findy-thingy.shreyans.sh"
                        title="Findy Thingy"
                    />
                </div>
            </div>
        </main>
    )
}

export default Home
