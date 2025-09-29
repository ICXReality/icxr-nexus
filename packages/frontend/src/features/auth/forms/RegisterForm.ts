import { useNexusForm } from "@/features/form/NexusForm";
import { RegisterNewUserData } from "@icxr-nexus/business/dist/schema/User";

export function useRegisterForm(
  onSubmit: (values: RegisterNewUserData) => Promise<void>
) {
  let defaultValues: RegisterNewUserData = {
    email: "",
    password: "",
    name: "",
  };

  const form = useNexusForm({
    defaultValues,
    onSubmit: (ctx) => onSubmit(ctx.value),
    validators: {
      onChangeAsync: async ({ value }) => {
        return {
          fields: {
            email: value.email.length == 0 ? "Email is required" : null,
            password:
              value.password.length == 0 ? "Password is required" : null,
            name: value.name.length == 0 ? "Name is required" : null,
          },
        };
      },
    },
  });

  return form;
}
