import React from "react";
import ICXRBackground from "./ICXRBackground";
import { Container, Flex, Stack, Text } from "@chakra-ui/react";

type NotFoundProps = {};

const NotFound: React.FC<NotFoundProps> = ({}) => {
  return (
    <ICXRBackground>
      <Container>
        <Flex
          minHeight={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
          color="white"
        >
          <Stack alignItems={"center"}>
            <Text textStyle={"7xl"} fontWeight={"bold"}>
              404
            </Text>
            <Text>We couldn't find what you are looking for!</Text>
          </Stack>
        </Flex>
      </Container>
    </ICXRBackground>
  );
};

export default NotFound;
