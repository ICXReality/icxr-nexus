import type { CollectionConfig } from 'payload'
import { createBrandingFields } from '@/util/branding'
import { ClubApplyEndpoint } from '@/endpoints/Clubs/apply'

export const Clubs: CollectionConfig = {
  slug: 'clubs',
  access: {
    read: () => true,
  },
  endpoints: [ClubApplyEndpoint],
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
          type: 'group',
          name: 'inline',
          fields: [
            {
              type: 'text',
              name: 'name',
            },
            {
              type: 'email',
              name: 'email',
            },
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'discord',
              type: 'text',
            },
          ],
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
