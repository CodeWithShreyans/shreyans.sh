"use server"

import { get } from "@vercel/edge-config"

export const getSleepStatus = async () => {
    return (await get("lifeStatus"))?.toString()
}
