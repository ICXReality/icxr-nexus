import NotFound from "@/components/ui/NotFound";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <div>Welcome to the dashboard!</div>,
  notFoundComponent: NotFound,
});
