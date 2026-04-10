import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Platform,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

/* Cross-platform blur: real BlurView on iOS, semi-transparent View on Android */
function PlatformBlur({
  style,
  children,
  intensity = 40,
  tint = "dark",
}: {
  style?: object;
  children?: React.ReactNode;
  intensity?: number;
  tint?: "dark" | "light" | "systemChromeMaterialLight";
}) {
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

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Svg, {
  Circle,
  Line,
  Path,
  Defs,
  LinearGradient as SvgGradient,
  Stop,
  Rect,
} from "react-native-svg";
import * as tokens from "./constants/tokens";

/* ────────────────────────────────────────────────────────── */
/*  App shell                                                 */
/* ────────────────────────────────────────────────────────── */

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

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <HomeScreen />
    </SafeAreaProvider>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  Home screen                                               */
/* ────────────────────────────────────────────────────────── */

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const currentDay = 4;
  const totalDays = 30;
  const [photoUri, setPhotoUri] = React.useState<string | null>(null);

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
    }
  }

  /* Streak-Bloom ring math */
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (currentDay / totalDays) * circumference;

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ApertureIcon />
          <Text style={styles.headerTitle}>The Editorial Eye</Text>
        </View>
        <Pressable accessibilityLabel="Menu" hitSlop={12}>
          <MenuIcon />
        </Pressable>
      </View>

      {/* ── Scrollable content ── */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Day counter */}
        <View style={styles.section}>
          <Text style={styles.label}>Monday, Oct 24</Text>
          <Text style={styles.dayHeading}>
            Day {currentDay} of {totalDays}
          </Text>
        </View>

        {/* Streak + Bloom ring */}
        <View style={[styles.section, styles.streakRow]}>
          <View>
            <Text style={styles.label}>Current Streak</Text>
            <View style={styles.streakValue}>
              <FlameIcon />
              <Text style={styles.streakText}>
                {currentDay} Day Streak
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
        <View style={styles.section}>
          <View style={styles.progressHeader}>
            <Text style={styles.label}>Progress</Text>
            <Text style={styles.label}>
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
        <View style={styles.section}>
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
        <View style={styles.section}>
          <Text style={styles.promptHeading}>
            Capture a food photo using natural light only
          </Text>
          <Text style={styles.promptBody}>
            Find a window, observe the shadows, and highlight the textures of
            your next meal.
          </Text>
        </View>

        {/* CTAs */}
        <View style={[styles.section, styles.ctaSection]}>
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
      <PlatformBlur
        intensity={80}
        tint="systemChromeMaterialLight"
        style={[
          styles.bottomNav,
          { paddingBottom: Math.max(insets.bottom, 8) },
        ]}
      >
        <Pressable style={styles.navItem}>
          <HomeIcon active />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Home</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <GalleryIcon />
          <Text style={styles.navLabel}>Gallery</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <CameraNavIcon />
          <Text style={styles.navLabel}>Photos</Text>
        </Pressable>
      </PlatformBlur>
    </View>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  Inline SVG Icons                                          */
/* ────────────────────────────────────────────────────────── */

function ApertureIcon() {
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

function MenuIcon() {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Line x1={3} y1={6} x2={19} y2={6} stroke={tokens.onSurface} strokeWidth={1.6} strokeLinecap="round" />
      <Line x1={3} y1={11} x2={19} y2={11} stroke={tokens.onSurface} strokeWidth={1.6} strokeLinecap="round" />
      <Line x1={3} y1={16} x2={19} y2={16} stroke={tokens.onSurface} strokeWidth={1.6} strokeLinecap="round" />
    </Svg>
  );
}

