import type { CollectionConfig } from 'payload'
import { createBrandingFields } from '@/util/branding'

export const ClubApplications: CollectionConfig = {
  slug: 'club-applications',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'applicant',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'university',
      type: 'group',
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
      ],
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
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          type: 'text',
          name: 'tag',
          required: true,
        },
      ],
    },
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
    ...createBrandingFields(),
    {
      name: 'memberSince',
      type: 'date',
    },
  ],
  versions: true,
  admin: {
    useAsTitle: 'name',
    group: 'ICXR',
  },
}
