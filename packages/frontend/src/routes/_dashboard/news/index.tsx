import { useUser } from "@/features/auth/hooks";
import { Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/news/")({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useUser();
  return <Text>You are: {user.data?.name}</Text>;
}
