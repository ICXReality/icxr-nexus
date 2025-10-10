import z from "zod";
import { publicProcedure } from "../../trpc";

export const RegisterRequestSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type RegisterRequest = z.infer<typeof RegisterRequestSchema>;

export const register = publicProcedure
  .input(RegisterRequestSchema)
  .mutation(async ({ ctx, input }) => {
    await ctx.user.registerNewUser(input);
  });
