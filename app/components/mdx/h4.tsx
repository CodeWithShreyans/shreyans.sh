import { Hash } from "lucide-react"

import { LinkButton } from "@/lib/utils/next"

const H4 = ({
    children,
    id,
    ...rest
}: {
    children?: React.ReactNode
    id?: string
    rest: React.HTMLProps<HTMLHeadingElement>
}) => {
    return (
        <LinkButton className="no-underline" href={`#${id}`} id={id}>
            <h5
                className="inline-flex items-center text-lg font-semibold underline-offset-4 opacity-80 hover:underline hover:opacity-[1.5] [&>svg]:opacity-0 [&>svg]:hover:opacity-100"
                {...rest}
            >
                {children} <Hash className="transition-opacity" size={18} />
            </h5>
        </LinkButton>
    )
}

export default H4
