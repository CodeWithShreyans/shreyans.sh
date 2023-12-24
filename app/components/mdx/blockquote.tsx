const Blockquote = ({
   children,
   ...rest
}: {
   children?: React.ReactNode
   rest: React.HTMLProps<HTMLQuoteElement>
}) => {
   return (
      <blockquote {...rest} className="border-l-8 border-border p-8 italic">
         {children}
      </blockquote>
   )
}

export default Blockquote
