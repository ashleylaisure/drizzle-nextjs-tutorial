import { createInsertSchema } from 'drizzle-zod';
import { postTags } from '../schema/postTags';
import z from 'zod';

export const postTagsSchema = createInsertSchema(postTags)
export type PostTagsSchema = z.infer<typeof postTagsSchema>