import { z } from "zod";
import { IdentifiableSchema } from "./Identifiable";

export const ClubDataSchema = z.object({
  name: z.string(),
  status: z
    .enum(["inactive", "frozen", "pending", "active"])
    .default("inactive"),
  website: z.string().optional(),
  email: z.string().optional(),
  universityId: z.string().optional(),
  description: z.string().optional(),
  links: z.array(z.string()).optional(),
  officers: z
    .array(
      z.object({
        userId: z.string().optional(),
        inline: z
          .object({
            name: z.string().optional(),
            email: z.string().optional(),
            phone: z.string().optional(),
            discord: z.string().optional(),
          })
          .optional(),
        title: z.string().optional(),
        isRepresentative: z.boolean().default(true),
      })
    )
    .optional(),
});

export type ClubData = z.infer<typeof ClubDataSchema>;
export const ClubSchema = IdentifiableSchema.extend(ClubDataSchema.shape);
export type Club = z.infer<typeof ClubSchema>;
