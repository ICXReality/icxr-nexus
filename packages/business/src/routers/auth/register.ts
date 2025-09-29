import { RegisterNewUserSchema } from "../../schema/User";
import { publicProcedure } from "../../trpc";

export const register = publicProcedure
  .input(RegisterNewUserSchema)
  .mutation(async ({ ctx, input }) => {
    await ctx.user.registerNewUser(input);
  });
