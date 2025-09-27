import { ClubDataSchema } from "../../schema/Club";
import { publicProcedure } from "../../trpc";

export const register = publicProcedure
  .input(ClubDataSchema.omit({ status: true }))
  .mutation(async ({ ctx, input }) => {
    await ctx.clubs.create({
      ...input,
      status: "pending",
    });
  });
