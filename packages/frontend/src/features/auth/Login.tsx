import { Alert } from "@/components/ui/alert";
import ICXRLogo from "@/components/ui/ICXRLogo";
import { Button, Card, Flex, Separator, Stack } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
import React, { useCallback } from "react";
import { FaDiscord } from "react-icons/fa";
import { useLoginForm } from "./forms/LoginForm";
import { useLogIn } from "./hooks";
import { LogInRequest } from "@icxr-nexus/business/dist/routers/auth/login";
import NexusLogo from "@/components/ui/NexusLogo";

type LogInCardProps = {
  disableDiscord?: boolean;
};

const LogInCard: React.FC<LogInCardProps> = ({ disableDiscord }) => {
  const navigator = useNavigate();
  const logIn = useLogIn();

  const onSubmit = useCallback(
    async (values: LogInRequest) => {
      await new Promise((resolve) => {
        logIn.mutate(values, {
          onSuccess: () => {
            navigator({ to: "/" });
          },
          onSettled: () => resolve(null),
        });
      });
    },
    [logIn]
  );

  const onSignUp = useCallback(() => {
    navigator({ to: "/register" });
  }, [navigator]);

  const form = useLoginForm(onSubmit);

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
            <NexusLogo color={"fg"} maxWidth="350px" />
          </Flex>
        </Card.Header>
        <Card.Body>
          <Stack gap="10">
            {logIn.isError && (
              <Alert status="error" title="Login Failed">
                {logIn.failureReason?.message}
              </Alert>
            )}
            {!disableDiscord && (
              <>
                <Stack>
                  <Button variant="outline">
                    <FaDiscord />
                    Sign in with Discord
                  </Button>
                </Stack>
                <Separator />
              </>
            )}
            <Stack gap="4">
              <form.AppField name="email">
                {(field) => <field.TextField label="Email" type="email" />}
              </form.AppField>
              <form.AppField name="password">
                {(field) => (
                  <field.TextField label="Password" type="password" />
                )}
              </form.AppField>
            </Stack>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent={"end"}>
          <Button variant={"ghost"} onClick={onSignUp}>
            Sign up
          </Button>
          <form.AppForm>
            <form.SubmitButton>Log In</form.SubmitButton>
          </form.AppForm>
        </Card.Footer>
      </Card.Root>
    </form>
  );
};

export default LogInCard;
