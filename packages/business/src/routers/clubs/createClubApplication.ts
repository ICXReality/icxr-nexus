import { ClubApplicationRequestSchema } from "../../schema/Club";
import { publicProcedure } from "../../trpc";

export const createClubApplication = publicProcedure
  .input(ClubApplicationRequestSchema)
  .mutation(async ({ ctx, input }) => {
    console.log("Got application:", input);
  });
