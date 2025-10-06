import { PresignedMediaEndpoint } from '@/endpoints/media/presigned'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  endpoints: [PresignedMediaEndpoint],
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'key',
      type: 'text',
      required: false,
      index: true,
    },
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
  ],
  upload: true,
}
