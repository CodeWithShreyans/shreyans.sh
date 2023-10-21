const Page = () => {
    return (
        <main className="flex h-full w-full flex-col items-center">
            <ul className="flex w-1/2 flex-col gap-2">
                {/* {initialPosts.map((post) => (
                    <li key={post.id}>
                        <Button
                            asChild
                            className="flex h-auto w-auto cursor-pointer flex-col text-left"
                            variant="ghost"
                        >
                            <Link href="/blog">
                                <p className="w-full text-sm text-muted-foreground">
                                    {new Date(
                                        post.publishedAt,
                                    ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>

                                <h2 className="w-full text-xl text-foreground">
                                    {post.title}
                                </h2>

                                <p className="w-full text-xs text-muted-foreground">
                                    {post.brief}
                                </p>
                            </Link>
                        </Button>
                    </li>
                ))} */}
            </ul>
        </main>
    )
}

export default Page
