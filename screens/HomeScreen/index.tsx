import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
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
} from "@/services/challengeStorage";
import { useCapturePhoto } from "@/hooks/useCapturePhoto";
import { getLessonForDay, TOTAL_DAYS } from "@/data/lessons";
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
  const [currentDay, setCurrentDay] = React.useState(1);
  const [streak, setStreak] = React.useState(1);
  const [challengeData, setChallengeData] = React.useState<ChallengeData | null>(null);

  React.useEffect(() => {
    loadChallengeData().then((data) => {
      setChallengeData(data);
      setCurrentDay(getDayNumber(data.startDate));
      setStreak(data.streak);
    });
  }, []);

  const { takePhoto, uploadFromLibrary } = useCapturePhoto({
    challengeData,
    onChallengeUpdate: (updated) => {
      setChallengeData(updated);
      setStreak(updated.streak);
    },
  });

  /* Streak-Bloom ring math */
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (currentDay / TOTAL_DAYS) * circumference;

  /* Today's lesson — falls back to day 1 if current day has no authored content yet */
  const todaysLesson = getLessonForDay(currentDay) ?? getLessonForDay(1);
  const heroLessonDay = getLessonForDay(currentDay) !== null ? currentDay : 1;
  const heroReady = challengeData !== null;

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
            Day {currentDay} of {TOTAL_DAYS}
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
                {currentDay}/{TOTAL_DAYS}
              </Text>
            </View>
          </View>
        </View>

        {/* Progress bar */}
        <View style={sharedStyles.section}>
          <View style={styles.progressHeader}>
            <Text style={sharedStyles.label}>Progress</Text>
            <Text style={sharedStyles.label}>
              {currentDay}/{TOTAL_DAYS}
            </Text>
          </View>
          <View style={styles.progressTrack}>
            <LinearGradient
              colors={[tokens.primary, tokens.primaryContainer]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[
                styles.progressFill,
                { width: `${(currentDay / TOTAL_DAYS) * 100}%` as never },
              ]}
            />
          </View>
        </View>

        {/* Daily lesson hero card */}
        <View style={sharedStyles.section}>
          <Pressable
            style={styles.heroCard}
            onPress={() => heroReady && navigation.openLesson(heroLessonDay)}
            disabled={!heroReady}
            accessibilityLabel={
              todaysLesson
                ? `Start today's lesson: ${todaysLesson.title}`
                : "Today's lesson — coming soon"
            }
          >
            {/* Base warm gradient (same palette as the Light & Angle illustration) */}
            <LinearGradient
              colors={["#FFD59E", "#FFB066", "#A66A3A", "#4A2F1F"]}
              locations={[0, 0.35, 0.7, 1]}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 0.9, y: 1 }}
              style={StyleSheet.absoluteFill}
            />
            {/* Soft warm accent overlay for depth */}
            <LinearGradient
              colors={[
                "rgba(255, 220, 160, 0.35)",
                "transparent",
                "transparent",
                "rgba(0, 0, 0, 0.25)",
              ]}
              locations={[0, 0.3, 0.7, 1]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={StyleSheet.absoluteFill}
            />

            <View style={styles.heroContent}>
              {/* Top pill */}
              <View style={styles.heroBadge}>
                <Text style={styles.heroBadgeText}>Today's Lesson</Text>
              </View>

              {/* Centered title + subtitle */}
              <View style={styles.heroTextBlock}>
                <Text style={styles.heroTitle}>
                  {todaysLesson?.title ?? "Coming soon"}
                </Text>
                <Text style={styles.heroSubtitle}>
                  {todaysLesson?.subtitle ??
                    "New lessons unlock each day of your challenge."}
                </Text>
              </View>

              {/* CTA */}
              <Pressable
                style={styles.heroCta}
                onPress={() =>
                  heroReady && navigation.openLesson(heroLessonDay)
                }
                disabled={!heroReady}
              >
                <LinearGradient
                  colors={[tokens.primary, tokens.primaryContainer]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.heroCtaGradient}
                >
                  <Text style={styles.heroCtaText}>
                    {todaysLesson ? "Start now" : "Coming soon"}
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </Pressable>

          {/* View all lessons link */}
          <Pressable
            style={styles.viewAllLink}
            onPress={() => navigation.navigate("lessons")}
          >
            <Text style={styles.viewAllLinkText}>View all lessons</Text>
          </Pressable>
        </View>

        {/* CTAs */}
        <View style={[sharedStyles.section, styles.ctaSection]}>
          {/* Primary — Take Photo */}
          <Pressable style={styles.primaryBtn} onPress={takePhoto}>
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
          <Pressable style={styles.ghostBtn} onPress={uploadFromLibrary}>
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
