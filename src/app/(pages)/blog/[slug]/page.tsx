import { allPosts } from "contentlayer/generated"
// import { format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer/hooks"

import components from "@/components/mdx"
import { Separator } from "@/components/shadcn/separator"

export const generateStaticParams = () =>
    allPosts.map((post) => ({
        slug: post._raw.flattenedPath,
    }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    console.log(allPosts)
    return {
        title: `${allPosts.find(
            (post) => post._raw.flattenedPath === params.slug,
        )?.title} | Shreyans' Blog`,
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
                    <time
                        className="text-xl text-muted-foreground"
                        dateTime={post?.date}
                    >
                        {new Date(post?.date ?? "").toLocaleDateString(
                            "en-US",
                            {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            },
                        )}
                    </time>
                    <h1 className="text-5xl tracking-tight">{post?.title}</h1>
                </div>
                <Separator className="my-2 py-0.5" />
                <div className="flex flex-col gap-3 px-1" id="content">
                    {/* @ts-expect-error Code is async function */}
                    <Content components={components} />
                </div>
            </article>
        </main>
    )
}

export default PostLayout
