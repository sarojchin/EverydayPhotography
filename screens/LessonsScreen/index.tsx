import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { NavigationProps } from "@/types/navigation";
import {
  loadChallengeData,
  getDayNumber,
} from "@/services/challengeStorage";
import {
  getLessonForDay,
  isLessonUnlocked,
  TOTAL_DAYS,
} from "@/data/lessons";
import { BottomNav } from "@/components/BottomNav";
import { ApertureIcon } from "@/components/icons";
import { sharedStyles } from "@/styles/shared";
import { styles } from "./styles";

type RowState = "completed" | "today" | "locked";

function rowStateFor(day: number, currentDay: number): RowState {
  if (!isLessonUnlocked(day, currentDay)) return "locked";
  if (day === currentDay) return "today";
  return "completed";
}

export function LessonsScreen({ navigation }: { navigation: NavigationProps }) {
  const insets = useSafeAreaInsets();
  const [currentDay, setCurrentDay] = React.useState(1);

  React.useEffect(() => {
    loadChallengeData().then((data) => {
      setCurrentDay(getDayNumber(data.startDate));
    });
  }, []);

  const days = Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1);

  return (
    <View style={[sharedStyles.root, { paddingTop: insets.top }]}>
      {/* ── Header ── */}
      <View style={sharedStyles.header}>
        <View style={sharedStyles.headerLeft}>
          <ApertureIcon />
          <Text style={sharedStyles.headerTitle}>Everyday Photography</Text>
        </View>
        <Pressable
          accessibilityLabel="Close"
          hitSlop={12}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.closeText}>Done</Text>
        </Pressable>
      </View>

      {/* ── Scrollable list ── */}
      <ScrollView
        style={sharedStyles.scroll}
        contentContainerStyle={sharedStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={sharedStyles.section}>
          <Text style={sharedStyles.label}>30-Day Challenge</Text>
          <Text style={styles.heading}>All Lessons</Text>
        </View>

        <View style={[sharedStyles.section, styles.list]}>
          {days.map((day) => {
            const lesson = getLessonForDay(day);
            const state = rowStateFor(day, currentDay);
            const pressable = state !== "locked";

            return (
              <Pressable
                key={day}
                style={[
                  styles.row,
                  state === "locked" && styles.rowLocked,
                  state === "today" && styles.rowToday,
                ]}
                onPress={() => pressable && navigation.openLesson(day)}
                disabled={!pressable}
                accessibilityLabel={
                  pressable
                    ? `Open Day ${day}: ${lesson?.title ?? ""}`
                    : `Day ${day} locked`
                }
              >
                <View style={styles.rowDayBlock}>
                  <Text
                    style={[
                      styles.rowDayLabel,
                      state === "locked" && styles.textMuted,
                    ]}
                  >
                    Day {day}
                  </Text>
                </View>

                <View style={styles.rowBody}>
                  <Text
                    style={[
                      styles.rowTitle,
                      state === "locked" && styles.textMuted,
                    ]}
                    numberOfLines={1}
                  >
                    {lesson?.title ?? "Coming soon"}
                  </Text>
                  {lesson && (
                    <Text
                      style={[
                        styles.rowSubtitle,
                        state === "locked" && styles.textMuted,
                      ]}
                      numberOfLines={1}
                    >
                      {lesson.subtitle}
                    </Text>
                  )}
                </View>

                <View
                  style={[
                    styles.badge,
                    state === "today" && styles.badgeToday,
                    state === "completed" && styles.badgeCompleted,
                    state === "locked" && styles.badgeLocked,
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      state === "today" && styles.badgeTextOnAccent,
                    ]}
                  >
                    {state === "today"
                      ? "Today"
                      : state === "completed"
                        ? "Done"
                        : "Locked"}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      {/* ── Bottom navigation ── */}
      <BottomNav
        activeScreen="lessons"
        navigate={navigation.navigate}
        bottomInset={insets.bottom}
      />
    </View>
  );
}

