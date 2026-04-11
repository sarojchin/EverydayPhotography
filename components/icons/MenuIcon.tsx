import React from "react";
import Svg, { Line } from "react-native-svg";
import * as tokens from "@/constants/tokens";

export function MenuIcon() {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Line x1={3} y1={6} x2={19} y2={6} stroke={tokens.onSurface} strokeWidth={1.6} strokeLinecap="round" />
      <Line x1={3} y1={11} x2={19} y2={11} stroke={tokens.onSurface} strokeWidth={1.6} strokeLinecap="round" />
      <Line x1={3} y1={16} x2={19} y2={16} stroke={tokens.onSurface} strokeWidth={1.6} strokeLinecap="round" />
    </Svg>
  );
}