function FlameIcon() {
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

function CameraIcon({ color = tokens.onSurface }: { color?: string }) {
  return (
    <Svg width={18} height={18} viewBox="0 0 20 20" fill="none">
      <Rect x={2} y={5} width={16} height={12} rx={2.5} stroke={color} strokeWidth={1.5} />
      <Circle cx={10} cy={11} r={3.5} stroke={color} strokeWidth={1.5} />
      <Path
        d="M7.5 5L8.5 3H11.5L12.5 5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function UploadIcon() {
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

function HomeIcon({ active = false }) {
  const color = active ? tokens.primary : tokens.onSurface;
  const opacity = active ? 1 : 0.35;
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" opacity={opacity}>
      <Path
        d="M3 9.5L11 3L19 9.5V18C19 18.5523 18.5523 19 18 19H14V14H8V19H4C3.44772 19 3 18.5523 3 18V9.5Z"
        fill={active ? color : "none"}
        stroke={color}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function GalleryIcon() {
  const color = tokens.onSurface;
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" opacity={0.35}>
      <Rect x={3} y={3} width={7} height={7} rx={1.5} stroke={color} strokeWidth={1.4} />
      <Rect x={12} y={3} width={7} height={7} rx={1.5} stroke={color} strokeWidth={1.4} />
      <Rect x={3} y={12} width={7} height={7} rx={1.5} stroke={color} strokeWidth={1.4} />
      <Rect x={12} y={12} width={7} height={7} rx={1.5} stroke={color} strokeWidth={1.4} />
    </Svg>
  );
}

function CameraNavIcon() {
  const color = tokens.onSurface;
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" opacity={0.35}>
      <Rect x={2} y={6} width={18} height={13} rx={2.5} stroke={color} strokeWidth={1.4} />
      <Circle cx={11} cy={12.5} r={3.5} stroke={color} strokeWidth={1.4} />
      <Path
        d="M8 6L9 3.5H13L14 6"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  Styles                                                    */
/* ────────────────────────────────────────────────────────── */

const styles = StyleSheet.create({
  /* ── Root ── */
  root: {
    flex: 1,
    backgroundColor: tokens.surface,
  },

  /* ── Header ── */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerTitle: {
    fontFamily: "Manrope_700Bold",
    fontSize: 17,
    letterSpacing: -0.34,
    color: tokens.onSurface,
  },

  /* ── Scroll ── */
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },

  /* ── Shared section spacing ── */
  section: {
    marginTop: 28,
  },

  /* ── Labels ── */
  label: {
    fontFamily: "Inter_500Medium",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.3,
    color: tokens.onSurfaceMuted,
  },

  /* ── Day counter ── */
  dayHeading: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 28,
    letterSpacing: -0.56,
    color: tokens.onSurface,
    marginTop: 4,
  },

  /* ── Streak ── */
  streakRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  streakValue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
  },
  streakText: {
    fontFamily: "Manrope_700Bold",
    fontSize: 17,
    letterSpacing: -0.34,
    color: tokens.onSurface,
  },

  /* ── Streak Bloom ring ── */
  ringContainer: {
    width: 76,
    height: 76,
    alignItems: "center",
    justifyContent: "center",
  },
  ringLabel: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  ringText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: "rgba(28,27,27,0.65)",
  },

  /* ── Progress bar ── */
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  progressTrack: {
    height: 5,
    borderRadius: 3,
    backgroundColor: tokens.surfaceHighest,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
  },

  /* ── Photo card ── */
  photoCard: {
    aspectRatio: 4 / 3,
    borderRadius: 24,
    overflow: "hidden",
  },
  categoryTag: {
    position: "absolute",
    bottom: 16,
    left: 16,
    borderRadius: 999,
    overflow: "hidden",
  },
  categoryBlur: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  categoryDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: tokens.primaryContainer,
  },
  categoryText: {
    fontFamily: "Inter_500Medium",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    color: "#ffffff",
  },

  /* ── Daily prompt ── */
  promptHeading: {
    fontFamily: "Manrope_700Bold",
    fontSize: 21,
    letterSpacing: -0.42,
    lineHeight: 28,
    color: tokens.onSurface,
  },
  promptBody: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 22,
    color: "rgba(28,27,27,0.55)",
    marginTop: 10,
  },

  /* ── CTAs ── */
  ctaSection: {
    alignItems: "center",
    gap: 12,
  },
  primaryBtn: {
    width: "100%",
    borderRadius: 999,
    overflow: "hidden",
  },
  primaryBtnGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 15,
  },
  primaryBtnText: {
    fontFamily: "Manrope_700Bold",
    fontSize: 15,
    color: "#ffffff",
    letterSpacing: -0.15,
  },
  ghostBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 8,
  },
  ghostBtnText: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    color: tokens.primary,
  },

  /* ── Bottom navigation ── */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  navLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "rgba(28,27,27,0.35)",
  },
  navLabelActive: {
    color: tokens.primary,
  },
});
