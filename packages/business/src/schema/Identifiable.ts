import z from "zod";

export const IdentifiableSchema = z.object({
  id: z.uuid(),
});

export type Identifiable = z.infer<typeof IdentifiableSchema>;
