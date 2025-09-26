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
          await trpc.clubs.register.query({
            name: "Test Club",
            website: "https://test.com",
          })
        )
      }
    >
      Fetch
    </Button>
  );
}
