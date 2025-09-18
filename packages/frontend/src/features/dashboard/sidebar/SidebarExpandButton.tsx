import { IconButton } from "@chakra-ui/react";
import React, { memo } from "react";
import { MdMenu } from "react-icons/md";

type SidebarExpandButtonProps = {
  expanded?: boolean;
  onClick?: () => void;
};

const SidebarExpandButton: React.FC<SidebarExpandButtonProps> = memo(
  ({ expanded, onClick }) => {
    return (
      <IconButton
        variant={expanded ? "solid" : "ghost"}
        onClick={onClick}
        color="white"
      >
        <MdMenu />
      </IconButton>
    );
  }
);

export default SidebarExpandButton;
