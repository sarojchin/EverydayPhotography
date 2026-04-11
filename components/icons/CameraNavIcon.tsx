import React from "react";
import Svg, { Rect, Circle, Path } from "react-native-svg";
import * as tokens from "@/constants/tokens";

export function CameraNavIcon() {
  const color = tokens.onSurface;
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" opacity={0.35}>
      <Rect x={2} y={6} width={18} height={13} rx={2.5} stroke={color} strokeWidth={1.4} />
      <Circle cx={11} cy={12.5} r={3.5} stroke={color} strokeWidth={1.4} />
      <Path
        d="M8 6L9 3.5H13L14 6"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
