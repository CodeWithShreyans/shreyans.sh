import type { ReactNode } from "react"

import Image from "next/image"
import Link from "next/link"

import { ExternalLink } from "lucide-react"

import ProfilePic from "@/../public/profile-pic.jpg"
import {
    CardBody,
    CardContainer,
    CardItem,
} from "@/components/aceternity/3d-card"
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from "@/components/aceternity/glowing-stars"
import BirthTime from "@/components/birth-time"
import { Badge } from "@/components/shadcn/badge"
import { Button } from "@/components/shadcn/button"
import { Separator } from "@/components/shadcn/separator"
import { cn } from "@/lib/utils"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/shadcn/carousel"

export const dynamic = "force-static"
export const revalidate = 3600 // 1 hour

const Project = ({
    badge,
    description,
    githubLink,
    link,
    title,
}: {
    badge?: string
    description: ReactNode
    githubLink?: string
    link?: string
    title: string
}) => {
    return (
        <Button
            className="flex h-full w-full flex-col items-start justify-start gap-2 text-start"
            variant="ghost"
        >
            <Link
                className="space-y-1"
                href={link ?? "#"}
                target={link ? "_blank" : "_self"}
            >
                <div className="flex flex-row gap-1">
                    <h2 className="font-mono tracking-normal underline underline-offset-4">
                        {title.replaceAll(" ", " ")}
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
                <Button
                    asChild={true}
                    className="h-auto w-auto p-0"
                    variant="link"
                >
                    <Link href={githubLink} target="_blank">
                        Github <ExternalLink className="h-4" size={20} />
                    </Link>
                </Button>
            ) : null}
        </Button>
    )
}

const Home = () => {
    return (
        <main className="flex flex-col gap-4 tracking-wide">
            <div className="space-y-2">
                <div className="w-36 sm:w-44">
                    <Image
                        alt="Profile Picture"
                        className="!relative rounded-full"
                        fill={true}
                        loading="lazy"
                        placeholder="blur"
                        src={ProfilePic}
                    />
                </div>
                <h1 className="font-mono text-lg font-semibold sm:text-xl md:text-2xl xl:text-3xl">
                    Hey there, I&apos;m Shreyans!
                </h1>
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <p className="text-pretty text-base tracking-wider text-primary/80 sm:text-lg xl:text-xl">
                    A software developer from India 🇮🇳. Also a student and
                    entrepreneur. About <BirthTime /> old. Into everything from
                    tech and business to finance, law, science, food, and
                    travel.
                </p>
            </div>
            <Separator />
            <div>
                <h2 className="text-lg font-medium sm:text-xl">My Work</h2>
                <div className="grid grid-flow-row grid-cols-1 gap-x-[4%] sm:grid-cols-2 py-4">
                    <Project
                        badge="Private"
                        description="Complete event manager for students"
                        title="Evently"
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
                    <Project
                        badge="Archived"
                        description="Simple freelance platform"
                        githubLink="https://github.com/duelance-app"
                        link="https://duelance.app"
                        title="Duelance"
                    />
                </div>
            </div>
            <Separator />
            <div>
                <h2 className="text-lg font-medium sm:text-xl">My Stack</h2>
                <Carousel className="antialiased">
                    <CarouselContent className="sm:*:basis-1/2 *:basis-3/4">
                        <CarouselItem>
                            <CardContainer>
                                <CardBody className="relative w-auto sm:w-[30rem] h-auto p-6">
                                    <CardItem
                                        translateZ="100"
                                        className="w-full mt-4"
                                    >
                                        <GlowingStarsBackgroundCard
                                            className="relative"
                                            image={
                                                <svg
                                                    role="img"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="absolute bottom-0 h-[95%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                                >
                                                    <title>Next.js</title>
                                                    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
                                                </svg>
                                            }
                                        >
                                            <GlowingStarsTitle>
                                                Next.js
                                            </GlowingStarsTitle>
                                            <GlowingStarsDescription>
                                                Swiss Army Knife++
                                            </GlowingStarsDescription>
                                        </GlowingStarsBackgroundCard>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </CarouselItem>
                        <CarouselItem>
                            <CardContainer>
                                <CardBody className="relative w-auto sm:w-[30rem] h-auto p-6">
                                    <CardItem
                                        translateZ="100"
                                        className="w-full mt-4"
                                    >
                                        <GlowingStarsBackgroundCard
                                            className="relative"
                                            image={
                                                <svg
                                                    role="img"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="absolute bottom-0 h-[95%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                                >
                                                    <title>Tailwind CSS</title>
                                                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                                                </svg>
                                            }
                                        >
                                            <GlowingStarsTitle>
                                                Tailwind CSS
                                            </GlowingStarsTitle>
                                            <GlowingStarsDescription>
                                                CSS for Humans
                                            </GlowingStarsDescription>
                                        </GlowingStarsBackgroundCard>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </CarouselItem>
                        <CarouselItem>
                            <CardContainer>
                                <CardBody className="relative w-auto sm:w-[30rem] h-auto p-6">
                                    <CardItem
                                        translateZ="100"
                                        className="w-full mt-4"
                                    >
                                        <GlowingStarsBackgroundCard
                                            className="relative"
                                            image={
                                                <svg
                                                    role="img"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="absolute bottom-[1.125rem] h-[80%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                                >
                                                    <title>shadcn/ui</title>
                                                    <path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z" />
                                                </svg>
                                            }
                                        >
                                            <GlowingStarsTitle>
                                                shadcn/ui
                                            </GlowingStarsTitle>
                                            <GlowingStarsDescription>
                                                UI Library of the Present
                                            </GlowingStarsDescription>
                                        </GlowingStarsBackgroundCard>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </main>
    )
}

export default Home
