import { Field } from 'payload'

export function createBrandingFields(): Field[] {
  return [
    {
      type: 'group',
      name: 'branding',
      fields: [
        {
          type: 'upload',
          relationTo: 'media',
          name: 'logo',
        },
        {
          type: 'group',
          name: 'colors',
          fields: [
            {
              type: 'text',
              name: 'primary',
            },
            {
              type: 'text',
              name: 'secondary',
            },
          ],
        },
      ],
    },
  ]
}
