export const Ol = ({
    children,
    ...rest
}: {
    children: React.ReactNode
    rest: React.HTMLProps<HTMLOListElement>
}) => {
    return (
        <ol {...rest} className="list-decimal pl-8">
            {children}
        </ol>
    )
}
