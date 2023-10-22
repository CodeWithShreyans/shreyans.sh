import { allPosts } from "contentlayer/generated"
// import { format, parseISO } from "date-fns"
import { getMDXComponent } from "next-contentlayer/hooks"

export const generateStaticParams = () =>
    allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

// export const generateMetadata = ({ params }) => {
//     const post = allPosts.find(
//         (post) => post._raw.flattenedPath === params.slug,
//     )
//     return { title: post.title }
// }

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug,
    )

    const Content = getMDXComponent(post?.body.code ?? "")

    return (
        <article className="mx-auto max-w-xl py-8">
            <div className="mb-8 text-center">
                <time
                    className="mb-1 text-xs text-gray-600"
                    dateTime={post?.date}
                >
                    {new Date(post?.date ?? "").toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </time>
                <h1>{post?.title}</h1>
            </div>
            <Content />
        </article>
    )
}

export default PostLayout
