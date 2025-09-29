import { UserSchema } from "../../schema/User";
import { publicProcedure } from "../../trpc";

export const me = publicProcedure
  .output(UserSchema.nullable())
  .query(async ({ ctx }) => {
    return await ctx.user.getCurrentUser();
  });
