import { type MetadataRoute } from "next"

import { allPosts } from "contentlayer/generated"

import { siteConfig } from "@/config/site"

const siteMap = (): MetadataRoute.Sitemap => {
    const map: MetadataRoute.Sitemap = [
        {
            changeFrequency: "hourly",
            lastModified: new Date(),
            priority: 1,
            url: siteConfig.url,
        },
        {
            changeFrequency: "daily",
            lastModified: new Date(),
            priority: 0.7,
            url: `${siteConfig.url}/blog`,
        },
    ]

    for (const post of allPosts) {
        map.push({
            changeFrequency: "weekly",
            lastModified: post.date,
            priority: 0.9,
            url: `${siteConfig.url}/blog/${post._raw.flattenedPath}`,
        })
    }

    return map
}

export default siteMap
