import { createInsertSchema } from "drizzle-zod";
import { post } from "../schema/post";
import z from "zod";
import { InferSelectModel } from "drizzle-orm";

// baseSchema → reusable Zod validators from your table.
const baseSchema = createInsertSchema(post, {
    title: (schema) => schema.min(1, "Title is Required"),
    shortDescription: (schema) => schema.min(1, "Short Description is Required").max(255, "Short Description must be at most 255 characters"),
    userId: (schema) => schema.min(1, "User ID is Required"),
    categoryId: (schema) => schema.min(1, "Category ID is Required"),
}).pick({
    title: true,
    shortDescription: true,
    userId: true,
    categoryId: true,
    content: true,
});

// postSchema will validate either a create or edit post
// z.union() → combine different modes (create/edit).
export const postSchema = z.union([
    z.object({
        mode: z.literal("create"),
        // .shape.field → grab individual field validators without rewriting rules
        title: baseSchema.shape.title,
        shortDescription: baseSchema.shape.shortDescription,
        userId: baseSchema.shape.userId,
        categoryId: baseSchema.shape.categoryId,
        content: baseSchema.shape.content,
        tagIds: z.array(z.number()),
    }),
    z.object({
        mode: z.literal("edit"),
        // need the id field 
        id: z.number().min(1),
        title: baseSchema.shape.title,
        shortDescription: baseSchema.shape.shortDescription,
        userId: baseSchema.shape.userId,
        categoryId: baseSchema.shape.categoryId,
        content: baseSchema.shape.content,
        tagIds: z.array(z.number()),
    })
])

export type PostSchema = z.infer<typeof postSchema>;
// InferSelectModel → get Drizzle's select type for the table.
export type SelectPostModel = InferSelectModel<typeof post>;