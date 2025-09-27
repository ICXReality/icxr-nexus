import z from "zod";
import { IdentifiableSchema } from "./Identifiable";

export const UserDataSchema = z.object({
  name: z.string().optional(),
  email: z.string(),
  phoneNumber: z.string().optional(),
  discordId: z.string().optional(),
  verified: z.boolean().default(false),
});

export const UserSchema = UserDataSchema.extend(IdentifiableSchema.shape);
export type User = z.infer<typeof UserSchema>;

export const LogInSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const RegisterNewUserSchema = z.object({
  email: z.string(),
  password: z.string(),
});
