import React from "react";
import DashboardOverlay from "./DashboardOverlay";
import { Box, Flex } from "@chakra-ui/react";
import { useDots } from "../../util/dots";

type DashboardProps = {
  children?: React.ReactNode;
};

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const dots = useDots();
  return (
    <>
      <DashboardOverlay />
      <Flex
        paddingTop="96px"
        paddingLeft={"96px"}
        paddingRight={"96px"}
        paddingBottom={"64px"}
        minHeight={"100vh"}
        justifyContent={"center"}
        {...dots}
      >
        <Box maxWidth={"80em"} flex={1}>
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default React.memo(Dashboard);
