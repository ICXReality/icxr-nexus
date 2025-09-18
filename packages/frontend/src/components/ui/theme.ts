import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const ThemeConfig = defineConfig({
    globalCss: {
        html: {
            colorPalette: "purple"
        }
    }
})

export const NexusTheme = createSystem(defaultConfig, ThemeConfig);