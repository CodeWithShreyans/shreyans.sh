"use client"

import { useEffect } from "react"

import NextError from "next/error"

import { captureException } from "@sentry/nextjs"

import { Button } from "@/components/shadcn/button"

export default function GlobalError({
   error,
   reset,
}: {
   error: NextError & { digest?: string }
   reset: () => void
}) {
   useEffect(() => {
      captureException(error)
   }, [error])

   return (
      <html lang="en">
         <body>
            <NextError statusCode={error.props.statusCode} />
            <Button onClick={() => reset()}>Try again?</Button>
         </body>
      </html>
   )
}
