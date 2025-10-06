import { defineRecipe, useRecipe } from "@chakra-ui/react";
import { IcxrGradient } from "./gradient";

export const dotRecipe = defineRecipe({
  base: {
    background: IcxrGradient,
    maskImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0)",
    maskRepeat: "repeat",
    maskSize: "8px 8px",
    maskMode: "revert",
    maskComposite: "intersect",
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    zIndex: 0,
  },
});

export function useDots() {
  const recipe = useRecipe({ recipe: dotRecipe });
  const styles = recipe();
  return {
    position: "relative",
    _before: styles,
  };
}
