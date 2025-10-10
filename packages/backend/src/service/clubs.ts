import { Club as PayloadClub, ClubApplication as PayloadClubApplication } from '@/payload-types'
import { PayloadCRUD } from '@/util/payload-crud'
import {
  Club as NexusClub,
  ClubApplication as NexusClubApplication,
} from '@icxr-nexus/business/dist/schema/Club'
import { NexusClubsContext } from '@icxr-nexus/business/dist/types/context/clubs'
import { DeepPartial } from '@icxr-nexus/business/dist/types/crud'
import { PayloadNexusRequestContext } from './nexus'
import { RequiredDataFromCollectionSlug } from 'payload'

function clubToPayload(
  nexusClub: DeepPartial<NexusClub>,
): DeepPartial<Omit<PayloadClub, 'createdAt' | 'id' | 'updatedAt'>> {
  // Map NexusClub fields to PayloadClub fields (map universityId to university)
  return {
    name: nexusClub?.name,
    status: nexusClub.status,
    website: nexusClub.website,
    email: nexusClub.email,
    university: nexusClub.universityId, // map universityId to university
    description: nexusClub.description,
    links: nexusClub.links?.map((link) => ({ url: link })) || [],
    officers: undefined,
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

function payloadToClubApplication(
  payloadClubApplication: PayloadClubApplication,
): NexusClubApplication {
  return {
    applicantId: payloadClubApplication.applicant as string,
    name: payloadClubApplication.name,
    email: payloadClubApplication.email ?? undefined,
    website: payloadClubApplication.website ?? undefined,
    description: payloadClubApplication.description ?? undefined,
    university: {
      name: payloadClubApplication.university.name,
      website: payloadClubApplication.university.website ?? undefined,
    },
    links: payloadClubApplication.links?.map((link) => link.url) || [],
    tags: payloadClubApplication.tags?.map((tag) => tag.tag) || [],
  }
}

function clubApplicationToPayload(
  nexusClubApplication: DeepPartial<NexusClubApplication>,
): DeepPartial<RequiredDataFromCollectionSlug<'club-applications'>> {
  return {
    applicant: nexusClubApplication.applicantId,
    name: nexusClubApplication.name,
    email: nexusClubApplication.email,
    website: nexusClubApplication.website,
    description: nexusClubApplication.description,
    university: {
      name: nexusClubApplication.university?.name,
      website: nexusClubApplication.university?.website,
    },
    links: nexusClubApplication.links?.map((link) => ({ url: link })) || [],
    tags: nexusClubApplication.tags?.map((tag) => ({ tag })) || [],
  }
}

export function createClubsContext({ payload }: PayloadNexusRequestContext): NexusClubsContext {
  return {
    getClubs: async () => {
      let payloadClubs = await payload.find({
        collection: 'clubs',
        limit: 100, // Adjust limit as needed
      })
      let nexusClubs = payloadClubs.docs.map(payloadToClub)
      return nexusClubs
    },
    crud: new PayloadCRUD(payload, 'clubs', payloadToClub, clubToPayload),
    applications: {
      crud: new PayloadCRUD(
        payload,
        'club-applications',
        payloadToClubApplication,
        clubApplicationToPayload,
      ),
      getApplicationsForUser: async (userId: string) => {
        let payloadClubApplications = await payload.find({
          collection: 'club-applications',
          where: { applicant: { equals: userId } },
          limit: 100, // Adjust limit as needed,
          depth: 0,
        })
        return payloadClubApplications.docs.map(payloadToClubApplication)
      },
    },
  }
}
