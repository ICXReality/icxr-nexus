import { router } from "../trpc";
import { authRouter } from "./auth/router";
import { clubRouter } from "./clubs/router";
import { filesRouter } from "./files/router";

export const nexusAppRouter = router({
  auth: authRouter,
  clubs: clubRouter,
  files: filesRouter,
});

export type NexusAppRouter = typeof nexusAppRouter;
