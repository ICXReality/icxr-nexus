import { Button, Card } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "@tanstack/react-router";

type ClubApplicationCardProps = {};

const ClubApplicationCard: React.FC<ClubApplicationCardProps> = ({}) => {
  const router = useRouter();
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Bring your XR Club to ICXR!</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Description>
          Don't see your club listed here? Apply for your club to join ICXR as a
          member club!
        </Card.Description>
      </Card.Body>

      <Card.Footer>
        <Button onClick={() => router.navigate({ to: "/clubs/apply" })}>
          Apply
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ClubApplicationCard;
