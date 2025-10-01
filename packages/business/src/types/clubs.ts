import { Club, ClubData } from "../schema/Club";
import { CRUD } from "./crud";

export interface ClubsContext {
  crud: CRUD<Club, string, ClubData>;
  getClubs: () => Promise<Club[]>;
}
