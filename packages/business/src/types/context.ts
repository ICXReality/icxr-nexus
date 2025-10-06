import { ClubsContext } from "./clubs";
import { FilesContext } from "./files";
import { UserContext } from "./user";

export type NexusContext = {
  user: UserContext;
  clubs: ClubsContext;
  files: FilesContext;
};
