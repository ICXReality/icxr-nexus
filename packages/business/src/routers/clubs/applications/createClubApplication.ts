import z from "zod";
import { ClubApplicationSchema } from "../../../schema/Club";
import { userProcedure } from "../../../trpc";

export const ClubApplicationRequestSchema = ClubApplicationSchema.omit({
  applicantId: true,
});

export type ClubApplicationRequest = z.infer<
  typeof ClubApplicationRequestSchema
>;

export const createClubApplication = userProcedure
  .input(ClubApplicationRequestSchema)
  .mutation(async ({ ctx, input }) => {
    await ctx.clubs.applications.crud.create({
      ...input,
      applicantId: ctx.user.currentUser.id,
    });
  });
