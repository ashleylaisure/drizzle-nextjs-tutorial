import { createInsertSchema } from "drizzle-zod";
import { user } from "../schema/user";
import z from "zod";
import { InferSelectModel } from "drizzle-orm";


const baseSchema = createInsertSchema(user, {
    fullName: (schema) => schema.min(1),
    password: (schema) => schema.min(1, "Password must be at least 1 characters long"),
    age: z.coerce.number().min(18, "Age must be at least 18").max(99, "Age must be at most 99"),
    email: (schema) => schema.email("Invalid email format").min(1, "Email is required"),
}).pick({
    fullName: true,
    email: true,
    age: true,
    password: true,
});

export const userSchema = z.union([
    z.object({
        mode: z.literal("signUp"),
        fullName: baseSchema.shape.fullName,
        email: baseSchema.shape.email,
        age: baseSchema.shape.age,
        password: baseSchema.shape.password,
    }),
    z.object({
        mode: z.literal("signIn"),
        email: baseSchema.shape.email,
        password: baseSchema.shape.password,
    }),
    z.object({
        mode: z.literal("update"),
        id: z.number().min(1),
        fullName: baseSchema.shape.fullName,
        age: baseSchema.shape.age,
    })
]);

export type UserSchema = z.infer<typeof userSchema>;
export type SelectUserModel = InferSelectModel<typeof user>;