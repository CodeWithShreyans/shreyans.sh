const Ul = ({
   children,
   ...rest
}: {
   children: React.ReactNode
   rest: React.HTMLProps<HTMLOListElement>
}) => {
   return (
      <ul {...rest} className="list-disc pl-8">
         {children}
      </ul>
   )
}

export default Ul
