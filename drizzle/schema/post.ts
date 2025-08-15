import { 
    pgTable, 
    pgEnum, 
    serial, 
    integer, 
    varchar, 
    text, 
    timestamp } from "drizzle-orm/pg-core";
import { user } from "@/drizzle/schema/user" 
import { category } from "@/drizzle/schema/category" 
import { relations } from 'drizzle-orm';
import { postTags } from "./postTags";
import { comment } from "./comment";

export const statusEnum = pgEnum("status", ["draft", "archived", "published"])

export const post = pgTable("post", {
    id: serial("id").primaryKey(),
    // foreign key referencing the primary key on the user table
    // how to define one to one relationship with drizzle
    userId: integer("user_id").notNull().references(() => user.id),
    title: varchar("title", {length: 255}).notNull(),
    shortDescription: text("short_description"),
    content: text("content").notNull(),
    status: statusEnum().default("draft"),
    // category same as user reference
    categoryId: integer("category_id").references(()=> category.id).notNull(),
    createdAt: timestamp("created_at", {mode: "string"}).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", {mode: "string"}).notNull().defaultNow()
})

export const postRelations = relations(post, ({one, many}) => ({
    // O2O post>user
    user: one(user, {
        fields: [post.userId],
        references: [user.id],
    }),
    // M2M post>tags
    tags: many(postTags),
    // O2M post>comments
    comments: many(comment),
    // O2O post>category
    category: one(category, {
        fields: [post.categoryId],
        references: [category.id]
    }),
}))