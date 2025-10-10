import { LogInRequest } from "../../routers/auth/login";
import { RegisterRequest } from "../../routers/auth/register";
import { User } from "../../schema/User";

export interface NexusUserContext {
  currentUser?: User;
  logIn: (logIn: LogInRequest) => Promise<void>;
  logOut: () => Promise<void>;
  registerNewUser: (newUser: RegisterRequest) => Promise<void>;
  getCurrentUser: () => Promise<User | null>;
}
