import z from "zod";
import { publicProcedure } from "../../../trpc";
import { ClubApplicationSchema } from "../../../schema/Club";

export const UserClubApplicationsResponseSchema = z.array(
  ClubApplicationSchema
);

export const getUserApplications = publicProcedure
  .output(UserClubApplicationsResponseSchema)
  .query(async ({ ctx }) => {
    const user = await ctx.user.getCurrentUser();
    if (!user) {
      return [];
    }

    return await ctx.clubs.applications.getApplicationsForUser(user.id);
  });
