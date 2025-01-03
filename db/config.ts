import { column, defineDb, defineTable } from "astro:db"

const Thought = defineTable({
    columns: {
        index: column.number({ primaryKey: true }),
        thought: column.text(),
        date: column.date(),
    },
})

export default defineDb({
    tables: {
        Thought,
    },
})
