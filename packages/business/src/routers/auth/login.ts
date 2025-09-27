import { LogInSchema } from "../../schema/Auth";
import { publicProcedure } from "../../trpc";

export const logIn = publicProcedure
  .input(LogInSchema)
  .mutation(async ({ ctx, input }) => {});
