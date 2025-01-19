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
            thought: "Should giving birth be a human right?",
            date: new Date(),
        },
        {
            index: 3,
            thought: "What is the meaning of life?",
            date: new Date(),
        },
        {
            index: 4,
            thought: "What is the purpose of life?",
            date: new Date(),
        },
        {
            index: 5,
            thought: "What is the purpose of death?",
            date: new Date(),
        },
        {
            index: 6,
            thought: "What is the meaning of death?",
            date: new Date(),
        },
        {
            index: 7,
            thought: "What is the purpose of birth?",
            date: new Date(),
        },
        {
            index: 8,
            thought: "What is the meaning of birth?",
            date: new Date(),
        },
        {
            index: 9,
            thought: "What is the purpose of existence?",
            date: new Date(),
        },
        {
            index: 10,
            thought: "What is the meaning of existence?",
            date: new Date(),
        },
        {
            index: 11,
            thought: "What is the purpose of the universe?",
            date: new Date(),
        },
        {
            index: 12,
            thought: "What is the meaning of the universe?",
            date: new Date(),
        },
        {
            index: 13,
            thought: "What is the purpose of the world?",
            date: new Date(),
        },
        {
            index: 14,
            thought: "What is the meaning of the world?",
            date: new Date(),
        },
        {
            index: 15,
            thought: "What is the purpose of the cosmos?",
            date: new Date(),
        },
        {
            index: 16,
            thought: "What is the meaning of the cosmos?",
            date: new Date(),
        },
        {
            index: 17,
            thought: "What is the purpose of the galaxy?",
            date: new Date(),
        },
        {
            index: 18,
            thought: "What is the meaning of the galaxy?",
            date: new Date(),
        },
        {
            index: 19,
            thought:
                "What is the meaning of the solar system?What is the meaning of the solar system?What is the meaning of the solar system?What is the meaning of the solar system?What is the meaning of the solar system?",
            date: new Date(),
        },
        {
            index: 20,
            thought: "What is the meaning of the solar system?",
            date: new Date(),
        },
    ])
}
