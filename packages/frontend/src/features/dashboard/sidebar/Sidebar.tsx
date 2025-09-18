import ICXRSquareLogo from "@/components/ui/ICXRSquareLogo";
import { For, Stack } from "@chakra-ui/react";
import { useRouter, useRouterState } from "@tanstack/react-router";
import React, { memo, useState } from "react";
import SidebarExpandButton from "./SidebarExpandButton";
import SidebarPageButton from "./SidebarPageButton";
import { SidebarPage } from "./types";

type SidebarProps = {
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

const Sidebar: React.FC<SidebarProps> = memo(({ pages }) => {
  const router = useRouter();
  const routerState = useRouterState();
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack
      width={expanded ? "64" : "16"}
      alignItems={"flex-start"}
      flexDirection={"column"}
      minHeight="100vh"
      bgColor="Background"
      paddingLeft={"3"}
      paddingTop={"4"}
      paddingBottom={"4"}
      backgroundColor={"colorPalette.700"}
      gap="8"
      transition="width 0.2s"
      overflow={"hidden"}
      color="white"
    >
      <SidebarExpandButton
        expanded={expanded}
        onClick={() => setExpanded((e) => !e)}
      />
      <Stack gap="4" width="100%" flex={1}>
        <For each={pages}>
          {(page) => (
            <Stack direction="row" alignItems="center" width="100%" gap="4">
              <SidebarPageButton
                title={page.title}
                icon={page.icon}
                onClick={() => router.navigate({ to: page.link })}
                active={isSidebarPageActive(
                  routerState.location.pathname,
                  page.link
                )}
              />
            </Stack>
          )}
        </For>
      </Stack>
      <ICXRSquareLogo marginLeft="1" size="xl" color="white" />
    </Stack>
  );
});

export default Sidebar;
