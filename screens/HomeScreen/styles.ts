import { StyleSheet } from "react-native";
import * as tokens from "@/constants/tokens";

export const styles = StyleSheet.create({
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

  /* ── Today's Lesson entry card ── */
  lessonCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 20,
    borderRadius: 24,
    backgroundColor: tokens.surfaceLowest,
  },
  lessonCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: tokens.surfaceHighest,
    alignItems: "center",
    justifyContent: "center",
  },
  lessonCardBody: {
    flex: 1,
  },
  lessonCardTitle: {
    fontFamily: "Manrope_700Bold",
    fontSize: 19,
    letterSpacing: -0.38,
    color: tokens.onSurface,
    marginTop: 4,
  },
  lessonCardSub: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: tokens.onSurfaceMuted,
    marginTop: 2,
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
});
