import { Suspense } from "react"

import Link from "next/link"

import { allPosts } from "contentlayer/generated"

import { Button } from "@/components/shadcn/button"
import { siteConfig } from "@/config/site"
import { formatDuration, intervalToDuration } from "date-fns"
import { Views } from "./views"

export const dynamic = "force-static"

export const metadata = {
    title: "Shreyans' Blog",
    description: "Facts, opinions and randomness",
    twitter: {
        title: "Shreyans' Blog",
        description: "Facts, opinions and randomness",
    },
    openGraph: {
        title: "Shreyans' Blog",
        description: "Facts, opinions and randomness",
        url: `${siteConfig.url}/blog`,
    },
}

const Page = () => {
    return (
        <main className="flex w-full flex-col items-center">
            <ul className="flex w-full flex-col gap-2 px-4">
                {allPosts.map((post) => {
                    const date = new Date(post.date)
                    const time = intervalToDuration({
                        start: date,
                        end: new Date(),
                    })
                    return (
                        <li key={post._id}>
                            <Button
                                asChild={true}
                                className="flex h-auto w-auto cursor-pointer flex-col text-left"
                                variant="ghost"
                            >
                                <Link href={post.url}>
                                    <div className="flex w-full items-start justify-between">
                                        <div>
                                            <time
                                                // eslint-disable-next-line tailwindcss/no-custom-classname
                                                className="text-nowrap w-full text-base text-muted-foreground"
                                                dateTime={post.date}
                                            >
                                                {date.toLocaleDateString(
                                                    "en-US",
                                                    {
                                                        day: "numeric",
                                                        month: "short",
                                                        year: "numeric",
                                                    },
                                                )}{" "}
                                                (
                                                {formatDuration(time, {
                                                    format: [
                                                        time.years
                                                            ? "years"
                                                            : time.months
                                                              ? "months"
                                                              : time.days
                                                                ? "days"
                                                                : time.hours
                                                                  ? "hours"
                                                                  : time.minutes
                                                                    ? "minutes"
                                                                    : "seconds",
                                                    ],
                                                })}{" "}
                                                ago)
                                            </time>
                                            <h2 className="w-full text-xl text-foreground">
                                                {post.title}
                                            </h2>{" "}
                                        </div>
                                        <Suspense>
                                            <Views
                                                className="text-base"
                                                slug={post._raw.flattenedPath}
                                            />
                                        </Suspense>
                                    </div>

                                    <p className="w-full text-sm text-muted-foreground">
                                        {post.brief}
                                    </p>
                                </Link>
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Page
