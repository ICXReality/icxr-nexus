import { Club, User } from "@/types/nexus";

export const ExampleUser: User = {
  id: "sample-user",
  name: "John Appleseed",
  email: "john_appleseed@example.com",
};

export const ExampleClub1: Club = {
  id: "sample-club1",
  name: "XR Club",
  status: "active",
  website: "https://xr.umd.edu",
  timeZone: "America/New_York",
  email: "umd.xr.club@gmail.com",
  branding: {},
  university: {
    name: "University of Maryland: College Park",
  },
  officers: [
    { user: ExampleUser, title: "President" },
    { user: ExampleUser, title: "Vice-President" },
  ],
};

export const ExampleClub2: Club = {
  id: "sample-club2",
  name: "StanfordXR",
  status: "active",
  website: "https://www.stanfordxr.org/",
  timeZone: "America/Los_Angeles",
  branding: {},
  university: {
    name: "Stanford University",
  },
  officers: [
    { user: ExampleUser, title: "President" },
    { user: ExampleUser, title: "Vice-President" },
  ],
};

export const ExampleClub3: Club = {
  id: "sample-club3",
  name: "UoA VR Club",
  status: "active",
  website: "https://auckland.campuslabs.com/engage/organization/vrclub",
  timeZone: "Pacific/Auckland",
  email: "uoa.vrclub@gmail.com",
  branding: {},
  university: {
    name: "University of Auckland",
  },
  officers: [
    { user: ExampleUser, title: "President" },
    { user: ExampleUser, title: "Vice-President" },
  ],
};

export const ExampleClubs: Club[] = [ExampleClub1, ExampleClub2, ExampleClub3];
