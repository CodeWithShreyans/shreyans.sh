import Balancer from "react-wrap-balancer"

const Blockquote = ({
    children,
    ...rest
}: {
    children?: React.ReactNode
    rest: React.HTMLProps<HTMLQuoteElement>
}) => {
    return (
        <blockquote {...rest} className="border-l-8 border-border p-8 italic">
            <Balancer>{children}</Balancer>
        </blockquote>
    )
}

export default Blockquote
