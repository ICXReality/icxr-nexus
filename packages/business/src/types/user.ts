import { LogIn, RegisterNewUserData, User } from "../schema/User";

export interface UserContext {
  logIn: (logIn: LogIn) => Promise<void>;
  logOut: () => Promise<void>;
  registerNewUser: (newUser: RegisterNewUserData) => Promise<void>;
  getCurrentUser: () => Promise<User | null>;
}
