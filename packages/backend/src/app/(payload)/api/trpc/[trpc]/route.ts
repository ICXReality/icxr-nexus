import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { nexusAppRouter } from '@icxr-nexus/business'
import { createPayloadNexusContext } from '@/service/nexus'
import { getPayload } from 'payload'
import config from '@payload-config'

async function handler(req: Request) {
  let response = await fetchRequestHandler({
    endpoint: '/api/trpc',
    router: nexusAppRouter,
    req,
    createContext: async () => {
      let payload = await getPayload({ config })
      return createPayloadNexusContext(payload)
    },
  })

  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')

  return response
}
export { handler as GET, handler as POST }
