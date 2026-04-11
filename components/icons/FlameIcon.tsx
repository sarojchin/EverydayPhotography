import React from "react";
import Svg, {
  Path,
  Defs,
  LinearGradient as SvgGradient,
  Stop,
} from "react-native-svg";

export function FlameIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Defs>
        <SvgGradient id="flame" x1="10" y1="2" x2="10" y2="17">
          <Stop stopColor="#FF6B35" />
          <Stop offset="1" stopColor="#D44800" />
        </SvgGradient>
      </Defs>
      <Path
        d="M10 2C10 2 6 6.5 6 10.5C6 13.5 7.8 16 10 17C12.2 16 14 13.5 14 10.5C14 6.5 10 2 10 2Z"
        fill="url(#flame)"
      />
      <Path
        d="M10 9C10 9 8.5 11 8.5 12.8C8.5 14.2 9.2 15.5 10 16C10.8 15.5 11.5 14.2 11.5 12.8C11.5 11 10 9 10 9Z"
        fill="#FFCC02"
      />
    </Svg>
  );
}
