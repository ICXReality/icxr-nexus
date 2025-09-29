import { LogIn, RegisterNewUserData, User } from "../schema/User";

export type UserContext = {
  logIn: (logIn: LogIn) => Promise<void>;
  logOut: () => Promise<void>;
  registerNewUser: (newUser: RegisterNewUserData) => Promise<void>;
  getCurrentUser: () => Promise<User | null>;
};
