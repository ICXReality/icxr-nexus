import { Button, Card } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "@tanstack/react-router";
import { IcxrGradient } from "@/util/gradient";

type ClubApplicationCardProps = {};

const ClubApplicationCard: React.FC<ClubApplicationCardProps> = ({}) => {
  const router = useRouter();
  return (
    <Card.Root
      borderColor="transparent"
      overflow={"hidden"}
      size="lg"
      _before={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        content: '""',
        borderRadius: "inherit",
        border: "2px solid transparent",
        background: IcxrGradient + " border-box",
        mask: "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
        maskComposite: "exclude",
        pointerEvents: "none",
      }}
    >
      <Card.Header>
        <Card.Title fontSize={"4xl"}>Join us.</Card.Title>
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
