"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { NexusTheme } from "./theme"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={NexusTheme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
