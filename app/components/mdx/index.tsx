import { A } from "./a"
import { Blockquote } from "./blockquote"
import { Code } from "./code"
import { H1 } from "./h1"
import { H2 } from "./h2"
import { H3 } from "./h3"
import { H4 } from "./h4"
import { Hr } from "./hr"
import { Img } from "./img"
import { Ol } from "./ol"
import { P } from "./p"
import { Ul } from "./ul"

export const components = {
    a: A,
    blockquote: Blockquote,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    hr: Hr,
    img: Img,
    ol: Ol,
    p: P,
    pre: Code,
    ul: Ul,
}

export type Components = typeof components
