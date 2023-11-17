import Link from "next/link"

import { ArrowUpRight, MoveUpRight } from "lucide-react"

import { LinkButton } from "@/lib/utils/next"

type AProps = {
    href?: string
    children?: React.ReactNode
    rest: React.HTMLProps<HTMLAnchorElement>
}

const A = ({ href, children, ...rest }: AProps) => {
    const self = href
        ? href.startsWith("https://shreyans.sh") || href.includes("localhost")
        : false

    console.log(href)
    return (
        <LinkButton
            {...rest}
            href={href ?? "/broken_link"}
            target={self ? "_self" : "_blank"}
        >
            {children}
            {!self ? <ArrowUpRight className="-ml-0.5 inline-block" /> : null}
        </LinkButton>
    )
}

export default A
