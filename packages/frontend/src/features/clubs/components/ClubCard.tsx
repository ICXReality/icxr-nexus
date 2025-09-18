import { Avatar } from "@/components/ui/avatar";
import IconContent from "@/components/ui/IconContent";
import Persona from "@/components/ui/Persona";
import TimezoneTag from "@/components/ui/TimezoneTag";
import { Club } from "@/types/nexus";
import { Box, Card, For, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";

type ClubCardProps = {
  club: Club;
};

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  return (
    <Card.Root>
      <Card.Header>
        <HStack
          gap="4"
          justifyContent="space-between"
          alignItems={"flex-start"}
        >
          <Stack gap="0" alignItems={"flex-start"}>
            <Card.Title>{club.name}</Card.Title>
            <Card.Description>{club.university?.name}</Card.Description>
            {club.timeZone ? (
              <Box marginTop="1">
                <TimezoneTag timeZone={club.timeZone} />
              </Box>
            ) : null}
          </Stack>
          <Avatar size="xl" />
        </HStack>
      </Card.Header>
      <Card.Body>
        <Stack gap="6">
          <Stack gap="0">
            {club.email ? (
              <IconContent icon={MdEmail} color={club.branding.color}>
                <a href={`mailto:${club.email}`}>{club.email}</a>
              </IconContent>
            ) : null}
            {club.website ? (
              <IconContent icon={SlGlobe} color={club.branding.color}>
                {
                  <a target="_blank" href={club.website}>
                    {new URL(club.website).hostname}
                  </a>
                }
              </IconContent>
            ) : null}
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <HStack gap="8">
          <For each={club.officers}>
            {(officer) => (
              <Persona name={officer.user.name} title={officer.title} />
            )}
          </For>
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
};

export default ClubCard;
