import { router } from "../../trpc";
import { createUploadUrl } from "./createUploadUrl";

export const filesRouter = router({
  createUploadUrl,
});
