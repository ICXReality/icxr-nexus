import { router } from "../trpc";
import { authRouter } from "./auth/router";
import { clubRouter } from "./clubs/router";

export const nexusAppRouter = router({
  auth: authRouter,
  clubs: clubRouter,
});

export type NexusAppRouter = typeof nexusAppRouter;
