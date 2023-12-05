"use client"

import { useEffect } from "react"

import { Button } from "@/components/shadcn/button"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>One of my experiments might have done this</h2>
            <p>Please shoot me a short email if this persists. Thanks!</p>
            <Button onClick={() => reset()}>Try again?</Button>
        </div>
    )
}
