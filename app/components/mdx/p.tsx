const P = ({
    children,
    ...rest
}: {
    children: React.ReactNode
    rest: React.HTMLProps<HTMLParagraphElement>
}) => {
    return (
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <p className="text-pretty leading-7 tracking-wide" {...rest}>
            {children}
        </p>
    )
}

export default P
