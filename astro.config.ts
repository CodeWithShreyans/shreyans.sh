import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"

import db from "@astrojs/db"
import vercel from "@astrojs/vercel"

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [db()],
    adapter: vercel({
        isr: {
            expiration: 60,
            exclude: ["/api/*"],
        },
        imageService: true,
    }),
    output: "server",

    env: {
        schema: {
            NOTION_WEBHOOK_SECRET: envField.string({
                access: "secret",
                context: "server",
                optional: false,
            }),
            TWITTER_ACCESS_TOKEN: envField.string({
                access: "secret",
                context: "server",
                optional: false,
            }),
            TWITTER_ACCESS_SECRET: envField.string({
                access: "secret",
                context: "server",
                optional: false,
            }),
            TWITTER_APP_KEY: envField.string({
                access: "secret",
                context: "server",
                optional: false,
            }),
            TWITTER_APP_SECRET: envField.string({
                access: "secret",
                context: "server",
                optional: false,
            }),
        },
    },
})
