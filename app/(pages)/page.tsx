import type { ReactElement, ReactNode } from "react"

import Image from "next/image"
import Link from "next/link"

import { ExternalLink } from "lucide-react"

import ProfilePic from "@/../public/profile-pic.jpg"

import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from "@/components/aceternity/glowing-stars"
import { BirthTime } from "@/components/birth-time"
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

const StackItem = ({
    title,
    description,
    image,
}: { title: string; description: ReactNode; image: ReactElement }) => {
    return (
        <CarouselItem>
            <GlowingStarsBackgroundCard className="relative" image={image}>
                <GlowingStarsTitle>{title}</GlowingStarsTitle>
                <GlowingStarsDescription>{description}</GlowingStarsDescription>
            </GlowingStarsBackgroundCard>
        </CarouselItem>
    )
}

const Home = () => {
    return (
        <main className="flex flex-col gap-4 tracking-wide">
            <div className="space-y-2">
                <div className="flex items-center justify-between">
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
                    <div className="sm:flex gap-1 hidden">
                        <div className="flex flex-col text-right">
                            <div>X:</div>
                            <div>Github:</div>
                            <div>LinkedIn:</div>
                            <div>Email:</div>
                        </div>
                        <div className="flex flex-col gap-1 text-left items-start pt-0.5">
                            <Button
                                asChild={true}
                                className="h-auto p-0 tracking-normal underline underline-offset-4"
                                variant="link"
                            >
                                <Link
                                    href="https://x.com/CodeWShreyans"
                                    target="_blank"
                                >
                                    @CodeWShreyans
                                </Link>
                            </Button>

                            <Button
                                asChild={true}
                                className="h-auto p-0 underline tracking-normal underline-offset-4"
                                variant="link"
                            >
                                <Link
                                    href="https://github.com/CodeWithShreyans"
                                    target="_blank"
                                >
                                    CodeWithShreyans
                                </Link>
                            </Button>

                            <Button
                                asChild={true}
                                className="h-auto p-0 tracking-normal underline underline-offset-4"
                                variant="link"
                            >
                                <Link
                                    href="https://www.linkedin.com/in/sjain07"
                                    target="_blank"
                                >
                                    sjain07
                                </Link>
                            </Button>

                            <Button
                                asChild={true}
                                className="h-auto p-0 tracking-normal underline underline-offset-4"
                                variant="link"
                            >
                                <Link
                                    href="mailto:shreyans@shreyans.sh"
                                    target="_blank"
                                >
                                    shreyans@shreyans.sh
                                </Link>
                            </Button>
                        </div>
                    </div>
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
                        badge="Pre-Release"
                        description="Offline access to emergency guides"
                        link="https://useguider.com"
                        title="Guider"
                    />
                    <Project
                        badge="Pre-Release"
                        description="Complete event manager for students"
                        link="https://eventlyhq.com"
                        title="Evently"
                    />
                    <Project
                        description="Custom PCB to test your water"
                        githubLink="https://github.com/CodeWithShreyans/trail-water-tester"
                        link="https://youtu.be/ufMUJ9D1fi8"
                        title="Water Quality Tester"
                    />
                    <Project
                        description="Know if your plane is safe or not"
                        githubLink="https://github.com/CodeWithShreyans/safeintheair"
                        link="https://safeintheair.shreyans.sh"
                        title="Safe in the Air"
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
                        link="https://www.npmjs.com/package/upstash-kv"
                        title="upstash-kv"
                    />
                    <Project
                        badge="Archived"
                        description="Search your emails with AI"
                        link="https://findy-thingy.shreyans.sh"
                        githubLink="https://github.com/CodeWithShreyans/findy-thingy"
                        title="Findy Thingy"
                    />
                    <Project
                        badge="Archived"
                        description="A newsletter curated by AI"
                        githubLink="https://github.com/destroyerxyz/theaichronicles"
                        link="https://taic.shreyans.sh"
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
                <Carousel className="antialiased py-6">
                    <CarouselContent className="sm:*:basis-[45.5%] *:basis-[85%]">
                        <StackItem
                            title="Next.js"
                            description="Swiss Army Knife++"
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-4 h-[83%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>Next.js</title>
                                    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="React"
                            description="Until ▲ Makes One Better"
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-[0.37rem] h-[93.5%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>React</title>
                                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="Typescript"
                            description="Take That Oracle"
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-4 h-[83%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>TypeScript</title>
                                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="Vercel"
                            description={
                                <>
                                    ▲ ▲ ▼ ▼ ◀︎ ▶︎ ◀︎ ▶︎ <b>B A</b>
                                </>
                            }
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-[0.37rem] h-[94.5%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>Vercel</title>
                                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="Cloudflare"
                            description={<>Help! I'm under attack!</>}
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-4 h-[90.5%] left-[50%] -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>Cloudflare</title>
                                    <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="Tailwind CSS"
                            description="CSS for Humans"
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-4 h-[83%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>Tailwind CSS</title>
                                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="shadcn/ui"
                            description="UI Library of the Present"
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-4 h-[83%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>shadcn/ui</title>
                                    <path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="Turso"
                            description="My 5 users go brrrrr"
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-4 h-[83%] left-[50%] -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>Turso</title>
                                    <path d="m23.31.803-.563-.42-1.11 1.189-.891-1.286-.512.235.704 1.798-.326.35L18.082 0l-.574.284 2.25 4.836-2.108.741h-.05l-1.143-1.359-1.144 1.36H8.687l-1.144-1.36-1.146 1.363H6.36l-2.12-.745L6.491.284 5.919 0l-2.53 2.668-.327-.349.705-1.798-.512-.236-.89 1.287L1.253.382.69.804 2.42 3.69l-.89.939.311 2.375 2.061.787L3.9 8.817H1.947v.444l.755 1.078 1.197.433v6.971l3.057 4.55L7.657 24l1.101-1.606L9.9 24l.999-1.606L12 24l1.102-1.606L14.1 24l1.141-1.606L16.343 24l.701-1.706 3.058-4.55v-6.972l1.196-.433.756-1.078v-.444h-1.952l.003-1.03 2.054-.784.311-2.375-.89-.939zm-8.93 18.718H8.033l.793-1.615.794 1.615.793-1.083.793 1.083.794-1.083.793 1.083.794-1.083.793 1.083.793-1.615.794 1.615zm3.886-7.39-3.3 1.084-.143 3.061-2.827.627-2.826-.627-.142-3.06-3.3-1.085v-1.635l4.266 1.21-.052 4.126h4.109l-.052-4.127 4.266-1.209z" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="Clerk"
                            description="Ironically Not a Clerk"
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-4 h-[83%] left-[47%] -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>Clerk</title>
                                    <path d="m21.47 20.829-2.881-2.881a.572.572 0 0 0-.7-.084 6.854 6.854 0 0 1-7.081 0 .576.576 0 0 0-.7.084l-2.881 2.881a.576.576 0 0 0-.103.69.57.57 0 0 0 .166.186 12 12 0 0 0 14.113 0 .58.58 0 0 0 .239-.423.576.576 0 0 0-.172-.453Zm.002-17.668-2.88 2.88a.569.569 0 0 1-.701.084A6.857 6.857 0 0 0 8.724 8.08a6.862 6.862 0 0 0-1.222 3.692 6.86 6.86 0 0 0 .978 3.764.573.573 0 0 1-.083.699l-2.881 2.88a.567.567 0 0 1-.864-.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637-.405.566.566 0 0 1 .232.418.57.57 0 0 1-.168.448Zm-7.118 12.261a3.427 3.427 0 1 0 0-6.854 3.427 3.427 0 0 0 0 6.854Z" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="Sentry"
                            description="Yes I Check the Errors"
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-[0.37rem] h-[93.5%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>Sentry</title>
                                    <path d="M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 0 1 8.53 12.811h-2.221A13.301 13.301 0 0 0 5.784 9.814l-2.926 5.06a7.65 7.65 0 0 1 4.435 5.848H2.194a.365.365 0 0 1-.298-.534l1.413-2.402a5.16 5.16 0 0 0-1.614-.913L.296 19.275a2.182 2.182 0 0 0 .812 2.999 2.24 2.24 0 0 0 1.086.288h6.983a9.322 9.322 0 0 0-3.845-8.318l1.11-1.922a11.47 11.47 0 0 1 4.95 10.24h5.915a17.242 17.242 0 0 0-7.885-15.28l2.244-3.845a.37.37 0 0 1 .504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 0 1-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 0 0 1.922-3.31z" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="Umami"
                            description="GA but Good DX and UX"
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-2 h-[91.5%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>Umami</title>
                                    <path d="M2.203 8.611H.857a.845.845 0 0 0-.841.841v.858a13.31 13.31 0 0 0-.016.6c0 6.627 5.373 12 12 12 6.527 0 11.837-5.212 11.996-11.701 0-.025.004-.05.004-.075V9.452a.845.845 0 0 0-.841-.841h-1.346c-1.159-4.329-5.112-7.521-9.805-7.521-4.692 0-8.645 3.192-9.805 7.521Zm18.444 0H3.37c1.127-3.702 4.57-6.399 8.638-6.399 4.069 0 7.512 2.697 8.639 6.399Z" />
                                </svg>
                            }
                        />
                        <StackItem
                            title="Bun"
                            description="Blazingly Fast"
                            image={
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-[0.37rem] h-[93.5%] left-1/2 -translate-x-1/2 z-10 opacity-50"
                                >
                                    <title>Bun</title>
                                    <path d="M12 22.596c6.628 0 12-4.338 12-9.688 0-3.318-2.057-6.248-5.219-7.986-1.286-.715-2.297-1.357-3.139-1.89C14.058 2.025 13.08 1.404 12 1.404c-1.097 0-2.334.785-3.966 1.821a49.92 49.92 0 0 1-2.816 1.697C2.057 6.66 0 9.59 0 12.908c0 5.35 5.372 9.687 12 9.687v.001ZM10.599 4.715c.334-.759.503-1.58.498-2.409 0-.145.202-.187.23-.029.658 2.783-.902 4.162-2.057 4.624-.124.048-.199-.121-.103-.209a5.763 5.763 0 0 0 1.432-1.977Zm2.058-.102a5.82 5.82 0 0 0-.782-2.306v-.016c-.069-.123.086-.263.185-.172 1.962 2.111 1.307 4.067.556 5.051-.082.103-.23-.003-.189-.126a5.85 5.85 0 0 0 .23-2.431Zm1.776-.561a5.727 5.727 0 0 0-1.612-1.806v-.014c-.112-.085-.024-.274.114-.218 2.595 1.087 2.774 3.18 2.459 4.407a.116.116 0 0 1-.049.071.11.11 0 0 1-.153-.026.122.122 0 0 1-.022-.083 5.891 5.891 0 0 0-.737-2.331Zm-5.087.561c-.617.546-1.282.76-2.063 1-.117 0-.195-.078-.156-.181 1.752-.909 2.376-1.649 2.999-2.778 0 0 .155-.118.188.085 0 .304-.349 1.329-.968 1.874Zm4.945 11.237a2.957 2.957 0 0 1-.937 1.553c-.346.346-.8.565-1.286.62a2.178 2.178 0 0 1-1.327-.62 2.955 2.955 0 0 1-.925-1.553.244.244 0 0 1 .064-.198.234.234 0 0 1 .193-.069h3.965a.226.226 0 0 1 .19.07c.05.053.073.125.063.197Zm-5.458-2.176a1.862 1.862 0 0 1-2.384-.245 1.98 1.98 0 0 1-.233-2.447c.207-.319.503-.566.848-.713a1.84 1.84 0 0 1 1.092-.11c.366.075.703.261.967.531a1.98 1.98 0 0 1 .408 2.114 1.931 1.931 0 0 1-.698.869v.001Zm8.495.005a1.86 1.86 0 0 1-2.381-.253 1.964 1.964 0 0 1-.547-1.366c0-.384.11-.76.32-1.079.207-.319.503-.567.849-.713a1.844 1.844 0 0 1 1.093-.108c.367.076.704.262.968.534a1.98 1.98 0 0 1 .4 2.117 1.932 1.932 0 0 1-.702.868Z" />
                                </svg>
                            }
                        />
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </main>
    )
}

export default Home
