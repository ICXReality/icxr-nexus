import React from "react";
import ClubForm from "../components/ClubForm";
import { Card } from "@chakra-ui/react";

type ClubApplicatonPageProps = {};

const ClubApplicationPage: React.FC<ClubApplicatonPageProps> = ({}) => {
  return (
    <Card.Root>
      <Card.Body>
        <ClubForm />
      </Card.Body>
    </Card.Root>
  );
};

export default ClubApplicationPage;
