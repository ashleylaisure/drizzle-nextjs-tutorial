import {
    integer,
    pgTable,
    primaryKey
} from "drizzle-orm/pg-core"
import { relations } from 'drizzle-orm';

import {post} from "@/drizzle/schema/post"
import {tag} from "@/drizzle/schema/tag"

export const postTags = pgTable("post_to_tag", {
        postId: integer("post_id").references(() => post.id).notNull(),
        tagId: integer("tag_id").references(() => tag.id).notNull()
    },
    (table) => ({
        pk: primaryKey({columns: [table.postId, table.tagId] }),
    })
)

export const postTagsRelations = relations(postTags, ({ one }) => ({
    tag: one(tag, {
        fields: [postTags.tagId],
        references: [tag.id]
    }),
    post: one(post, {
        fields: [postTags.postId],
        references: [post.id]
    }),
}))
