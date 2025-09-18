import ClubEditView from "@/features/clubs/components/ClubEditView";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/clubs/$id/edit")({
  component: ClubEditView,
});
