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
import { LessonsScreen } from "@/screens/LessonsScreen";
import { getLessonForDay } from "@/data/lessons";

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
  const [selectedLessonDay, setSelectedLessonDay] = React.useState<number | null>(null);

  if (!fontsLoaded) return null;

  const navigate = (screen: ScreenName) => setActiveScreen(screen);
  const openLesson = (day: number) => {
    setSelectedLessonDay(day);
    setActiveScreen("lesson");
  };
  const nav = { navigate, openLesson };

  // Resolve the lesson at render time. If a caller somehow requests an
  // unauthored day, bail back to home rather than rendering a broken screen.
  const selectedLesson =
    selectedLessonDay !== null ? getLessonForDay(selectedLessonDay) : null;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {activeScreen === "home" && <HomeScreen navigation={nav} />}
      {activeScreen === "gallery" && <GalleryScreen navigation={nav} />}
      {activeScreen === "lessons" && <LessonsScreen navigation={nav} />}
      {activeScreen === "lesson" &&
        (selectedLesson ? (
          <LessonScreen navigation={nav} lesson={selectedLesson} />
        ) : (
          <HomeScreen navigation={nav} />
        ))}
    </SafeAreaProvider>
  );
}
