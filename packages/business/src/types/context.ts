import { Club } from "../schema/Club";
import { CRUD } from "./crud";

export type NexusContext = {
  clubs: CRUD<Club>;
};
