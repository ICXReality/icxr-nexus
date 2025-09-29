import { router } from "../../trpc";
import { forgotPassword } from "./forgotPassword";
import { logIn } from "./login";
import { logOut } from "./logout";
import { me } from "./me";
import { register } from "./register";

export const authRouter = router({
  logIn,
  logOut,
  registerNewUser: register,
  me,
  forgotPassword,
});
