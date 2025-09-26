import { initTRPC } from "@trpc/server";
import { NexusContext } from "./types/context";

const t = initTRPC.context<NexusContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
