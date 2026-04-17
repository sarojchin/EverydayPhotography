import React from "react";
import { Pressable, Text } from "react-native";
import { PlatformBlur } from "@/components/PlatformBlur";
import { HomeIcon, GalleryIcon, CameraNavIcon, BookIcon } from "@/components/icons";
import { sharedStyles } from "@/styles/shared";
import type { ScreenName } from "@/types/navigation";

type BottomNavProps = {
  activeScreen: ScreenName;
  navigate: (screen: ScreenName) => void;
  bottomInset: number;
};

export function BottomNav({ activeScreen, navigate, bottomInset }: BottomNavProps) {
  return (
    <PlatformBlur
      intensity={80}
      tint="systemChromeMaterialLight"
      style={[
        sharedStyles.bottomNav,
        { paddingBottom: Math.max(bottomInset, 8) },
      ]}
    >
      <Pressable style={sharedStyles.navItem} onPress={() => navigate("home")}>
        <HomeIcon active={activeScreen === "home"} />
        <Text
          style={[
            sharedStyles.navLabel,
            activeScreen === "home" && sharedStyles.navLabelActive,
          ]}
        >
          Home
        </Text>
      </Pressable>
      <Pressable style={sharedStyles.navItem} onPress={() => navigate("gallery")}>
        <GalleryIcon active={activeScreen === "gallery"} />
        <Text
          style={[
            sharedStyles.navLabel,
            activeScreen === "gallery" && sharedStyles.navLabelActive,
          ]}
        >
          Gallery
        </Text>
      </Pressable>
      <Pressable style={sharedStyles.navItem}>
        <CameraNavIcon />
        <Text style={sharedStyles.navLabel}>Photos</Text>
      </Pressable>
      <Pressable style={sharedStyles.navItem} onPress={() => navigate("lessons")}>
        <BookIcon active={activeScreen === "lessons"} />
        <Text
          style={[
            sharedStyles.navLabel,
            activeScreen === "lessons" && sharedStyles.navLabelActive,
          ]}
        >
          Lessons
        </Text>
      </Pressable>
    </PlatformBlur>
  );
}
