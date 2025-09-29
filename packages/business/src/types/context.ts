import { ClubData } from "../schema/Club";
import { UserContext } from "./user";
import { CRUD } from "./crud";

export type NexusContext = {
  user: UserContext;
  clubs: CRUD<ClubData>;
};
