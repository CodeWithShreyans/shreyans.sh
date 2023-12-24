import NextImage from "next/image"

type ImageProps = React.ComponentProps<typeof NextImage>
export const Image = (props: ImageProps) => {
   return <NextImage {...props} />
}
