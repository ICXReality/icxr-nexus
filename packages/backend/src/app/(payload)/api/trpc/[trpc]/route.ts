import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@icxr-nexus/business'

async function handler(req: Request) {
  let response = await fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  })

  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')

  return response
}
export { handler as GET, handler as POST }
