import { Thought, db, eq } from "astro:db"
import {
    NOTION_WEBHOOK_SECRET,
    TWITTER_ACCESS_SECRET,
    TWITTER_ACCESS_TOKEN,
    TWITTER_APP_KEY,
    TWITTER_APP_SECRET,
} from "astro:env/server"
import type { APIRoute } from "astro"
import { TwitterApi } from "twitter-api-v2"
import type { NotionWebhookRequest } from "./_types"

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get("content-type") !== "application/json")
        return new Response("Bad Request", { status: 400 })

    if (request.headers.get("secret") !== NOTION_WEBHOOK_SECRET)
        return new Response("Unauthorized", { status: 401 })

    const { data } = (await request.json()) as NotionWebhookRequest

    if (
        !data.properties.Index.unique_id.number ||
        !data.properties.Thought.title[0].plain_text ||
        !data.properties.DateTime.date.start
    )
        return new Response("Bad Request", { status: 400 })

    if (
        (
            await db
                .select()
                .from(Thought)
                .where(
                    eq(Thought.index, data.properties.Index.unique_id.number),
                )
        ).length !== 0
    )
        return new Response("Conflict", { status: 409 })

    await db.insert(Thought).values({
        index: data.properties.Index.unique_id.number,
        thought: data.properties.Thought.title[0].plain_text,
        date: new Date(data.properties.DateTime.date.start),
    })

    const twitterClient = new TwitterApi({
        accessToken: TWITTER_ACCESS_TOKEN,
        accessSecret: TWITTER_ACCESS_SECRET,
        appKey: TWITTER_APP_KEY,
        appSecret: TWITTER_APP_SECRET,
    }).readWrite.v2

    await twitterClient.tweetThread([
        data.properties.Thought.title[0].plain_text,
        `https://shreyans.sh/thoughts/${data.properties.Index.unique_id.number}`,
    ])

    return new Response(null, { status: 200 })
}

export const ALL: APIRoute = () =>
    new Response("Method Not Allowed", { status: 405 })
