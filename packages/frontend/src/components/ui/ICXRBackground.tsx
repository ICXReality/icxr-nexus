import { Box } from "@chakra-ui/react";
import React from "react";

type ICXRBackgroundProps = {
  children?: React.ReactNode;
};

const Background =
  "linear-gradient(135deg, rgba(110,236,192,1) 0%, rgba(64,65,222,1) 50%, rgba(207,65,246,1) 100%);";

const ICXRBackground: React.FC<ICXRBackgroundProps> = ({ children }) => {
  return (
    <Box minHeight="100vh" background={Background}>
      {children}
    </Box>
  );
};

export default ICXRBackground;
