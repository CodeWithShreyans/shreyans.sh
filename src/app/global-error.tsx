"use client"

import { useEffect } from "react"

import Error from "next/error"

import { captureException } from "@sentry/nextjs"

import { Button } from "@/components/shadcn/button"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        captureException(error)
    }, [error])

    return (
        <html>
            <body>
                <Error statusCode={error.props.statusCode} />
                <Button onClick={() => reset()}>Try again?</Button>
            </body>
        </html>
    )
}
