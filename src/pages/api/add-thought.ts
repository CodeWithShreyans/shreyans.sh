import { NOTION_WEBHOOK_SECRET } from "astro:env/server"
import type { APIRoute } from "astro"

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get("content-type") !== "application/json")
        return new Response("Bad Request", { status: 400 })

    if (request.headers.get("secret") !== NOTION_WEBHOOK_SECRET)
        return new Response("Unauthorized", { status: 401 })

    console.log(await request.json())
    return new Response("Good", { status: 200 })
}

export const ALL: APIRoute = () =>
    new Response("Method Not Allowed", { status: 405 })
