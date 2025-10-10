import { FileUpload, FileUploadResponse } from "../../schema/File";

export type NexusFilesContext = {
  createUploadUrl: (params: FileUpload) => Promise<FileUploadResponse>;
  delete: (key: string) => Promise<void>;
  validate: (key: string) => Promise<void>;
};
