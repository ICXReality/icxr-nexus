import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import ClubForm from "./ClubForm";

type ClubEditViewProps = {};

const ClubEditView: React.FC<ClubEditViewProps> = ({}) => {
  return (
    <Container marginBottom="8">
      <Stack gap="8">
        <ClubForm />
      </Stack>
    </Container>
  );
};

export default ClubEditView;
