"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { getSleepStatus } from "./server"

export const SleepStatus = () => {
    const [status, setStatus] = useState<"awake" | "asleep" | null>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            getSleepStatus().then((v) => {
                setStatus(v as "awake" | "asleep")
                console.log(v)
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return status === "asleep" ? (
        <div className="flex items-center gap-1 border-2 border-foreground rounded-lg w-fit p-1">
            <MoonIcon /> <span>I'm asleep</span>
        </div>
    ) : status === "awake" ? (
        <div className="flex items-center gap-1 border-2 border-foreground rounded-lg w-fit p-1">
            <SunIcon /> <span>I'm awake</span>
        </div>
    ) : null
}
