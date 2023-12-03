import { Hash } from "lucide-react"

import { LinkButton } from "@/lib/utils/next"

const H2 = ({
    id,
    children,
    ...rest
}: {
    id?: string
    children?: React.ReactNode
    rest: React.HTMLProps<HTMLHeadingElement>
}) => {
    return (
        <LinkButton className="no-underline" href={`#${id}`} id={id}>
            <h3
                className="inline-flex items-center text-2xl font-semibold underline-offset-4 opacity-80 hover:underline hover:opacity-[1.5] [&>svg]:opacity-0 [&>svg]:hover:opacity-100"
                {...rest}
            >
                {children} <Hash className="transition-opacity" size={22} />
            </h3>
        </LinkButton>
    )
}

export default H2
