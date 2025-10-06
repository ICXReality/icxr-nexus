import { NexusContext } from '@icxr-nexus/business/dist/types/context'
import { createClubsContext } from './clubs'
import { Payload } from 'payload'
import { createUserContext } from './user'
import { createFilesContext } from './files'

export type PayloadNexusRequestContext = {
  payload: Payload
  req: Request
  headers: Headers
}

export function createPayloadNexus(ctx: PayloadNexusRequestContext): NexusContext {
  return {
    user: createUserContext(ctx),
    clubs: createClubsContext(ctx),
    files: createFilesContext(ctx),
  }
}
