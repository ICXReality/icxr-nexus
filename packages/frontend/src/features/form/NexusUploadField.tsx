import React from "react";
import { useNexusFieldContext } from "./NexusForm";
import { Field } from "@/components/ui/field";
import { Box, Button, FileUpload, Icon } from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi";
import { LuUpload } from "react-icons/lu";

export type NexusUploadFieldProps = {
  label?: string;
  helperText?: string;
  required?: boolean;
  accept?: string;
  multiple?: boolean;
};

const NexusUploadField: React.FC<NexusUploadFieldProps> = ({
  label,
  helperText,
  required,
  accept,
  multiple,
}) => {
  const field = useNexusFieldContext<File | File[] | null>();
  return (
    <Field label={label} helperText={helperText} required={required}>
      <FileUpload.Root maxW="xl" alignItems="stretch" maxFiles={10}>
        <FileUpload.HiddenInput
          accept={accept}
          multiple={multiple}
          onChange={(e) => {
            const files = e.target.files;
            if (!files) return field.handleChange(null);
            if (multiple) {
              field.handleChange(Array.from(files));
            } else {
              field.handleChange(files[0] ?? null);
            }
          }}
          onBlur={field.handleBlur}
        />
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
      </FileUpload.Root>
    </Field>
  );
};

export default NexusUploadField;
