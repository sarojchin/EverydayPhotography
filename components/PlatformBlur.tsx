import React from "react";
import { Platform, View } from "react-native";
import { BlurView } from "expo-blur";

export type PlatformBlurProps = {
  style?: object;
  children?: React.ReactNode;
  intensity?: number;
  tint?: "dark" | "light" | "systemChromeMaterialLight";
};

export function PlatformBlur({
  style,
  children,
  intensity = 40,
  tint = "dark",
}: PlatformBlurProps) {
  if (Platform.OS === "ios") {
    return (
      <BlurView intensity={intensity} tint={tint} style={style}>
        {children}
      </BlurView>
    );
  }
  const bg =
    tint === "dark"
      ? "rgba(20,20,20,0.55)"
      : "rgba(255,255,255,0.82)";
  return <View style={[style, { backgroundColor: bg }]}>{children}</View>;
}
