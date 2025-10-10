import z from "zod";
import { publicProcedure } from "../../trpc";
import { ClubSchema } from "../../schema/Club";

export const getClubs = publicProcedure
  .output(z.array(ClubSchema))
  .query(async ({ ctx }) => {
    return await ctx.clubs.getClubs();
  });
