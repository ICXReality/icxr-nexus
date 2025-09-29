import NotFound from "@/components/ui/NotFound";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/")({
  component: () => <div>Welcome to the dashboard!</div>,
  notFoundComponent: NotFound,
});
