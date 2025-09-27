import trpc from "@/trpc";
import { Button } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/news/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Button
      onClick={async () =>
        console.log(
          await trpc.auth.
        )
      }
    >
      Fetch
    </Button>
  );
}
