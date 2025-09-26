import { router } from "../../trpc";
import { register } from "./register";

export const clubRouter = router({
  register,
});
