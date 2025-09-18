import { Button, Card, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaDoorOpen } from "react-icons/fa";

type ClubActionCenterProps = {};

const ClubActionCenter: React.FC<ClubActionCenterProps> = ({}) => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Action Center</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack>
          <HStack justifyContent={"space-between"}>
            <Text color="GrayText" fontWeight={"light"}>
              Report your club as having been disbanded
            </Text>
            <Button colorPalette={"red"}>
              <FaDoorOpen />
              Disband
            </Button>
          </HStack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default ClubActionCenter;
