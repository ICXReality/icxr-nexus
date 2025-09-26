import { router } from "../trpc";
import { clubRouter } from "./clubs/router";

export const nexusAppRouter = router({
  clubs: clubRouter,
});

export type NexusAppRouter = typeof nexusAppRouter;
