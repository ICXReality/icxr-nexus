import { ExampleClubs } from "@/mocks/example";
import { Grid, For, Stack } from "@chakra-ui/react";
import React from "react";
import ClubCard from "./ClubCard";
import ClubApplicationCard from "./ClubApplicationCard";

type ClubPageProps = {};

const ClubPage: React.FC<ClubPageProps> = ({}) => {
  return (
    <Stack>
      <ClubApplicationCard />
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <For each={ExampleClubs}>{(club) => <ClubCard club={club} />}</For>
      </Grid>
    </Stack>
  );
};

export default ClubPage;
