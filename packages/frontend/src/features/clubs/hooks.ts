import { useTRPC } from "@/util/trpc";
import { useQuery } from "@tanstack/react-query";

export function useClubs() {
  const trpc = useTRPC();
  return useQuery(trpc.clubs.getClubs.queryOptions());
}
