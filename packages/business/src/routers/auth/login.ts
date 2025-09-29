import { LogInSchema } from "../../schema/User";
import { publicProcedure } from "../../trpc";

export const logIn = publicProcedure
  .input(LogInSchema)
  .mutation(async ({ ctx, input }) => {
    await ctx.user.logIn(input);
  });
