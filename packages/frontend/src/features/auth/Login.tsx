import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import ICXRLogo from "@/components/ui/ICXRLogo";
import { Button, Card, Flex, Input, Separator, Stack } from "@chakra-ui/react";
import React from "react";
import { FaDiscord } from "react-icons/fa";

type LoginProps = {};

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <Card.Root size="lg" width={"512px"}>
      <Card.Header>
        <Flex justifyContent="center" marginTop="4" marginBottom="4">
          <ICXRLogo color={"black"} maxWidth="256px" />
        </Flex>
      </Card.Header>
      <Card.Body>
        <Stack gap="10">
          <Stack>
            <Button variant="outline">
              <FaDiscord />
              Sign in with Discord
            </Button>
          </Stack>
          <Separator />
          <Stack gap="4">
            <Field label="Email">
              <Input type="email" />
            </Field>
            <Field label="Password">
              <Input type="password" />
            </Field>
            <Flex justify={"space-between"}>
              <Checkbox>Remember me</Checkbox>
              <Button variant="ghost">Forgot your password?</Button>
            </Flex>
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent={"end"}>
        <Button>Log In</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default Login;
