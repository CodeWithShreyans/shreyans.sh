import { defineDocumentType, makeSource } from "@contentlayer/source-files"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

const Post = defineDocumentType(() => ({
    computedFields: {
        url: {
            resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
            type: "string",
        },
    },
    contentType: "mdx",
    fields: {
        brief: {
            description: "A short brief of the post",
            required: true,
            type: "string",
        },
        date: {
            description: "The date of the post",
            required: true,
            type: "date",
        },
        tags: {
            description: "The tags of the post",
            of: { type: "string" },
            required: false,
            type: "list",
        },
        title: {
            description: "The title of the post",
            required: true,
            type: "string",
        },
    },
    filePathPattern: "**/*.mdx",
    name: "Post",
}))

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
    mdx: {
        rehypePlugins: [rehypeSlug],
        remarkPlugins: [remarkGfm],
    },
})
