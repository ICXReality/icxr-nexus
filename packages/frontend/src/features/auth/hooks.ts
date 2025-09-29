import { useTRPC } from "@/util/trpc";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useUser() {
  const trpc = useTRPC();
  return useQuery(trpc.auth.me.queryOptions());
}

export function useLogIn() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation({
    ...trpc.auth.logIn.mutationOptions(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: trpc.auth.me.queryKey(),
      });
    },
  });
}

export function useLogOut() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation({
    ...trpc.auth.logOut.mutationOptions(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: trpc.auth.me.queryKey(),
      });
    },
  });
}

export function useRegisterNewUser() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation({
    ...trpc.auth.registerNewUser.mutationOptions(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: trpc.auth.me.queryKey(),
      });
    },
  });
}
