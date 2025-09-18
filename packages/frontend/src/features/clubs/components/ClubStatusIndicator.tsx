import { Card, HStack, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { MdCheck } from "react-icons/md";

type ClubStatusIndicatorProps = {};

const ClubStatusIndicator: React.FC<ClubStatusIndicatorProps> = ({}) => {
  return (
    <Card.Root>
      <Card.Body>
        <HStack justifyContent={"space-between"}>
          <Stack>
            <Card.Title>Your club is in good standing!</Card.Title>
            <Card.Description>
              Thank you for being part of ICXR!
            </Card.Description>
          </Stack>
          <Icon size="2xl" color="green.500">
            <MdCheck />
          </Icon>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default ClubStatusIndicator;
