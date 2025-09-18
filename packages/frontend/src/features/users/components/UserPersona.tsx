import { Avatar } from "@/components/ui/avatar";
import { User } from "@/types/nexus";
import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

type UserPersonaProps = {
  user: User;
};

const UserPersona: React.FC<UserPersonaProps> = ({ user }) => {
  return (
    <HStack>
      <Avatar size={"xs"} />
      <Stack>
        <Text fontWeight="medium">{user.name}</Text>
      </Stack>
    </HStack>
  );
};

export default UserPersona;
