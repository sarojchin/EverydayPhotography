import React from "react";
import Svg, { Path } from "react-native-svg";
import * as tokens from "@/constants/tokens";

export function BookIcon({ active = false }: { active?: boolean }) {
  const color = active ? tokens.primary : tokens.onSurface;
  const opacity = active ? 1 : 0.35;
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" opacity={opacity}>
      <Path
        d="M4 4C4 3.44772 4.44772 3 5 3H17C17.5523 3 18 3.44772 18 4V18C18 18.5523 17.5523 19 17 19H5C4.44772 19 4 18.5523 4 18V4Z"
        fill={active ? color : "none"}
        stroke={color}
        strokeWidth={1.4}
      />
      <Path d="M8 7H14" stroke={active ? tokens.surfaceLowest : color} strokeWidth={1.4} strokeLinecap="round" />
      <Path d="M8 11H14" stroke={active ? tokens.surfaceLowest : color} strokeWidth={1.4} strokeLinecap="round" />
      <Path d="M8 15H11" stroke={active ? tokens.surfaceLowest : color} strokeWidth={1.4} strokeLinecap="round" />
    </Svg>
  );
}
