import { useTRPC } from "@/util/trpc";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useInvalidateUserQueriesMutation() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  let dependentQueries = [
    trpc.clubs.applications.getUserApplications.queryKey(),
    trpc.auth.me.queryKey(),
  ];

  return () => {
    dependentQueries.forEach((queryKey) => {
      queryClient.invalidateQueries({ queryKey });
    });
  };
}

export function useUser() {
  const trpc = useTRPC();
  return useQuery(trpc.auth.me.queryOptions());
}

export function useLogIn() {
  const trpc = useTRPC();
  const invalidate = useInvalidateUserQueriesMutation();
  return useMutation({
    ...trpc.auth.logIn.mutationOptions(),
    onSuccess: invalidate,
  });
}

export function useLogOut() {
  const trpc = useTRPC();
  const invalidate = useInvalidateUserQueriesMutation();
  return useMutation({
    ...trpc.auth.logOut.mutationOptions(),
    onSuccess: invalidate,
  });
}

export function useRegisterNewUser() {
  const trpc = useTRPC();
  const invalidate = useInvalidateUserQueriesMutation();
  return useMutation({
    ...trpc.auth.registerNewUser.mutationOptions(),
    onSuccess: invalidate,
  });
}
