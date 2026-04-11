import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, {
  Circle,
  Defs,
  LinearGradient as SvgGradient,
  Stop,
} from "react-native-svg";

import * as tokens from "@/constants/tokens";
import type { ChallengeData } from "@/types/challenge";
import type { NavigationProps } from "@/types/navigation";
import {
  loadChallengeData,
  getDayNumber,
  recordPhotoForToday,
} from "@/services/challengeStorage";
import { PlatformBlur } from "@/components/PlatformBlur";
import { BottomNav } from "@/components/BottomNav";
import {
  ApertureIcon,
  MenuIcon,
  FlameIcon,
  CameraIcon,
  UploadIcon,
} from "@/components/icons";
import { sharedStyles } from "@/styles/shared";
import { styles } from "./styles";

export function HomeScreen({ navigation }: { navigation: NavigationProps }) {
  const insets = useSafeAreaInsets();
  const totalDays = 30;
  const [currentDay, setCurrentDay] = React.useState(1);
  const [streak, setStreak] = React.useState(1);
  const [challengeData, setChallengeData] = React.useState<ChallengeData | null>(null);
  const [photoUri, setPhotoUri] = React.useState<string | null>(null);

  React.useEffect(() => {
    loadChallengeData().then((data) => {
      setChallengeData(data);
      setCurrentDay(getDayNumber(data.startDate));
      setStreak(data.streak);
    });
  }, []);

  async function handleTakePhoto() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Camera access needed",
        "Allow camera access in Settings to take photos."
      );
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.92,
    });
    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
      if (challengeData) {
        const updated = await recordPhotoForToday(challengeData);
        setChallengeData(updated);
        setStreak(updated.streak);
      }
    }
  }

  async function handleUploadFromLibrary() {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Photo library access needed",
        "Allow photo library access in Settings to upload photos."
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.92,
    });
    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
      if (challengeData) {
        const updated = await recordPhotoForToday(challengeData);
        setChallengeData(updated);
        setStreak(updated.streak);
      }
    }
  }

  /* Streak-Bloom ring math */
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (currentDay / totalDays) * circumference;

  return (
    <View style={[sharedStyles.root, { paddingTop: insets.top }]}>
      {/* ── Header ── */}
      <View style={sharedStyles.header}>
        <View style={sharedStyles.headerLeft}>
          <ApertureIcon />
          <Text style={sharedStyles.headerTitle}>Everyday Photography</Text>
        </View>
        <Pressable accessibilityLabel="Menu" hitSlop={12}>
          <MenuIcon />
        </Pressable>
      </View>

      {/* ── Scrollable content ── */}
      <ScrollView
        style={sharedStyles.scroll}
        contentContainerStyle={sharedStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Day counter */}
        <View style={sharedStyles.section}>
          <Text style={sharedStyles.label}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </Text>
          <Text style={styles.dayHeading}>
            Day {currentDay} of {totalDays}
          </Text>
        </View>

        {/* Streak + Bloom ring */}
        <View style={[sharedStyles.section, styles.streakRow]}>
          <View>
            <Text style={sharedStyles.label}>Current Streak</Text>
            <View style={styles.streakValue}>
              <FlameIcon />
              <Text style={styles.streakText}>
                {streak} Day Streak
              </Text>
            </View>
          </View>

          {/* Streak Bloom ring */}
          <View style={styles.ringContainer}>
            <Svg width={76} height={76} viewBox="0 0 80 80">
              <Defs>
                <SvgGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
                  <Stop offset="0" stopColor={tokens.tertiary} />
                  <Stop offset="1" stopColor={tokens.tertiaryContainer} />
                </SvgGradient>
              </Defs>
              {/* Track */}
              <Circle
                cx={40}
                cy={40}
                r={radius}
                fill="none"
                stroke={tokens.surfaceHighest}
                strokeWidth={5.5}
              />
              {/* Progress arc */}
              <Circle
                cx={40}
                cy={40}
                r={radius}
                fill="none"
                stroke="url(#ring)"
                strokeWidth={5.5}
                strokeLinecap="round"
                strokeDasharray={`${circumference}`}
                strokeDashoffset={strokeDashoffset}
                rotation={-90}
                origin="40, 40"
              />
            </Svg>
            <View style={styles.ringLabel}>
              <Text style={styles.ringText}>
                {currentDay}/{totalDays}
              </Text>
            </View>
          </View>
        </View>

        {/* Progress bar */}
        <View style={sharedStyles.section}>
          <View style={styles.progressHeader}>
            <Text style={sharedStyles.label}>Progress</Text>
            <Text style={sharedStyles.label}>
              {currentDay}/{totalDays}
            </Text>
          </View>
          <View style={styles.progressTrack}>
            <LinearGradient
              colors={[tokens.primary, tokens.primaryContainer]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[
                styles.progressFill,
                { width: `${(currentDay / totalDays) * 100}%` as never },
              ]}
            />
          </View>
        </View>

        {/* Photo card */}
        <View style={sharedStyles.section}>
          <View style={styles.photoCard}>
            {photoUri ? (
              <Image
                source={{ uri: photoUri }}
                style={StyleSheet.absoluteFill}
                resizeMode="cover"
              />
            ) : (
              <>
                <LinearGradient
                  colors={["#5C4033", "#6B8E23", "#8B7355", "#A0522D"]}
                  locations={[0, 0.35, 0.65, 1]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={StyleSheet.absoluteFill}
                />
                {/* Warm overlay accents */}
                <LinearGradient
                  colors={[
                    "rgba(107,142,35,0.5)",
                    "transparent",
                    "rgba(255,200,60,0.35)",
                    "transparent",
                  ]}
                  locations={[0, 0.4, 0.6, 1]}
                  start={{ x: 0.3, y: 0.3 }}
                  end={{ x: 0.8, y: 0.8 }}
                  style={StyleSheet.absoluteFill}
                />
              </>
            )}

            {/* FOOD category tag */}
            <View style={styles.categoryTag}>
              <PlatformBlur
                intensity={40}
                tint="dark"
                style={styles.categoryBlur}
              >
                <View style={styles.categoryDot} />
                <Text style={styles.categoryText}>Food</Text>
              </PlatformBlur>
            </View>
          </View>
        </View>

        {/* Daily prompt */}
        <View style={sharedStyles.section}>
          <Text style={styles.promptHeading}>
            Capture a food photo using natural light only
          </Text>
          <Text style={styles.promptBody}>
            Find a window, observe the shadows, and highlight the textures of
            your next meal.
          </Text>
        </View>

        {/* CTAs */}
        <View style={[sharedStyles.section, styles.ctaSection]}>
          {/* Primary — Take Photo */}
          <Pressable style={styles.primaryBtn} onPress={handleTakePhoto}>
            <LinearGradient
              colors={[tokens.primary, tokens.primaryContainer]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.primaryBtnGradient}
            >
              <CameraIcon color="#ffffff" />
              <Text style={styles.primaryBtnText}>Take Photo</Text>
            </LinearGradient>
          </Pressable>

          {/* Ghost — Upload */}
          <Pressable style={styles.ghostBtn} onPress={handleUploadFromLibrary}>
            <UploadIcon />
            <Text style={styles.ghostBtnText}>Upload from Library</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* ── Bottom navigation ── */}
      <BottomNav
        activeScreen="home"
        navigate={navigation.navigate}
        bottomInset={insets.bottom}
      />
    </View>
  );
}
