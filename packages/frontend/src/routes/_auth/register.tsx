import RegisterCard from "@/features/auth/RegisterCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RegisterCard />;
}
