import { Field } from "@/components/ui/field";
import { Textarea } from "@chakra-ui/react";
import React from "react";
import { useNexusFieldContext } from "./NexusForm";

type NexusTextAreaProps = {
  label?: string;
  helperText?: string;
  required?: boolean;
};

const NexusTextArea: React.FC<NexusTextAreaProps> = ({
  label,
  helperText,
  required,
}) => {
  const field = useNexusFieldContext<string>();

  return (
    <Field label={label} helperText={helperText} required={required}>
      <Textarea
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
      />
    </Field>
  );
};

export default NexusTextArea;
