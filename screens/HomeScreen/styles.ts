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

  /* ── Daily lesson hero card ── */
  heroCard: {
    aspectRatio: 3 / 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  heroContent: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  heroBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  heroBadgeText: {
    fontFamily: "Inter_500Medium",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1.3,
    color: "#ffffff",
  },
  heroTextBlock: {
    gap: 8,
  },
  heroTitle: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 34,
    lineHeight: 38,
    letterSpacing: -0.68,
    color: "#ffffff",
  },
  heroSubtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "rgba(255, 255, 255, 0.78)",
    marginBottom: 12,
  },
  heroCta: {
    alignSelf: "flex-start",
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 4,
  },
  heroCtaGradient: {
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  heroCtaText: {
    fontFamily: "Manrope_700Bold",
    fontSize: 15,
    letterSpacing: -0.15,
    color: "#ffffff",
  },

  /* ── View all lessons ghost link ── */
  viewAllLink: {
    alignSelf: "center",
    paddingVertical: 12,
    marginTop: 8,
  },
  viewAllLinkText: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    color: tokens.primary,
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
