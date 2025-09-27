import { router } from "../../trpc";
import { logIn } from "./login";
import { logOut } from "./logout";
import { registerNewUser } from "./registerNewUser";

export const authRouter = router({
  logIn,
  logOut,
  registerNewUser,
});
