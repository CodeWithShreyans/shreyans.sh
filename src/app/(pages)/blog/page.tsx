import Link from "next/link"

import { allPosts } from "contentlayer/generated"

import { Button } from "@/components/shadcn/button"

export const metadata = {
    title: { default: "Shreyans' Blog", template: `%s | Shreyans' Blog` },
}

const Page = () => {
    return (
        <main className="flex w-full flex-col items-center">
            <ul className="flex w-full flex-col gap-2 px-4">
                {allPosts.map((post) => (
                    <li key={post._id}>
                        <Button
                            asChild
                            className="flex h-auto w-auto cursor-pointer flex-col text-left"
                            variant="ghost"
                        >
                            <Link href={post.url}>
                                <p className="w-full text-base text-muted-foreground">
                                    {new Date(post.date).toLocaleDateString(
                                        "en-US",
                                        {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        },
                                    )}
                                </p>

                                <h2 className="w-full text-xl text-foreground">
                                    {post.title}
                                </h2>

                                <p className="w-full text-sm text-muted-foreground">
                                    {post.brief}
                                </p>
                            </Link>
                        </Button>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Page
