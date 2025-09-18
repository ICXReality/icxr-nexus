import React from "react";
import { Fieldset as ChakraFieldset, Stack } from "@chakra-ui/react";

type FieldsetProps = {
  legend: React.ReactNode;
  helperText?: React.ReactNode;
  children?: React.ReactNode;
};

const Fieldset: React.FC<FieldsetProps> = ({
  legend,
  helperText,
  children,
}) => {
  return (
    <ChakraFieldset.Root>
      <Stack>
        <ChakraFieldset.Legend fontSize={"large"}>{legend}</ChakraFieldset.Legend>
        <ChakraFieldset.HelperText>{helperText}</ChakraFieldset.HelperText>
      </Stack>
      {children}
    </ChakraFieldset.Root>
  );
};

export default Fieldset;
