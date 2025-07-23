import type { CollectionConfig } from 'payload'

export const University: CollectionConfig = {
  slug: 'universities',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'location',
      type: 'point',
    },
  ],
}
