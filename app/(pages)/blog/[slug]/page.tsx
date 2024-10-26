import { Suspense } from "react"

import type { Metadata } from "next"

import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer2/hooks"

import { components } from "@/components/mdx"
import { Separator } from "@/components/shadcn/separator"
import { siteConfig } from "@/config/site"

import { TracingBeam } from "@/components/aceternity/tracing-beam"
import { Views } from "../views"

export const dynamic = "force-static"

export const generateStaticParams = () =>
    allPosts.map((post) => ({
        slug: post._raw.flattenedPath,
    }))

export const generateMetadata = async (props: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> => {
    const params = await props.params
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug,
    )
    const title = `${post?.title} - Blog`
    const description = post?.brief
    return {
        keywords: siteConfig.baseKeywords.concat(post?.tags ?? []),
        title: title,
        description: description,
        twitter: {
            title: title,
            description: description,
        },
        openGraph: {
            title: title,
            description: description,
            url: post?.url,
        },
    }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug,
    )

    const Content = useMDXComponent(post?.body.code ?? "")

    return (
        <main className="pb-4">
            <article className="space-y-3">
                <div className="space-y-0.5 px-1">
                    <div className="flex w-full items-center justify-between">
                        <time
                            className="text-xl text-muted-foreground"
                            dateTime={post?.date}
                        >
                            {new Date(post?.date ?? "").toLocaleDateString(
                                "en-US",
                                {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                },
                            )}
                        </time>
                        <Suspense>
                            <Views slug={params.slug} />
                        </Suspense>
                    </div>
                    <h1 className="text-5xl tracking-tight">{post?.title}</h1>
                </div>
                <Separator className="my-2 py-0.5" />
                <div className="flex flex-col gap-3 px-1" id="content">
                    <Content components={components} />
                </div>
            </article>
        </main>
    )
}

const Page = async (props: { params: Promise<{ slug: string }> }) => {
    const params = await props.params
    return (
        <TracingBeam>
            <PostLayout params={params} />
        </TracingBeam>
    )
}

export default Page
