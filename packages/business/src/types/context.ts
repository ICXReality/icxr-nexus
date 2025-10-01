import { ClubData } from "../schema/Club";
import { UserContext } from "./user";
import { CRUD } from "./crud";
import { ClubsContext } from "./clubs";

export type NexusContext = {
  user: UserContext;
  clubs: ClubsContext;
};
