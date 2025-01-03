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
        isr: {
            expiration: 60,
            exclude: ["/api/*"],
        },
    }),
    output: "server",

    env: {
        schema: {
            NOTION_WEBHOOK_SECRET: envField.string({
                access: "secret",
                context: "server",
                optional: false,
            }),
        },
    },
})
