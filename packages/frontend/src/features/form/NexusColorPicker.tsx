import { Field } from "@/components/ui/field";
import { Color, ColorPicker, HStack, Portal } from "@chakra-ui/react";
import React from "react";
import { useNexusFieldContext } from "./NexusForm";

export type NexusColorPickerProps = {
  label?: string;
  helperText?: string;
  required?: boolean;
};

const NexusColorPicker: React.FC<NexusColorPickerProps> = ({
  label,
  helperText,
  required,
}) => {
  const field = useNexusFieldContext<Color>();
  return (
    <Field label={label} helperText={helperText} required={required}>
      <ColorPicker.Root
        value={field.state.value}
        format="hsla"
        onValueChange={(e) => field.handleChange(e.value)}
        maxW="200px"
        variant={"subtle"}
      >
        <ColorPicker.HiddenInput />
        <ColorPicker.Control>
          <ColorPicker.Input />
          <ColorPicker.Trigger />
        </ColorPicker.Control>
        <Portal>
          <ColorPicker.Positioner>
            <ColorPicker.Content>
              <ColorPicker.Area />
              <HStack>
                <ColorPicker.EyeDropper size="xs" variant="outline" />
                <ColorPicker.Sliders />
              </HStack>
            </ColorPicker.Content>
          </ColorPicker.Positioner>
        </Portal>
      </ColorPicker.Root>
    </Field>
  );
};

export default NexusColorPicker;
