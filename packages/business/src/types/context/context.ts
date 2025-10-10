import { NexusClubsContext } from "./clubs";
import { NexusFilesContext } from "./files";
import { NexusUserContext } from "./user";

export type NexusContext = {
  user: NexusUserContext;
  clubs: NexusClubsContext;
  files: NexusFilesContext;
};
