import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { useNexusFieldContext } from "./NexusForm";
import { Field } from "@/components/ui/field";

export type NexusCheckboxFieldProps = {
  children?: React.ReactNode;
  helperText?: string;
  required?: boolean;
};

const NexusCheckboxField: React.FC<NexusCheckboxFieldProps> = ({
  children,
  helperText,
  required,
}) => {
  const field = useNexusFieldContext<boolean>();
  return (
    <Field helperText={helperText} required={required}>
      <Checkbox
        checked={!!field.state.value}
        onCheckedChange={(e) => field.handleChange(!!e.checked)}
        onBlur={field.handleBlur}
      >
        {children}
      </Checkbox>
    </Field>
  );
};

export default NexusCheckboxField;
