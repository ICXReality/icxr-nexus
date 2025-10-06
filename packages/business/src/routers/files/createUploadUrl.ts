import { FileUploadResponseSchema, FileUploadSchema } from "../../schema/File";
import { publicProcedure } from "../../trpc";

// TODO: make login required
export const createUploadUrl = publicProcedure
  .input(FileUploadSchema)
  .output(FileUploadResponseSchema)
  .mutation(async ({ ctx, input }) => {
    let result = await ctx.files.createUploadUrl(input);
    return result;
  });
