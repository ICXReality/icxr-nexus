import { ClubData } from "../schema/Club";
import { CRUD } from "./crud";

export type NexusContext = {
  clubs: CRUD<ClubData>;
};
