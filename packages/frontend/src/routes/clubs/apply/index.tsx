import ClubApplicationPage from "@/features/clubs/apply/ClubApplicationPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/clubs/apply/")({
  component: ClubApplicationPage,
});
