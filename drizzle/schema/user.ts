import { relations } from 'drizzle-orm';
import { 
    integer, 
    pgTable, 
    serial, 
    varchar, 
    timestamp } from 'drizzle-orm/pg-core';
import { post } from './post';

export const user = pgTable('user', {
    id: serial('id').notNull().primaryKey(),
    fullName: varchar("full_name", {length: 255}).notNull(),
    age: integer("age").notNull(),
    password: varchar("password", {length: 255}).notNull(),
    email: varchar("email", {length: 255}).notNull().unique(),
    createdAt: timestamp("created_at", {mode: "string"}).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", {mode: "string"}).notNull().defaultNow(),
});

// O2M user>comments
// O2M user>posts
export const userRelations = relations(user, ({many}) => ({
    posts: many(post),
}))