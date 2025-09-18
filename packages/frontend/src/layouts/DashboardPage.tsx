import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

type ICXRPageProps = {
  title?: string;
  children?: React.ReactNode;
};

const ICXRPage: React.FC<ICXRPageProps> = ({ title, children }) => {
  return (
    <Stack
      width="full"
      maxHeight={"100%"}
      padding="8"
      gap="8"
      overflowY={"auto"}
    >
      <Text fontWeight={"bold"} fontSize={"4xl"}>
        {title}
      </Text>
      {children}
    </Stack>
  );
};

export default ICXRPage;
