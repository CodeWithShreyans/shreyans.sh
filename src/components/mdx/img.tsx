import Image from "next/image"

import "./img.css"

type ImgProps = {
    src?: string
    alt?: string
    rest: React.HTMLProps<HTMLImageElement>
}

const Img = ({ src, alt, ...rest }: ImgProps) => {
    return (
        <Image
            {...rest}
            alt={alt ?? "No alt provided"}
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="image mx-auto my-2 aspect-auto max-h-[50vh]"
            fill={true}
            src={src!}
        />
    )
}

export default Img
