import { Thought, db } from "astro:db"

export default async function seed() {
    await db.insert(Thought).values([
        {
            index: 1,
            thought: "Hello, World!",
            date: new Date(),
        },
        {
            index: 2,
            thought: "Goodbye, World!",
            date: new Date(),
        },
    ])
}
