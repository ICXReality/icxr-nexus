import { NexusContext } from '@icxr-nexus/business/dist/types/context'
import { createClubsContext } from './clubs'
import { Payload } from 'payload'
import { createUserContext } from './user'

export type PayloadNexusRequestContext = {
  payload: Payload
  req: Request
  headers: Headers
}

export function createPayloadNexus(ctx: PayloadNexusRequestContext): NexusContext {
  return {
    user: createUserContext(ctx),
    clubs: createClubsContext(ctx),
  }
}
