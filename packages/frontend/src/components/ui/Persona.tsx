import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "@/components/ui/avatar";

type PersonaProps = {
  name: string;
  title?: string;
};

const Persona: React.FC<PersonaProps> = ({name, title}) => {
  return (
    <HStack gap="3">
      <Avatar size={"xs"} />
      <Stack gap="0">
        <Text fontWeight="medium">{name}</Text>
        {title ? <Text fontWeight="light">{title}</Text> : null}
      </Stack>
    </HStack>
  );
};

export default Persona;
