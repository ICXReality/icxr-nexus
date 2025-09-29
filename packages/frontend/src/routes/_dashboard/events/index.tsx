import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/events/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/events"!</div>;
}
