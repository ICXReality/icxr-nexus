import { Box, Card, For, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import { useClubs, useUserClubApplications } from "../hooks";
import ClubApplicationCard from "./ClubApplicationCard";
import ClubCard from "./ClubCard";

type ClubPageProps = {};

const ClubPage: React.FC<ClubPageProps> = ({}) => {
  const clubs = useClubs();
  const applications = useUserClubApplications();
  return (
    <Stack>
      <ClubApplicationCard />
      <Stack>
        <For each={applications.data}>
          {(application) => (
            <Card.Root>
              <Card.Header>
                <Card.Title>{application.name}</Card.Title>
              </Card.Header>
            </Card.Root>
          )}
        </For>
      </Stack>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <For each={clubs.data}>{(club) => <ClubCard club={club} />}</For>
      </Grid>
    </Stack>
  );
};

export default ClubPage;
