import z from "zod";

export const BrandingSchema = z.object({
  primaryColor: z.string().optional(),
});
