import ClubApplicationPage from "@/features/clubs/apply/ClubApplicationPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/clubs/apply/")({
  component: ClubApplicationPage,
});
