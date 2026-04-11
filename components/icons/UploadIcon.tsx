import React from "react";
import Svg, { Path } from "react-native-svg";
import * as tokens from "@/constants/tokens";

export function UploadIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 18 18" fill="none">
      <Path
        d="M9 12V3M9 3L5.5 6.5M9 3L12.5 6.5"
        stroke={tokens.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 12V14C3 14.5523 3.44772 15 4 15H14C14.5523 15 15 14.5523 15 14V12"
        stroke={tokens.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
