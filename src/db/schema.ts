import { pgTable, serial, varchar, text, uuid, } from "drizzle-orm/pg-core";

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    description: text('description').notNull(),
    userId: uuid('userId').notNull()
})