import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"
import vercel from "@astrojs/vercel"

import sitemap from "@astrojs/sitemap"

export default defineConfig({
    site: "https://shreyans.sh",
    trailingSlash: "never",

    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        sitemap({
            filter: (page) => !page.includes("/legal/"),
        }),
    ],
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
