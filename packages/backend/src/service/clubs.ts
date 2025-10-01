import { Club as PayloadClub } from '@/payload-types'
import { Club as NexusClub, ClubData as NexusClubData } from '@icxr-nexus/business/dist/schema/Club'
import { NexusContext } from '@icxr-nexus/business/dist/types/context'
import { PayloadNexusRequestContext } from './nexus'

function clubToPayload(
  nexusClub: NexusClubData,
): Omit<PayloadClub, 'createdAt' | 'id' | 'sizes' | 'updatedAt'> {
  // Map NexusClub fields to PayloadClub fields (map universityId to university)
  return {
    name: nexusClub.name,
    status: nexusClub.status,
    website: nexusClub.website,
    email: nexusClub.email,
    university: nexusClub.universityId, // map universityId to university
    description: nexusClub.description,
    links: nexusClub.links?.map((link) => ({ url: link })) || [],
    officers: nexusClub.officers,
    // Add more fields as needed based on your schema
  }
}

function payloadToClub(payloadClub: PayloadClub): NexusClub {
  // Map PayloadClub fields to NexusClub fields (map university to universityId)
  return {
    id: payloadClub.id,
    name: payloadClub.name,
    status: payloadClub.status,
    website: payloadClub.website,
    email: payloadClub.email,
    universityId: payloadClub.university, // map university to universityId
    description: payloadClub.description,
    links: payloadClub.links,
    officers: payloadClub.officers,
    // Add more fields as needed based on your schema
  } as NexusClub
}

export function createClubsContext({ payload }: PayloadNexusRequestContext): NexusContext['clubs'] {
  return {
    getClubs: async () => {
      let payloadClubs = await payload.find({
        collection: 'clubs',
        limit: 100, // Adjust limit as needed
      })
      let nexusClubs = payloadClubs.docs.map(payloadToClub)
      return nexusClubs
    },
    crud: {
      create: async (club) => {
        let payloadClub = await payload.create({
          collection: 'clubs',
          data: clubToPayload(club),
        })
        let nexusClub = payloadToClub(payloadClub)
        return nexusClub
      },
      find: async (id) => {
        let payloadClub = await payload.findByID({
          collection: 'clubs',
          id: id,
        })
        if (!payloadClub) return null
        let nexusClub = payloadToClub(payloadClub)
        return nexusClub
      },
      update: (() => {}) as any,
      delete: async (id) => {
        await payload.delete({
          collection: 'clubs',
          id: id,
        })
      },
    },
  }
}
