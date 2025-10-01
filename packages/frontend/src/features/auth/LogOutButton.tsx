import { Button, ButtonProps } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { MdLogout } from "react-icons/md";
import { useLogOut } from "./hooks";

type LogOutButtonProps = Omit<ButtonProps, "onClick">;

const LogOutButton: React.FC<LogOutButtonProps> = (props) => {
  const logOut = useLogOut();

  const onClick = useCallback(() => {
    logOut.mutate();
  }, [logOut]);

  return (
    <Button {...props} onClick={onClick}>
      <MdLogout />
      Log out
    </Button>
  );
};

export default React.memo(LogOutButton);
