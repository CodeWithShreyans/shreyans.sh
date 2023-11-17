import parse from "html-react-parser"
import { getHighlighter } from "shiki"

import "./code.css"

const Code = async ({
    className,
    children,
}: {
    className?: string
    children?: string
}) => {
    const highlighter = await getHighlighter({})
    //TODO: Rewrite with highlighter.codeToThemedTokens
    return parse(
        highlighter.codeToHtml(children!, className?.replace("language-", "")),
    )
}

export default Code
