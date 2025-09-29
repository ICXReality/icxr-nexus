import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import NexusCheckboxField from "./NexusCheckboxField";
import NexusColorPicker from "./NexusColorPicker";
import NexusTextArea from "./NexusTextArea";
import NexusTextField from "./NexusTextField";
import NexusUploadField from "./NexusUploadField";
import NexusSubmitButton from "./NexusSubmitButton";
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
  formComponents: {
    SubmitButton: NexusSubmitButton,
  },
  fieldContext,
  formContext,
});
