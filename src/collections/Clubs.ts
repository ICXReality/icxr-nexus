import type { CollectionConfig } from 'payload'
import { Users } from './Users'
import { createBrandingFields } from '@/util/branding'

export const Clubs: CollectionConfig = {
  slug: 'clubs',
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
      name: 'status',
      type: 'select',
      options: ['inactive', 'frozen', 'pending', 'active'],
      defaultValue: 'inactive',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'university',
      type: 'relationship',
      relationTo: 'universities',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          type: 'text',
          name: 'url',
          required: true,
        },
      ],
    },
    ...createBrandingFields(),
    {
      name: 'officers',
      type: 'array',
      fields: [
        {
          type: 'relationship',
          relationTo: 'users',
          name: 'user',
        },
        {
          type: 'text',
          name: 'title',
        },
        {
          type: 'checkbox',
          name: 'isRepresentative',
          required: true,
          defaultValue: true,
        },
      ],
    },
  ],
  versions: true,
  admin: {
    useAsTitle: 'name',
    group: 'ICXR',
  },
}
