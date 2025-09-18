import { User } from "@/types/nexus";
import { Card, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";

type UserCardProps = {
  user: User
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card.Root>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Stack>
            <Icon color="purple.500" >
                <MdEmail />
            </Icon>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default UserCard;
