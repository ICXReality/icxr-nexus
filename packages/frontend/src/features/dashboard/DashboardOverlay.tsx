import { SIDEBAR_PAGES } from "@/app/constants";
import { Box, Stack } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import NavigationBar from "./NavigationBar";
import Sidebar from "./sidebar/Sidebar";

type DashboardOverlayProps = {};

const DashboardOverlay: React.FC<DashboardOverlayProps> = ({}) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarExpanded((prev) => !prev);
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="docked"
      pointerEvents={"none"}
    >
      <Stack gap="0" alignItems={"flex-start"} minHeight={"100%"}>
        <NavigationBar
          sidebarExpanded={sidebarExpanded}
          onSidebarExpandClick={toggleSidebar}
        />
        <Sidebar sidebarExpanded={sidebarExpanded} pages={SIDEBAR_PAGES} />
      </Stack>
    </Box>
  );
};

export default React.memo(DashboardOverlay);
