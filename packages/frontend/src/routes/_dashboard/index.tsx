import NotFound from "@/components/ui/NotFound";
import { Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/")({
  component: () => <Text>Dashboard Home</Text>,
  notFoundComponent: NotFound,
});
