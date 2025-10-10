import { initTRPC, TRPCError } from "@trpc/server";
import { NexusContext } from "./types/context/context";

const t = initTRPC.context<NexusContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

// procedure that asserts that the user is logged in
export const userProcedure = t.procedure.use(async (opts) => {
  const { ctx } = opts;

  let user = await ctx.user.getCurrentUser();
  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return opts.next({
    ctx: {
      ...ctx,
      user: {
        ...ctx.user,
        currentUser: user,
      },
    },
  });
});
