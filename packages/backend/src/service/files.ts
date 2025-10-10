import { NexusContext } from '@icxr-nexus/business/dist/types/context'
import { PayloadNexusRequestContext } from './nexus'
import { randomUUID } from 'crypto'
import { NexusFilesContext } from '@icxr-nexus/business/dist/types/files'

export function createFilesContext(ctx: PayloadNexusRequestContext): NexusFilesContext {
  return {
    createUploadUrl: async () => {
      const uuid = randomUUID()
      let url = new URL(`/api/media/presigned`, ctx.req.url)
      url.searchParams.set('key', uuid)

      return {
        key: uuid,
        url: url.toString(),
      }
    },
    validate: async () => {},
    delete: async () => {},
  }
}
