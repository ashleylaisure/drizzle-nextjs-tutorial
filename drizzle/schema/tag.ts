import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm';
import { postTags } from "./postTags";

export const tag = pgTable("tag", {
    id: serial("id").primaryKey(),
    name: varchar("name", {length: 255}).notNull().unique(),
})

// M2M tags>Posts
export const tagRelations = relations(tag, ({ many}) => ({
    postToTag: many(postTags),
}))