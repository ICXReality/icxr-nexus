import { z } from "zod";
import { IdentifiableSchema } from "./Identifiable";

export const ClubOfficersSchema = z.array(
  z.object({
    user: z.union([
      z.object({ nexusUserId: z.string() }),
      z.object({
        inline: z.object({
          name: z.string().optional(),
          email: z.string().optional(),
          phone: z.string().optional(),
          discord: z.string().optional(),
        }),
      }),
    ]),
    title: z.string(),
    isRepresentative: z.boolean().default(true),
  })
);

export const ClubMetadataSchema = z.object({
  name: z.string(),
  memberSince: z.date().optional(),
  website: z.string().optional(),
  email: z.string().optional(),
  description: z.string().optional(),
  links: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  officers: ClubOfficersSchema.optional(),
});

export const ClubNexusMetadataSchema = z.object({
  status: z
    .enum(["inactive", "frozen", "pending", "active"])
    .default("inactive"),
});

const ClubDataSchema = z.object({
  name: z.string(),
  status: z
    .enum(["inactive", "frozen", "pending", "active"])
    .default("inactive"),
  website: z.string().optional(),
  email: z.string().optional(),
  universityId: z.string().optional(),
  description: z.string().optional(),
  links: z.array(z.string()).optional(),
});

export const ClubApplicationRequestSchema = ClubMetadataSchema.extend({
  university: z.object({
    name: z.string(),
    website: z.url().optional(),
  }),
  logo: z.string().optional(),
});

export type ClubData = z.infer<typeof ClubDataSchema>;
export const ClubSchema = IdentifiableSchema.extend(ClubDataSchema.shape);
export type Club = z.infer<typeof ClubSchema>;
