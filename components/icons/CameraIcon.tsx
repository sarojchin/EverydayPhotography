import React from "react";
import Svg, { Rect, Circle, Path } from "react-native-svg";
import * as tokens from "@/constants/tokens";

export function CameraIcon({ color = tokens.onSurface }: { color?: string }) {
  return (
    <Svg width={18} height={18} viewBox="0 0 20 20" fill="none">
      <Rect x={2} y={5} width={16} height={12} rx={2.5} stroke={color} strokeWidth={1.5} />
      <Circle cx={10} cy={11} r={3.5} stroke={color} strokeWidth={1.5} />
      <Path
        d="M7.5 5L8.5 3H11.5L12.5 5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
