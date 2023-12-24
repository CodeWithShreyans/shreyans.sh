import { Hash } from "lucide-react"

import { LinkButton } from "@/lib/utils/next"

const H1 = ({
   children,
   id,
   ...rest
}: {
   children?: React.ReactNode
   id?: string
   rest: React.HTMLProps<HTMLHeadingElement>
}) => {
   return (
      <LinkButton className="pt-4 no-underline" href={`#${id}`} id={id}>
         <h2
            className="inline-flex items-center text-3xl font-semibold underline-offset-4 opacity-80 hover:underline hover:opacity-[1.5] [&>svg]:opacity-0 [&>svg]:hover:opacity-100"
            {...rest}
         >
            {children} <Hash className="transition-opacity" size={28} />
         </h2>
      </LinkButton>
   )
}

export default H1
