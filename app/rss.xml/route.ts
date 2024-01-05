import { siteConfig } from "@/config/site"
import { allPosts } from "contentlayer/generated"
import { Feed } from "feed"

export const dynamic = "force-static"

export const GET = () => {
    const feed = new Feed({
        title: "Shreyans Jain's Blog",
        description: "A developer's blog about tech and life.",
        id: "https://shreyans.sh/",
        link: "https://shreyans.sh/blog",
        language: "en", // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        //   image: "http://example.com/image.png",
        favicon: "http://shreyans.sh/favicon.ico",
        copyright: "All rights reserved 2024, Shreyans Jain",
        author: {
            name: "Shreyans Jain",
            email: "shreyans@shreyans.sh",
            link: "https://shreyans.sh",
        },
    })
    for (const post of allPosts) {
        feed.addItem({
            title: post.title,
            id: post._id,
            link: `${siteConfig.url}${post.url}`,
            description: post.brief,
            content: post.body.raw,
            date: new Date(post.date),
            author: [
                {
                    name: "Shreyans Jain",
                    email: "shreyans@shreyans.sh",
                    link: "https://shreyans.sh",
                },
            ],
        })
    }
    return new Response(feed.rss2())
}
