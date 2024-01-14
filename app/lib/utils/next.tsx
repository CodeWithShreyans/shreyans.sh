"use client"
import Link from "next/link"
import type React from "react"

import { cn } from "."

const LinkButton = (props: React.ComponentPropsWithRef<typeof Link>) => {
    return (
        <Link
            {...props}
            className={cn(
                "items-center justify-center rounded-md p-0 font-normal underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                props.className,
            )}
        >
            {props.children}
        </Link>
    )
}

export { LinkButton }
