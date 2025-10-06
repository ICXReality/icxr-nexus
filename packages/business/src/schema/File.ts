import z from "zod";

export const FileUploadSchema = z.object({
  fileName: z.string(),
  contentType: z.string(),
  size: z.number(),
});

export type FileUpload = z.infer<typeof FileUploadSchema>;

export const FileUploadResponseSchema = z.object({
  key: z.string(),
  url: z.string(),
});

export type FileUploadResponse = z.infer<typeof FileUploadResponseSchema>;
