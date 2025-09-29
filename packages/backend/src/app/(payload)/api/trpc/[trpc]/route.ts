import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { nexusAppRouter } from '@icxr-nexus/business'
import { createPayloadNexus } from '@/service/nexus'
import { getPayload } from 'payload'
import config from '@payload-config'
import { wrap } from 'module'
import { headers } from 'next/headers'

function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': 'http://localhost:5173',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  }
}

async function handler(req: Request) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: getCorsHeaders(),
    })
  }

  return await fetchRequestHandler({
    endpoint: '/api/trpc',
    router: nexusAppRouter,
    req,
    createContext: async (opts) => {
      let payload = await getPayload({ config })
      return createPayloadNexus({ payload, req, headers: opts.resHeaders })
    },
    responseMeta: () => {
      let headers = new Headers()
      for (let [key, value] of Object.entries(getCorsHeaders())) {
        headers.set(key, value)
      }

      return {
        headers,
      }
    },
  })
}
export { handler as GET, handler as POST, handler as OPTIONS }
