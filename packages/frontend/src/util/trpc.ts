import { createTRPCContext } from "@trpc/tanstack-react-query";
import type { NexusAppRouter } from "@icxr-nexus/business";

export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<NexusAppRouter>();
