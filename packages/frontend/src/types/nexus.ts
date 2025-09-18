export type User = {
    id: string,
    name: string,
    email: string,
    discordId?: string,
    phoneNumber?: string,
    social?: Record<string, string>,
    profilePictureUrl?: string
}

export type EventStatus = "approved" | "pending" | "draft"

export type Event = {
    id: string,
    status: EventStatus,
    name: string,
    startDate: Date,
    endDate: Date,
    location: {
        irl?: string,
        online?: string
    },
    description: string,
    tags: string[],
    thumbnailUrl?: string,
    organizers: {
        clubs: string[],
        users: string[]
    }
}

export type ClubStatus = "active" | "inactive" | "disbanded";

export type ClubOfficer = {
    user: User,
    title: string
}

export type Club = {
    id: string,
    name: string,
    status: ClubStatus,
    website?: string,
    email?: string,
    timeZone?: string,
    branding: {
        logoUrl?: string,
        color?: string
    },
    university?: {
        name: string,
        logoUrl?: string,
        location?: {
            lat: number,
            lon: number
        }
    },
    officers: ClubOfficer[]
}