import ICXRSquareLogo from "@/components/ui/ICXRSquareLogo";
import { Button, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import SidebarExpandButton from "./sidebar/SidebarExpandButton";
import ProfileButton from "../auth/ProfileButton";
import { useDots } from "../../util/dots";
import NexusLogo from "@/components/ui/NexusLogo";
import { useNavigate } from "@tanstack/react-router";

type NavigationBarProps = {
  sidebarExpanded?: boolean;
  onSidebarExpandClick?: () => void;
};

const NavigationBar: React.FC<NavigationBarProps> = ({
  sidebarExpanded,
  onSidebarExpandClick,
}) => {
  const navigate = useNavigate();
  return (
    <Flex
      minHeight="64px"
      width="full"
      bgColor={"Window"}
      paddingLeft={"2"}
      paddingRight={"2"}
      justifyContent={"space-between"}
      pointerEvents={"auto"}
      position={"relative"}
      _after={{
        position: "absolute",
        bottom: "-1px",
        left: 0,
        right: 0,
        height: "1px",
        background:
          "linear-gradient(135deg, rgba(110,236,192,1) 0%, rgba(64,65,222,1) 50%, rgba(207,65,246,1) 100%);",
        content: '""',
        zIndex: 200,
      }}
    >
      <HStack gap={"2"}>
        <SidebarExpandButton
          expanded={sidebarExpanded}
          onClick={onSidebarExpandClick}
        />
        <IconButton
          onClick={() => navigate({ to: "/" })}
          variant={"ghost"}
          display={"flex"}
        >
          <NexusLogo height="24px" width="auto" margin="2" />
        </IconButton>
      </HStack>
      <HStack>
        <ProfileButton />
      </HStack>
    </Flex>
  );
};

export default NavigationBar;
