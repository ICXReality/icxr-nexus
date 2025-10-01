import { router } from "../../trpc";
import { getClubs } from "./getClubs";
import { register } from "./register";

export const clubRouter = router({
  getClubs,
  register,
});
