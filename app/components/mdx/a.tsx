import { ExternalLink } from "lucide-react"

import { LinkButton } from "@/lib/utils/next"

type AProps = {
   children?: React.ReactNode
   href?: string
   rest: React.HTMLProps<HTMLAnchorElement>
}

const A = ({ children, href, ...rest }: AProps) => {
   const self = href
      ? href.startsWith("https://shreyans.sh") ||
        href.includes("localhost") ||
        href.startsWith("#")
      : false

   return (
      <LinkButton
         {...rest}
         className="transition-all [&>svg]:hidden [&>svg]:hover:inline-block"
         href={href ?? "/broken_link"}
         target={self ? "_self" : "_blank"}
      >
         {children}
         {!self ? <ExternalLink className="-ml-0.5" size={20} /> : null}
      </LinkButton>
   )
}

export default A
