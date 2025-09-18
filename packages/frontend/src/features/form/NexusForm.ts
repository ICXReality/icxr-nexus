import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import NexusCheckboxField from "./NexusCheckboxField";
import NexusColorPicker from "./NexusColorPicker";
import NexusTextArea from "./NexusTextArea";
import NexusTextField from "./NexusTextField";
import NexusUploadField from "./NexusUploadField";
export const {
  fieldContext,
  formContext,
  useFormContext: useNexusFormContext,
  useFieldContext: useNexusFieldContext,
} = createFormHookContexts();

export const { useAppForm: useNexusForm } = createFormHook({
  fieldComponents: {
    TextField: NexusTextField,
    TextArea: NexusTextArea,
    CheckboxField: NexusCheckboxField,
    UploadField: NexusUploadField,
    ColorPicker: NexusColorPicker,
  },
  formComponents: {},
  fieldContext,
  formContext,
});
