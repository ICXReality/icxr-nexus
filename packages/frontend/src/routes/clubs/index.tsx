import { createFileRoute } from "@tanstack/react-router";
import ClubPage from "@/features/clubs/components/ClubPage";

export const Route = createFileRoute("/clubs/")({
  component: ClubPage,
});
