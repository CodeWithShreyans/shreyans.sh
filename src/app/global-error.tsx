"use client"

import { useEffect } from "react"

import Error from "next/error"

import * as Sentry from "@sentry/nextjs"

import { Button } from "@/components/shadcn/button"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        Sentry.captureException(error)
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
