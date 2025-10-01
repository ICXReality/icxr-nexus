import { Button } from "@chakra-ui/react";
import React, { memo } from "react";
import { MdMenu } from "react-icons/md";

type SidebarExpandButtonProps = {
  expanded?: boolean;
  onClick?: () => void;
};

const SidebarExpandButton: React.FC<SidebarExpandButtonProps> = memo(
  ({ expanded, onClick }) => {
    return (
      <Button onClick={onClick} variant={expanded ? "solid" : "ghost"}>
        <MdMenu />
      </Button>
    );
  }
);

export default SidebarExpandButton;
