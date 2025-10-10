import { Club, ClubApplication, ClubData } from "../../schema/Club";
import { CRUD } from "../crud";

export interface NexusClubApplicationsContext {
  crud: CRUD<ClubApplication, string>;
  getApplicationsForUser(userId: string): Promise<ClubApplication[]>;
}

export interface NexusClubsContext {
  applications: NexusClubApplicationsContext;
  crud: CRUD<ClubData, string>;
  getClubs: () => Promise<Club[]>;
}
