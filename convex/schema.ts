//SCHEMA
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});

// To learn more about schemas, see https://docs.convex.dev/using/schemas
