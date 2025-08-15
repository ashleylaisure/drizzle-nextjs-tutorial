import { createInsertSchema } from "drizzle-zod";
import { category } from "../schema/category";
import { z } from "zod";



// 1️⃣ Create Zod schema from insert type
export const categorySchema = createInsertSchema(category);

// 2️⃣ categorySchema is a ZodObject You can refine it like any Zod schema
// export const refinedInsertCategorySchema = categorySchema.extend({
//     name: z.string().min(2).max(100),
// });

// 3️⃣ Create matching TS type from Zod schema
// z.infer → convert Zod schema to TS type.
export type CategorySchema = z.infer<typeof categorySchema>;

