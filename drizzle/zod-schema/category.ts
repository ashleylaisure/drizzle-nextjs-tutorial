import { createInsertSchema } from 'drizzle-zod';
import { category } from '../schema/category';
import z from 'zod';

export const categorySchema = createInsertSchema(category)
export type CategorySchema = z.infer<typeof categorySchema>