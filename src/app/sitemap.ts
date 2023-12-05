import { type MetadataRoute } from "next"

import { allPosts } from "contentlayer/generated"

const siteMap = (): MetadataRoute.Sitemap => {
    const SITE_URL = "https://shreyans.sh"

    const map: MetadataRoute.Sitemap = [
        {
            changeFrequency: "hourly",
            lastModified: new Date(),
            priority: 1,
            url: SITE_URL,
        },
        {
            changeFrequency: "daily",
            lastModified: new Date(),
            priority: 0.7,
            url: `${SITE_URL}/blog`,
        },
    ]

    for (const post of allPosts) {
        console.log(post._raw.flattenedPath)
        map.push({
            changeFrequency: "weekly",
            lastModified: post.date,
            priority: 0.9,
            url: `${SITE_URL}/blog/${post._raw.flattenedPath}`,
        })
    }

    return map
}

export default siteMap
