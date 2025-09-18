import { Endpoint } from 'payload'

export const ClubApplyEndpoint: Endpoint = {
  path: '/apply',
  method: 'post',
  handler: async (req) => {
    return new Response()
  },
}
