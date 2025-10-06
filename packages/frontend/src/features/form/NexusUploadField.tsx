import { Field } from "@/components/ui/field";
import { useTRPC } from "@/util/trpc";
import {
  Box,
  Button,
  FileUpload,
  FileUploadFileAcceptDetails,
  Icon,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { LuUpload } from "react-icons/lu";
import { useNexusFieldContext } from "./NexusForm";
import { useMutation } from "@tanstack/react-query";
import type { FileUploadResponse } from "@icxr-nexus/business/dist/schema/File";

export type NexusFile = {
  uploadKey: string | null;
  file: File;
};

export type NexusUploadFieldProps = {
  label?: string;
  helperText?: string;
  required?: boolean;
  accept?: string;
  maxFiles?: number;
};

const NexusUploadField: React.FC<NexusUploadFieldProps> = ({
  label,
  helperText,
  required,
  accept,
  maxFiles,
}) => {
  const tRPC = useTRPC();
  const createFileUrl = useMutation(
    tRPC.files.createUploadUrl.mutationOptions()
  );
  const field = useNexusFieldContext<NexusFile[]>();

  const onAcceptedFile = useCallback((details: FileUploadFileAcceptDetails) => {
    field.handleChange((prev) =>
      details.files.map((file) => {
        let existing = prev.find((f) => f.file === file);
        createFileUrl.mutate(
          {
            fileName: file.name,
            contentType: file.type,
            size: file.size,
          },
          {
            onSuccess: (data) => onUploadKeyRetrieved(file, data),
          }
        );
        return existing ?? { uploadKey: null, file };
      })
    );
  }, []);

  const onUploadKeyRetrieved = useCallback(
    async (file: File, data: FileUploadResponse) => {
      field.handleChange((prev) =>
        prev.map((f) => (f.file === file ? { uploadKey: data.key, file } : f))
      );

      try {
        const response = await fetch(data.url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });

        if (!response.ok) {
          throw new Error(`Upload failed: ${response.statusText}`);
        }

        console.log("Upload successful");
      } catch (error) {
        console.error("Upload error:", error);

        // Reset upload key on failure
        field.handleChange((prev) =>
          prev.map((f) => (f.file === file ? { uploadKey: null, file } : f))
        );
      }
    },
    []
  );

  console.log(field.state.value);

  return (
    <Field label={label} helperText={helperText} required={required}>
      <FileUpload.Root
        accept={accept}
        maxFiles={maxFiles}
        maxW="xl"
        alignItems="stretch"
        acceptedFiles={field.state.value.map((f) => f.file)}
        onFileAccept={onAcceptedFile}
        required={required}
      >
        <FileUpload.HiddenInput onBlur={field.handleBlur} />
        <FileUpload.Dropzone>
          <Icon size="md" color="fg.muted">
            <LuUpload />
          </Icon>
          <FileUpload.DropzoneContent>
            <Box>Drag and drop files here</Box>
            <Box color="fg.muted">.png, .jpg up to 5MB</Box>
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
        <FileUpload.List />
        <Button onClick={() => field.setValue([])}>test</Button>
      </FileUpload.Root>
    </Field>
  );
};

export default NexusUploadField;
