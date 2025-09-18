import NotFound from "@/components/ui/NotFound";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Dashboard from "@/features/dashboard/Dashboard";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <Dashboard>
      <Outlet />
    </Dashboard>
  );
}
