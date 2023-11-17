import { Hash } from "lucide-react"

import { LinkButton } from "@/lib/utils/next"

const H4 = ({
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
            <h5
                className="-ml-1 flex flex-row items-center text-lg font-semibold underline-offset-4 opacity-80 hover:underline hover:opacity-[1.5]"
                {...rest}
            >
                <Hash size={16} /> {children}
            </h5>
        </LinkButton>
    )
}

export default H4
