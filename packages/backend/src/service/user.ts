import { User as PayloadUser } from '@/payload-types'
import { User as NexusUser } from '@icxr-nexus/business/dist/schema/User'
import { NexusContext } from '@icxr-nexus/business/dist/types/context'
import { PayloadNexusRequestContext } from './nexus'
import { login } from '@payloadcms/next/auth'
import { logout } from '@payloadcms/next/auth'
import { headers as getHeaders } from 'next/headers'
import config from '@payload-config'

function payloadUserToNexusUser(payloadUser: PayloadUser): NexusUser {
  return {
    id: payloadUser.id,
    email: payloadUser.email,
    name: payloadUser.name ?? undefined,
    discordId: payloadUser.discordId ?? undefined,
    phoneNumber: payloadUser.phoneNumber ?? undefined,
    verified: payloadUser.verified ?? false,
  }
}

export function createUserContext({
  req,
  payload,
  headers,
}: PayloadNexusRequestContext): NexusContext['user'] {
  return {
    logIn: async (logIn) => {
      await login({
        config,
        collection: 'users',
        email: logIn.email,
        password: logIn.password,
      })
    },
    logOut: async () => {
      await logout({ config, allSessions: true })
    },
    registerNewUser: async (newUser) => {
      await payload.create({
        collection: 'users',
        data: newUser,
      })

      await login({
        config,
        collection: 'users',
        email: newUser.email,
        password: newUser.password,
      })
    },
    getCurrentUser: async () => {
      const headers = await getHeaders()
      const { user } = await payload.auth({ headers })

      if (user) {
        return payloadUserToNexusUser(user)
      }

      return null
    },
  }
}
