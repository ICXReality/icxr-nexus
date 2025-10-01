import { For, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import { useClubs } from "../hooks";
import ClubApplicationCard from "./ClubApplicationCard";
import ClubCard from "./ClubCard";

type ClubPageProps = {};

const ClubPage: React.FC<ClubPageProps> = ({}) => {
  const clubs = useClubs();
  return (
    <Stack>
      <ClubApplicationCard />
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <For each={clubs.data}>{(club) => <ClubCard club={club} />}</For>
      </Grid>
    </Stack>
  );
};

export default ClubPage;
