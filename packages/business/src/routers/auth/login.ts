import z from "zod";
import { publicProcedure } from "../../trpc";

export const LogInRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LogInRequest = z.infer<typeof LogInRequestSchema>;

export const logIn = publicProcedure
  .input(LogInRequestSchema)
  .mutation(async ({ ctx, input }) => {
    await ctx.user.logIn(input);
  });
