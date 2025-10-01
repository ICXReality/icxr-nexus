import { Box, Button, Text, Stack, Icon, Flex } from "@chakra-ui/react";
import React, { memo } from "react";
import { IconType } from "react-icons";

type ExpandableButtonProps = {
  expanded?: boolean;
  title: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
};

const ExpandableButton: React.FC<ExpandableButtonProps> = memo(
  ({ title, icon: PageIcon, onClick, active, expanded }) => {
    return (
      <Button
        variant={active ? "solid" : "ghost"}
        aria-label={title}
        onClick={onClick}
        gap={0}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Icon>
          <PageIcon />
        </Icon>
        <Box
          transition="width 0.25s"
          width={expanded ? "196px" : 0}
          overflow="hidden"
          textAlign="left"
        >
          <Text paddingLeft={"4"}>{title}</Text>
        </Box>
      </Button>
    );
  }
);

export default ExpandableButton;
