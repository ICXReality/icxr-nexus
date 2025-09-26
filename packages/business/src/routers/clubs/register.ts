import { ClubSchema } from "../../schema/Club";
import { publicProcedure } from "../../trpc";

export const register = publicProcedure
  .input(ClubSchema)
  .query(async ({ ctx, input }) => {
    await ctx.clubs.create(input);
  });
