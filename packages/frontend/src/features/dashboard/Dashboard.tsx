import { SIDEBAR_PAGES } from "@/app/constants";
import Sidebar from "@/features/dashboard/sidebar/Sidebar";
import DashboardPage from "@/layouts/DashboardPage";
import { Box, HStack } from "@chakra-ui/react";
import React from "react";

type DashboardProps = {
  children?: React.ReactNode;
};

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <HStack
      gap="0"
      alignItems="flex-start"
      justifyContent={"stretch"}
      height="100vh"
      maxHeight={"100vh"}
    >
      <Sidebar pages={SIDEBAR_PAGES} />
      <DashboardPage title="Test">{children}</DashboardPage>
    </HStack>
  );
};

export default Dashboard;
