import React from "react";
import { useUser } from "./hooks";
import LogOutButton from "./LogOutButton";
import SignInButton from "./SignInButton";

type ProfileButtonProps = {};

const ProfileButton: React.FC<ProfileButtonProps> = ({}) => {
  const user = useUser();

  return <>{user.data ? <LogOutButton /> : <SignInButton />}</>;
};

export default React.memo(ProfileButton);
