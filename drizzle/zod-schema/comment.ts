import { createInsertSchema } from "drizzle-zod";
import { comment } from "../schema/comment";
import { z } from "zod";

export const commentSchema = createInsertSchema(comment, {
    postId: (schema) => schema.min(1, "Post ID is Required"),
    content: (schema) => schema.min(1, "Content is Required"),
    userId: (schema) => schema.min(1, "User ID is Required"),
}).pick({
    // when creating a new comment form will not include the created at/ updated at fields 
    postId: true,
    content: true,
    userId: true,
    parentId: true,
    id: true,
});

export type CommentSchema = z.infer<typeof commentSchema>;