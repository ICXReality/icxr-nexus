import { useDots } from "@/util/dots";
import { Box } from "@chakra-ui/react";
import React from "react";

type ICXRBackgroundProps = {
  children?: React.ReactNode;
};

const ICXRBackground: React.FC<ICXRBackgroundProps> = ({ children }) => {
  const dots = useDots();
  return (
    <Box minHeight="100vh" {...dots}>
      {children}
    </Box>
  );
};

export default ICXRBackground;
