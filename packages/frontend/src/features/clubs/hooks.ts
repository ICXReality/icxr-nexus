import { useTRPC } from "@/util/trpc";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useClubs() {
  const trpc = useTRPC();
  return useQuery(trpc.clubs.getClubs.queryOptions());
}

export function useUserClubApplications() {
  const trpc = useTRPC();
  return useQuery(trpc.clubs.applications.getUserApplications.queryOptions());
}

export function useCreateClubApplicationMutation() {
  const tRPC = useTRPC();
  const queryClient = useQueryClient();
  return useMutation({
    ...tRPC.clubs.applications.createClubApplication.mutationOptions(),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: tRPC.clubs.applications.getUserApplications.queryKey(),
      }),
  });
}
