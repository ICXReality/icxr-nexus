import { IconButton } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { MdLogout } from "react-icons/md";
import { useLogOut } from "./hooks";

type LogOutButtonProps = {};

const LogOutButton: React.FC<LogOutButtonProps> = ({}) => {
  const logOut = useLogOut();

  const onLogOut = useCallback(() => {
    logOut.mutate();
  }, [logOut]);

  return (
    <IconButton variant={"ghost"} onClick={onLogOut}>
      <MdLogout />
    </IconButton>
  );
};

export default React.memo(LogOutButton);
