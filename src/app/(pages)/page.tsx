// import { api } from "@/trpc/server"

import Balancer from "react-wrap-balancer"

export const revalidate = 3600 // 1 hour

export default function Home() {
    // const hello = await api.post.hello.query({ text: "from tRPC" })

    return (
        <>
            <div>
                <p>
                    <Balancer>
                        {
                            "Hey! It's-a me Shreyans! Your friendly neighborhood software dev. I'm a 16-year-old full-stack web dev from Agra, India 🇮🇳. Also a student and entrepreneur. I'm into everything from tech and business to finance, law, physics, food, and travel. Here's a few things I've worked on:"
                        }
                    </Balancer>
                </p>
            </div>
        </>
    )
}
