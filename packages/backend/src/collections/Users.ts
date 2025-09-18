import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'phoneNumber',
      type: 'text',
    },
    {
      type: 'text',
      name: 'discordId',
      required: false,
    },
    {
      name: 'admin',
      type: 'group',
      fields: [
        {
          name: 'isAdmin',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
      access: {
        update: ({ req: { user } }) => !!user?.admin?.isAdmin,
      },
    },
  ],
}
