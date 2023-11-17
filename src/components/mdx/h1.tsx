import { Hash } from "lucide-react"

import { LinkButton } from "@/lib/utils/next"

const H1 = ({
    id,
    children,
    ...rest
}: {
    id?: string
    children?: React.ReactNode
    rest: React.HTMLProps<HTMLHeadingElement>
}) => {
    return (
        <LinkButton className="no-underline" href={`#${id}`}>
            <h2
                className="-ml-1 flex flex-row items-center text-3xl font-semibold underline-offset-4 opacity-80 hover:underline hover:opacity-[1.5]"
                {...rest}
            >
                <Hash size={28} /> {children}
            </h2>
        </LinkButton>
    )
}

export default H1
