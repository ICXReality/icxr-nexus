import { Card, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { MdCheck } from "react-icons/md";

type ClubActivityProps = {
  checked?: boolean;
  onClick?: () => void;
  label: React.ReactNode;
  icon: React.ReactNode;
};

const ClubActivity: React.FC<ClubActivityProps> = ({
  checked,
  onClick,
  label,
  icon,
}) => {
  return (
    <Card.Root
      variant="subtle"
      size={"sm"}
      onClick={onClick}
      bgColor={checked ? "colorPalette.600" : undefined}
      cursor="pointer"
    >
      <Card.Header>
        <Flex justifyContent={"space-between"} alignItems={"flex-start"}>
          <Card.Title>{label}</Card.Title>
          <Icon size={"lg"}>{icon}</Icon>
        </Flex>
      </Card.Header>
      <Card.Body />
      <Card.Footer minHeight={"8"}>
        {checked && (
          <Icon>
            <MdCheck />
          </Icon>
        )}
      </Card.Footer>
    </Card.Root>
  );
};

export default ClubActivity;
