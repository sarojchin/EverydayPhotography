import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  Manrope_400Regular,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import type { ScreenName } from "@/types/navigation";
import { HomeScreen } from "@/screens/HomeScreen";
import { GalleryScreen } from "@/screens/GalleryScreen";
import { LessonScreen } from "@/screens/LessonScreen";
import { CURRENT_LESSON } from "@/data/lessons";

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const [activeScreen, setActiveScreen] = React.useState<ScreenName>("home");

  if (!fontsLoaded) return null;

  const navigate = (screen: ScreenName) => setActiveScreen(screen);

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {activeScreen === "home" && (
        <HomeScreen navigation={{ navigate }} />
      )}
      {activeScreen === "gallery" && (
        <GalleryScreen navigation={{ navigate }} />
      )}
      {activeScreen === "lesson" && (
        <LessonScreen navigation={{ navigate }} lesson={CURRENT_LESSON} />
      )}
    </SafeAreaProvider>
  );
}
