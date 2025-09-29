import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/clubs/$id/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/clubs/$id/"!</div>;
}
