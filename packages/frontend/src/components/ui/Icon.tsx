import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type ThemedIconProps = IconProps & {
  icon: IconType;
};

const Icon: React.FC<ThemedIconProps> = (props) => {
  return (
    <ChakraIcon {...props} color={props.color ?? "colorPalette.500"}>
      {props.icon({})}
    </ChakraIcon>
  );
};

export default Icon;
