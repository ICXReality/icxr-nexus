import { Icon } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type IconContentProps = {
  icon: IconType;
  color?: string;
  children: ReactNode;
};

const IconContent: React.FC<IconContentProps> = ({ icon, color, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5em",
      }}
    >
      <Icon color={color ?? "colorPalette.500"}>{icon({})}</Icon>
      {children}
    </div>
  );
};

export default IconContent;
