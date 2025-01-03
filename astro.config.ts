import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"

import react from "@astrojs/react"

import vercel from "@astrojs/vercel"

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react()],
    adapter: vercel(),
    output: "server",

    env: {
        schema: {
            // biome-ignore lint/style/useNamingConvention: Env var
            NOTION_WEBHOOK_SECRET: envField.string({
                access: "secret",
                context: "server",
                optional: false,
            }),
        },
    },
})
