import { router } from "../../trpc";
import { getClubs } from "./getClubs";
import { createClubApplication } from "./createClubApplication";

export const clubRouter = router({
  getClubs,
  createClubApplication,
});
