import { Input } from "@chakra-ui/react";
import React from "react";
import { useNexusFieldContext } from "./NexusForm";
import { Field } from "@/components/ui/field";

import type { InputProps } from "@chakra-ui/react";

type NexusTextFieldProps = {
  label?: string;
  helperText?: string;
  required?: boolean;
} & InputProps;

const NexusTextField: React.FC<NexusTextFieldProps> = ({
  label,
  helperText,
  required,
  ...inputProps
}) => {
  const field = useNexusFieldContext<string>();
  return (
    <Field label={label} helperText={helperText} required={required}>
      <Input
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        {...inputProps}
      />
    </Field>
  );
};

export default NexusTextField;
