import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Fetches all todos from the database,
 * ordered by newest first.
 */
export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").collect();
    return todos;
  },
});

/**
 * Adds a new todo item with the given text.
 * The new todo is initialized as not completed.
 */
export const addTodo = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      text: args.text,
      isCompleted: false,
    });
    return true;
  },
});

/**
 * Toggles the completion status of a todo by its ID.
 * Throws an error if the todo does not exist.
 */
export const toggleTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) throw new ConvexError("Todo not found");

    await ctx.db.patch(args.id, {
      isCompleted: !todo.isCompleted,
    });
  },
});

/**
 * Deletes a todo item by its ID.
 */
export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

/**
 * Updates the text of a todo item by its ID.
 */
export const updateTodo = mutation({
  args: { id: v.id("todos"), text: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      text: args.text,
    });
  },
});

/**
 * Deletes all todos in the database.
 * Returns the number of todos that were deleted.
 */
export const clearAllTodos = mutation({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").collect();
    for (const todo of todos) {
      await ctx.db.delete(todo._id);
    }
    return { deletedCount: todos.length };
  },
});
