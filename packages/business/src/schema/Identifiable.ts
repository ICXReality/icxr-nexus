import z from "zod";

export const IdentifiableSchema = z.object({
  id: z.string(),
});

export type Identifiable = z.infer<typeof IdentifiableSchema>;
