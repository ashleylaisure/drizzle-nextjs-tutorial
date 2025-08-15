import { 
    AnyPgColumn,
    integer,
    PgIntegerBuilder,
    pgTable, 
    serial,
    text,
    timestamp,
} from "drizzle-orm/pg-core";

import {user} from "@/drizzle/schema/user"
import { relations } from "drizzle-orm";
import { post } from "@/drizzle/schema/post";


export const comment = pgTable("comment", {
    id: serial("id").primaryKey(),
    // Ability to replay to other comments
    // refrence the parent comment from the comment table 
    parentId: integer("parent_id").references((): AnyPgColumn => comment.id),
    userId: integer("user_id").references(() => user.id).notNull(),
    content: text("content").notNull(),
    postId: integer("post_id").references(() => post.id).notNull(),
    createdAt: timestamp("created_at", {mode: "string"}).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", {mode: "string"}).notNull().defaultNow(),
})

export const commentRelations = relations(comment, ({ one }) => ({
    // O2O comment> author/user
    user: one(user, {
        // on the comments table field userId
        // use the user.id from the user table
        fields: [comment.userId],
        references: [user.id],
    }),
    // O2O comment > post
    post: one(post, {
        fields: [comment.postId],
        references: [post.id],
    })
}))