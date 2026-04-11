import React from "react";
import Svg, { Rect } from "react-native-svg";
import * as tokens from "@/constants/tokens";

export function GalleryIcon({ active = false }: { active?: boolean }) {
  const color = active ? tokens.primary : tokens.onSurface;
  const opacity = active ? 1 : 0.35;
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" opacity={opacity}>
      <Rect x={3} y={3} width={7} height={7} rx={1.5} fill={active ? color : "none"} stroke={color} strokeWidth={1.4} />
      <Rect x={12} y={3} width={7} height={7} rx={1.5} fill={active ? color : "none"} stroke={color} strokeWidth={1.4} />
      <Rect x={3} y={12} width={7} height={7} rx={1.5} fill={active ? color : "none"} stroke={color} strokeWidth={1.4} />
      <Rect x={12} y={12} width={7} height={7} rx={1.5} fill={active ? color : "none"} stroke={color} strokeWidth={1.4} />
    </Svg>
  );
}
