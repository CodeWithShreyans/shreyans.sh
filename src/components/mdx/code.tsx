import { Code as Bright } from "bright"

const Code = ({
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
            theme="dracula"
        >
            {children}
        </Bright>
    )
}

export default Code
