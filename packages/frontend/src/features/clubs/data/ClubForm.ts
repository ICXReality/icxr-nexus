import { useNexusForm } from "@/features/form/NexusForm";
import { NexusFile } from "@/features/form/NexusUploadField";
import { parseColor } from "@chakra-ui/react";
import { useCreateClubApplicationMutation } from "../hooks";

type Officer = {
  name: string;
  email: string;
  discord: string;
  title: string;
  isRep: boolean;
};

type UseApplicationFormOptions = {
  onSuccess?: () => void;
};

export function useClubApplicationForm(options?: UseApplicationFormOptions) {
  const createClubApplication = useCreateClubApplicationMutation();

  const form = useNexusForm({
    defaultValues: {
      university: {
        name: "",
        website: "",
      },
      name: "",
      email: "",
      website: "",
      links: [] as string[],
      primaryColor: parseColor("#ffffff"),
      secondaryColor: parseColor("#000000"),
      description: "",
      logo: [] as NexusFile[],
      officers: [
        { name: "", email: "", discord: "", title: "", isRep: true },
      ] as Officer[],
      tags: [] as string[],
    },
    onSubmit: async (details) => {
      const data = details.value;
      console.log("Form submitted with values:", details);

      await createClubApplication.mutateAsync({
        name: data.name,
        email: data.email,
        website: data.website.length > 0 ? data.website : undefined,
        description: data.description,
        links: data.links,
        tags: data.tags,
        logo: data.logo[0]?.uploadKey ?? undefined,
        university: {
          name: data.university.name,
          website:
            data.university.website.length > 0
              ? data.university.website
              : undefined,
        },
        officers: data.officers.map((officer) => ({
          title: officer.title,
          isRepresentative: officer.isRep,
          user: {
            inline: {
              name: officer.name,
              email: officer.email,
              discord: officer.discord,
            },
          },
        })),
      });
    },
  });

  return {
    form,
    ...createClubApplication,
  };
}
