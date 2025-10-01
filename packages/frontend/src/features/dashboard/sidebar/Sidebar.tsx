import { For, Stack, useRecipe } from "@chakra-ui/react";
import { useRouter, useRouterState } from "@tanstack/react-router";
import React, { memo } from "react";
import ExpandableButton from "./ExpandableButton";
import { SidebarPage } from "./types";
import { dotRecipe, useDots } from "../../../util/dots";

type SidebarProps = {
  sidebarExpanded?: boolean;
  pages: SidebarPage[];
};

function isSidebarPageActive(currentPath: string, pageLink: string): boolean {
  if (pageLink === "/") {
    // Only active on exact root
    return currentPath === "/";
  }
  // Active if currentPath starts with pageLink and next char is / or end
  return (
    currentPath === pageLink ||
    (currentPath.startsWith(pageLink) &&
      ["/", undefined].includes(currentPath.charAt(pageLink.length)))
  );
}

const Sidebar: React.FC<SidebarProps> = memo(({ sidebarExpanded, pages }) => {
  const router = useRouter();
  const routerState = useRouterState();
  return (
    <Stack
      justifyContent={"flex-start"}
      flexDirection={"column"}
      flex={1}
      bgColor="Background"
      paddingTop={"4"}
      paddingBottom={"4"}
      paddingLeft={"2"}
      paddingRight={"2"}
      backgroundColor={"Window"}
      gap="8"
      overflow={"hidden"}
      color="white"
      pointerEvents={"auto"}
      borderRightWidth={"1px"}
      borderRightStyle={"solid"}
    >
      <Stack gap="4" flex={1}>
        <For each={pages}>
          {(page) => (
            <ExpandableButton
              key={page.link}
              expanded={sidebarExpanded}
              title={page.title}
              icon={page.icon}
              onClick={() => router.navigate({ to: page.link })}
              active={isSidebarPageActive(
                routerState.location.pathname,
                page.link
              )}
            />
          )}
        </For>
      </Stack>
    </Stack>
  );
});

export default Sidebar;
