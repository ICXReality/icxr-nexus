import { useNexusForm } from "@/features/form/NexusForm";
import { parseColor } from "@chakra-ui/react";

type Officer = {
  name: string;
  email: string;
  discord: string;
  title: string;
  isRep: boolean;
};

export function useClubForm() {
  const form = useNexusForm({
    defaultValues: {
      name: "",
      email: "",
      university: "",
      website: "",
      links: [] as string[],
      primaryColor: parseColor("#ffffff"),
      secondaryColor: parseColor("#000000"),
      description: "",
      logo: null as File | null,
      officers: [
        { name: "", email: "", discord: "", title: "", isRep: true },
      ] as Officer[],
      tags: [] as string[],
    },
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return form;
}
