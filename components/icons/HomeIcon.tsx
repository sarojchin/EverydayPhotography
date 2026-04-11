import React from "react";
import Svg, { Path } from "react-native-svg";
import * as tokens from "@/constants/tokens";

export function HomeIcon({ active = false }: { active?: boolean }) {
  const color = active ? tokens.primary : tokens.onSurface;
  const opacity = active ? 1 : 0.35;
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" opacity={opacity}>
      <Path
        d="M3 9.5L11 3L19 9.5V18C19 18.5523 18.5523 19 18 19H14V14H8V19H4C3.44772 19 3 18.5523 3 18V9.5Z"
        fill={active ? color : "none"}
        stroke={color}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
