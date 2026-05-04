import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createLead = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    budget: v.string(),
    area: v.string(),
  },
  returns: v.id("leads"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("leads", {
      name: args.name,
      phone: args.phone,
      budget: args.budget,
      area: args.area,
      createdAt: Date.now(),
    });
  },
});