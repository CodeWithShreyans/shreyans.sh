import { type ReactNode } from "react"

import Link from "next/link"

import { ArrowUpRight } from "lucide-react"

import BirthTime from "@/components/birth-time"
import { Badge } from "@/components/shadcn/badge"
import { Button } from "@/components/shadcn/button"
import { Separator } from "@/components/shadcn/separator"
import { cn } from "@/lib/utils"

export const revalidate = 3600 // 1 hour

const Project = ({
    title,
    link,
    githubLink,
    description,
    badge,
}: {
    title: string
    link?: string
    githubLink?: string
    description: ReactNode
    badge?: string
}) => {
    return (
        <Button
            className="flex h-full w-full flex-col items-start justify-start gap-2 text-start"
            variant="ghost"
        >
            <Link className="space-y-1" href={link ?? ""} target="_blank">
                <div className="flex flex-row gap-1">
                    <h2 className="font-mono underline underline-offset-4">
                        {title}
                    </h2>
                    {badge ? (
                        <Badge
                            className={cn("w-fit rounded-full")}
                            variant={
                                badge === "Borked"
                                    ? "destructive"
                                    : badge === "Archived"
                                      ? "secondary"
                                      : "default"
                            }
                        >
                            {badge}
                        </Badge>
                    ) : null}
                </div>
                <p className="text-primary/80">{description}</p>
            </Link>
            {githubLink ? (
                <Button asChild className="h-auto w-auto p-0" variant="link">
                    <Link href={githubLink} target="_blank">
                        Github <ArrowUpRight className="-ml-0.5" size={20} />
                    </Link>
                </Button>
            ) : null}
        </Button>
    )
}

const Home = () => {
    return (
        <main className="flex flex-col gap-4 pt-2 tracking-wide">
            <div className="space-y-2">
                {/* <div className="w-36 sm:w-44">
                    <Image
                        alt="Profile Picture"
                        className="!relative rounded-full"
                        fill={true}
                        placeholder="blur"
                        src={ProfilePic}
                    />
                </div> */}
                <h1 className="font-mono text-xl font-semibold sm:text-2xl">
                    Hey there, I&apos;m Shreyans!
                </h1>
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <p className="text-pretty text-base tracking-wider text-primary/80 sm:text-lg">
                    A software developer from India 🇮🇳. Also a student and
                    entrepreneur. About <BirthTime /> old. Into everything from
                    tech and business to finance, law, science, food, and
                    travel.
                </p>
            </div>
            <Separator />
            <div className="space-y-2">
                <h2 className="text-lg font-medium sm:text-xl">My Work</h2>
                <div className="grid grid-flow-row grid-cols-1 gap-x-[4%] sm:grid-cols-2">
                    <Project
                        badge="Private"
                        description="Complete event manager for students"
                        title="Event Thingy"
                    />
                    <Project
                        badge="Private"
                        description="Search your emails with AI"
                        link="https://findy-thingy.shreyans.sh"
                        title="Findy Thingy"
                    />
                    <Project
                        description="My personal corner of the web"
                        githubLink="https://github.com/destroyerxyz/shreyans.sh"
                        link="https://shreyans.sh"
                        title="shreyans.sh"
                    />
                    <Project
                        description="Simple Upstash Redis client"
                        githubLink="https://github.com/destroyerxyz/upstash-kv"
                        link="https://github.com/destroyerxyz/upstash-kv"
                        title="upstash-kv"
                    />
                    <Project
                        badge="Borked"
                        description="A newsletter curated by AI"
                        githubLink="https://github.com/destroyerxyz/theaichronicles"
                        link="https://ai.shreyans.sh"
                        title="The AI Chronicles"
                    />
                    <Project
                        badge="Archived"
                        description="A POC blockchain voting app"
                        githubLink="https://github.com/DestroyerXyz/blockvote-solidity"
                        link="https://blockvote.vercel.app/"
                        title="Blockvote"
                    />
                </div>
            </div>
        </main>
    )
}

export default Home
