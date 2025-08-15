import { relations } from "drizzle-orm";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { post } from "./post";


// 1️⃣ Define your table
export const category = pgTable("category", {
    id: serial("id").primaryKey(),
    name: varchar("name", {length: 255}).notNull().unique(),
})

// 2️⃣ Define relations
export const categoryRelations = relations(category, ({many}) => ({
    // O2M category>posts
    posts: many(post)
}))