import { createInsertSchema } from 'drizzle-zod';
import { tag } from '../schema/tag';
import z from 'zod';

export const tagSchema = createInsertSchema(tag)
export type TagSchema = z.infer<typeof tagSchema>