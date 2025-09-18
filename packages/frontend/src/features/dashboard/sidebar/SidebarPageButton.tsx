import { IconButton, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { IconType } from "react-icons";

type SidebarPageButtonProps = {
  title: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
};

const SidebarPageButton: React.FC<SidebarPageButtonProps> = memo(
  ({ title, icon: PageIcon, onClick, active }) => {
    return (
      <>
        <IconButton
          variant={active ? "solid" : "ghost"}
          color="white"
          aria-label={title}
          onClick={onClick}
        >
          <PageIcon />
        </IconButton>
        <Text>{title}</Text>
      </>
    );
  }
);

export default SidebarPageButton;
