import { allPosts } from "contentlayer/generated"
// import { format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer/hooks"

import components from "@/components/mdx"

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
        <article>
            <div className="flex flex-col pb-4">
                <time
                    className="text-xl text-muted-foreground"
                    dateTime={post?.date}
                >
                    {new Date(post?.date ?? "").toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </time>
                <h1 className="text-5xl">{post?.title}</h1>
            </div>
            <div className="flex flex-col gap-2" id="content">
                {/* @ts-expect-error Code is async function */}
                <Content components={components} />
            </div>
        </article>
    )
}

export default PostLayout
