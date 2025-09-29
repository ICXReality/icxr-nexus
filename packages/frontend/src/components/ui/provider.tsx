"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { NexusTheme } from "./theme";
import NexusProvider from "../data/NexusProvider";

export function Provider(props: ColorModeProviderProps) {
  return (
    <NexusProvider>
      <ChakraProvider value={NexusTheme}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </NexusProvider>
  );
}
