import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"

import db from "@astrojs/db"
import vercel from "@astrojs/vercel"

import partytown from "@astrojs/partytown"

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [db(), partytown()],
    adapter: vercel({
        isr: {
            expiration: 60,
            exclude: ["/api/*"],
        },
    }),

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
