## Types

### Club

A club is a official student member organization recognized by ICXR.

```ts
type Club = {
  id: string;
  status: "inactive" | "active";
  name: string;
  email: string | undefined;
  website: string | undefined;
  links: {
    id: string;
    url: string;
    title: string | undefined;
  }[];
  tags: string[];
  university: University;
  description: string | undefined;
  officers: {
    id: string;
    title: string;
    isRepresentative: boolean;
    contact:
      | User
      | {
          name: string;
          email: string;
          phoneNumber: string;
          discord: string;
        };
  }[];
  branding: Branding | undefined;
};
```

### Club Application

A club application is a request to onboard a club into ICXR pending review from
the ICXR exec board.

```ts
type ClubApplication = {
  id: string;
  author: User;
  status: "open" | "accepted" | "denied";
  submissionTime: string; // datetime
  resolutionReason: string | undefined;
  resolutionTime: string | undefined;
  comments: {
    id: string;
    time: string; // datetime;
    message: string;
    author: User | null; // null indicates general message updates
  }[];
  club: {
    name: string;
    description: string;
    email: string | undefined;
    website: string | undefined;
    links: {
      id: string;
      url: string;
      title: string | undefined;
    };
    branding: Branding;
    university: {
      name: string;
      url: string;
    };
    officers: {
      id: string;
      title: string;
      isRepresentative: boolean;
      contact:
        | User
        | {
            name: string;
            email: string;
            phoneNumber: string;
            discord: string;
          };
    }[];
  };
};
```

### University

A university represents some academic institution that exists separate of the clubs
that apply under it.

```ts
type University = {
  id: string;
  name: string;
  website: string;
  location: [number, number] | undefined;
  timezone: string | undefined;
  branding: Branding | undefined;
};
```

### User

A user represents some member on Nexus.

```ts
type User = {
  id: string;
  name: string;
  email: string;
  discord: string | undefined;
};
```

### Misc. Types

#### Branding

```ts
type Branding = {
  logos: {
    icon: string | undefined;
    banner: string | undefined;
  };
  colors: {
    primary: string | undefined;
    secondary: string | undefined;
  };
};
```

## Queries

### Get Club Cards

```ts
type Input = {};

type Output = {
  clubs: {
    name: string;
    branding: Branding;
    university: {
      name: string;
      branding: Branding;
    };
    tags: string[];
    links: {
      title: string | undefined;
      url: string;
    }[];
    website: string | undefined;
    email: string | undefined;
    timezone: string | undefined;
  }[];
};
```
