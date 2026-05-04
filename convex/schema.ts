import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    phone: v.string(),
    budget: v.string(),
    area: v.string(),
    createdAt: v.number(),
  }),
});