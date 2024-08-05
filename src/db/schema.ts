// import { pgTable, serial, varchar, text, uuid, } from "drizzle-orm/pg-core";

import {
    sqliteTable,
    integer,
    text
} from 'drizzle-orm/sqlite-core'

export const posts = sqliteTable('posts', {
    id: integer('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description').notNull(),
})