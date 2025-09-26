import { NexusContext } from '@icxr-nexus/business/dist/types/context'
import { createClubsContext } from './clubs'
import { Payload } from 'payload'

export function createPayloadNexusContext(payload: Payload): NexusContext {
  return {
    clubs: createClubsContext(payload),
  }
}
