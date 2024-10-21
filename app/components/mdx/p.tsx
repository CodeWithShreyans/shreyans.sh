export const P = ({
    children,
    ...rest
}: {
    children: React.ReactNode
    rest: React.HTMLProps<HTMLParagraphElement>
}) => {
    return (
        <p className="text-pretty leading-7 tracking-wide" {...rest}>
            {children}
        </p>
    )
}
