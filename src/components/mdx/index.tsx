import A from "./a"
import Blockquote from "./blockquote"
import Code from "./code"
import H1 from "./h1"
import H2 from "./h2"
import H3 from "./h3"
import H4 from "./h4"
import Hr from "./hr"
import Img from "./img"
import Ol from "./ol"
import P from "./p"
import Pre from "./pre"
import Ul from "./ul"

const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    a: A,
    blockquote: Blockquote,
    img: Img,
    code: Code,
    hr: Hr,
    ol: Ol,
    ul: Ul,
    pre: Pre,
    p: P,
}

export type Components = typeof components

export default components
