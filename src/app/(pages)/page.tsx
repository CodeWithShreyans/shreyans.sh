// import { api } from "@/trpc/server"

export const revalidate = 3600 // 1 hour

export default function Home() {
    // const hello = await api.post.hello.query({ text: "from tRPC" })

    return (
        <main className="flex min-h-screen flex-col items-center justify-center ">
            Hello
        </main>
    )
}
