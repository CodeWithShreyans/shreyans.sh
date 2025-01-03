import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"

import db from "@astrojs/db"
import react from "@astrojs/react"
import vercel from "@astrojs/vercel"

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react(), db()],
    adapter: vercel({
        // TODO: Re-enable when https://github.com/withastro/astro/issues/12803 is fixed
        // isr: {
        //     expiration: 60,
        //     exclude: ["/api/*"],
        // },
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
