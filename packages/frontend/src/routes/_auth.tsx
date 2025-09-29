import ICXRBackground from "@/components/ui/ICXRBackground";
import { Container, Flex } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ICXRBackground>
      <Container>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={"100vh"}
        >
          <Outlet />
        </Flex>
      </Container>
    </ICXRBackground>
  );
}
