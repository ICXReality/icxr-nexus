import { createBrandingFields } from '@/util/branding'
import type { CollectionConfig } from 'payload'

export const Universities: CollectionConfig = {
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
      name: 'shortName',
      type: 'text',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'location',
      type: 'point',
    },
    ...createBrandingFields(),
  ],
  admin: {
    useAsTitle: 'name',
    group: 'ICXR',
  },
}
