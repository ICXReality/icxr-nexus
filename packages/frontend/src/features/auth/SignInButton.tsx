import { Button, ButtonProps } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
import React, { useCallback } from "react";
import { MdLogin } from "react-icons/md";

type SignInButtonProps = Omit<ButtonProps, "onClick">;

const SignInButton: React.FC<SignInButtonProps> = ({}) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate({ to: "/login" });
  }, [navigate]);
  return (
    <Button onClick={onClick}>
      <MdLogin /> Sign in
    </Button>
  );
};

export default React.memo(SignInButton);
