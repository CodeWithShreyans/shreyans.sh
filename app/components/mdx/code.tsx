import { Code as Bright } from "bright"

export const Code = ({
    children,
    className,
}: {
    children?: string
    className?: string
}) => {
    return (
        <Bright
            lang={className?.replace("language-", "")}
            lineNumbers={true}
            theme="github-dark"
        >
            {children}
        </Bright>
    )
}
