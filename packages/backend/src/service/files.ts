import { NexusContext } from '@icxr-nexus/business/dist/types/context'
import { PayloadNexusRequestContext } from './nexus'
import { randomUUID } from 'crypto'

export function createFilesContext(ctx: PayloadNexusRequestContext): NexusContext['files'] {
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
