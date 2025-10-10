import { router } from "../../trpc";
import { getClubs } from "./getClubs";
import { createClubApplication } from "./applications/createClubApplication";
import { getUserApplications } from "./applications/getUserApplications";

export const clubApplicationsRouter = router({
  createClubApplication,
  getUserApplications,
});

export const clubRouter = router({
  getClubs,
  applications: clubApplicationsRouter,
});
