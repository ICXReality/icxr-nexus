import ICXRBackground from "@/components/ui/ICXRBackground";
import Login from "@/features/auth/Login";
import { Container, Flex } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
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
          <Login />
        </Flex>
      </Container>
    </ICXRBackground>
  );
}
