import React from "react";
import Svg, { Circle, Line } from "react-native-svg";

export function ApertureIcon() {
  const c = "#D44800";
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <Circle cx={15} cy={15} r={12} stroke={c} strokeWidth={1.6} />
      <Circle cx={15} cy={15} r={5} stroke={c} strokeWidth={1.6} />
      <Line x1={15} y1={3} x2={16.8} y2={10} stroke={c} strokeWidth={1.1} strokeLinecap="round" />
      <Line x1={25.3} y1={8.5} x2={19.2} y2={12} stroke={c} strokeWidth={1.1} strokeLinecap="round" />
      <Line x1={25.3} y1={21.5} x2={19.2} y2={18} stroke={c} strokeWidth={1.1} strokeLinecap="round" />
      <Line x1={15} y1={27} x2={13.2} y2={20} stroke={c} strokeWidth={1.1} strokeLinecap="round" />
      <Line x1={4.7} y1={21.5} x2={10.8} y2={18} stroke={c} strokeWidth={1.1} strokeLinecap="round" />
      <Line x1={4.7} y1={8.5} x2={10.8} y2={12} stroke={c} strokeWidth={1.1} strokeLinecap="round" />
    </Svg>
  );
}
