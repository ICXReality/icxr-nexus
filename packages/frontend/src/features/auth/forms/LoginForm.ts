import { useNexusForm } from "@/features/form/NexusForm";
import type { LogIn } from "@icxr-nexus/business/dist/schema/Auth";

export function useLoginForm(onSubmit: (values: LogIn) => Promise<void>) {
  let defaultValues: LogIn = {
    email: "",
    password: "",
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
          },
        };
      },
    },
  });

  return form;
}
