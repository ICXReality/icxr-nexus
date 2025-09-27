import z from "zod";
import { IdentifiableSchema } from "./Identifiable";

export const UniversityDataSchema = z.object({
  name: z.string(),
  website: z.url().optional(),
  location: z.tuple([z.number(), z.number()]).optional(), //z.array(z.number()).length(2).optional(), // GeoJSON Point [longitude, latitude]
  timeZone: z.string().optional(),
});

export type UniversityData = z.infer<typeof UniversityDataSchema>;
export const UniversitySchema = IdentifiableSchema.extend(
  UniversityDataSchema.shape
);
export type University = z.infer<typeof UniversitySchema>;
