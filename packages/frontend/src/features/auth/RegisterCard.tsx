import ICXRLogo from "@/components/ui/ICXRLogo";
import { Button, Card, Flex, Stack } from "@chakra-ui/react";
import { RegisterNewUserData } from "@icxr-nexus/business/dist/schema/User";
import { useNavigate } from "@tanstack/react-router";
import React, { useCallback } from "react";
import { useRegisterForm } from "./forms/RegisterForm";
import { useRegisterNewUser } from "./hooks";

type RegisterCardProps = {};

const RegisterCard: React.FC<RegisterCardProps> = ({}) => {
  const navigator = useNavigate();
  const register = useRegisterNewUser();
  const onSubmit = useCallback(
    async (values: RegisterNewUserData) => {
      await new Promise((resolve) => {
        register.mutate(values, {
          onSuccess: () => {
            navigator({ to: "/" });
          },
          onSettled: () => resolve(null),
        });
      });
    },
    [register]
  );

  const form = useRegisterForm(onSubmit);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <Card.Root size="lg" width={"512px"}>
        <Card.Header>
          <Flex justifyContent="center" marginTop="4" marginBottom="4">
            <ICXRLogo color={"fg"} maxWidth="256px" />
          </Flex>
        </Card.Header>
        <Card.Body>
          <Stack gap="4">
            <form.AppField name="name">
              {(field) => <field.TextField label="Name" type="text" />}
            </form.AppField>
            <form.AppField name="email">
              {(field) => <field.TextField label="Email" type="email" />}
            </form.AppField>
            <form.AppField name="password">
              {(field) => <field.TextField label="Password" type="password" />}
            </form.AppField>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent={"end"}>
          <form.AppForm>
            <form.SubmitButton>Sign Up</form.SubmitButton>
          </form.AppForm>
        </Card.Footer>
      </Card.Root>
    </form>
  );
};

export default React.memo(RegisterCard);
